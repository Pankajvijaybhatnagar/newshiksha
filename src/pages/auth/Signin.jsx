import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";

import loginImg from "../../assets/img/others/login.jpg";
import { config } from "../../conf/config"; // ✅ API base URL

export const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch(`${config.apiBaseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await res.json();
      console.log("Login response:", result);

      if (res.ok && result.token) {
        // ✅ Save token to sessionStorage
        sessionStorage.setItem("token", result.token);

        // alert("Login successful!");
        navigate("/admin"); // redirect to dashboard (change path as needed)
      } else {
        setErrorMsg(result.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("❌ Login failed:", err);
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row td_gap_y_40">
            <div className="col-lg-6">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5">
                <div className="td_form_card_in">
                  <h2 className="td_fs_36 td_mb_20">SIGN IN</h2>
                  <hr />
                  <div className="td_height_30 td_height_lg_30" />

                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="td_form_field td_mb_30 td_medium td_white_bg"
                      placeholder="Email *"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="td_form_field td_mb_10 td_medium td_white_bg"
                      placeholder="Password *"
                      required
                    />

                    {errorMsg && (
                      <p className="text-danger td_mb_20">{errorMsg}</p>
                    )}

                    <div className="td_form_card_bottom td_mb_25">
                      <button
                        type="submit"
                        className="td_btn td_style_1 td_radius_10 td_medium"
                        disabled={loading}
                      >
                        <span className="td_btn_in td_white_color td_accent_bg mb-2">
                          <span>{loading ? "Signing in..." : "Sign In"}</span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="td_sign_thumb">
                <img
                  src={loginImg}
                  alt="Login"
                  className="w-100 td_radius_10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    </Layout>
  );
};
