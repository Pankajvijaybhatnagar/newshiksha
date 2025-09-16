// filename: firstform.jsx
"use client";

import React, { useState } from "react";
import { Conclave } from "./Conclave";
import { Accommodation } from "./Accommodation";
import { General } from "./General";
import { Volunteer } from "./Volunteer";
import { Talent } from "./Talent";
import { BestPractice } from "./BestPractice";
import { ProjectDisplay } from "./ProjectDisplay";
import { English } from "./English";
import { Organizer } from "./Organizer";

import { config } from "../../conf/config"; // ✅ import apiBaseUrl

export const Firstform = () => {
  const [event, setEvent] = useState("");
  const [registrationType, setRegistrationType] = useState("");
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  // 🔗 Map registrationType -> API endpoint
  const endpointMap = {
    conclave: "/api/conclave/register",
    "programs-for-school-student": "/api/student-programs/register",
    "DHE English Olympiad": "/api/olympiad/register",
    "best-practices": "/api/best-practices/register",
    "project-display": "/api/project-display/register",
    accommodation: "/api/accommodation/register",
    "General Registration Form": "/api/general/register",
    volunteer: "/api/volunteer/register",
    talentStudent: "/api/talent/student/register", // special case
    talentTeacher: "/api/talent/teacher/register", // special case
    organizer: "/api/organizer/register",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that formData has required fields
    if (!formData || Object.keys(formData).length === 0) {
      alert("Please fill in all required fields before submitting.");
      return;
    }

    let endpoint = endpointMap[registrationType];
    let payload = {
      event,
      ...formData,
    };

    // Handle Talent special case
    if (registrationType === "talent") {
      if (formData?.talentType === "student") {
        endpoint = endpointMap.talentStudent;
        // Remove talentType from payload for cleaner data
        const { talentType, ...cleanedData } = formData;
        payload = {
          event,
          ...cleanedData,
        };
      } else if (formData?.talentType === "teacher") {
        endpoint = endpointMap.talentTeacher;
        // Remove talentType from payload for cleaner data
        const { talentType, ...cleanedData } = formData;
        payload = {
          event,
          ...cleanedData,
        };
      } else {
        alert(
          "Please select whether you are registering as a student or teacher for talent category."
        );
        return;
      }
    }

    // Map field names based on registration type to match backend expectations
    if (registrationType === "conclave") {
      payload = {
        event,
        full_name: formData.full_name || "",
        gender: formData.gender || "",
        designation: formData.designation || "",
        institution: formData.institution || "",
        contact_number: formData.contact_number || formData.phone || "",
        email: formData.email || "",
        address: formData.address || "",
        vidya_bharti_status: formData.vidya_bharti_status || "",
        conclave_selection: formData.conclave_selection || "",
        // Include any additional fields that might be in formData
        ...Object.keys(formData).reduce((acc, key) => {
          if (
            ![
              "full_name",
              "gender",
              "designation",
              "institution",
              "contact_number",
              "phone",
              "email",
              "address",
              "vidya_bharti_status",
              "conclave_selection",
            ].includes(key)
          ) {
            acc[key] = formData[key];
          }
          return acc;
        }, {}),
      };
    }

    if (!endpoint) {
      alert("No API endpoint found for this registration type.");
      return;
    }

    // Define required fields based on backend expectations
    const requiredFieldsMap = {
      conclave: [
        "full_name",
        "gender",
        "designation",
        "institution",
        "contact_number",
        "email",
        "address",
        "vidya_bharti_status",
        "conclave_selection",
      ],
      accommodation: ["name", "email", "phone", "address"],
      "General Registration Form": ["name", "email", "phone"],
      volunteer: ["name", "email", "phone", "address"],
      talent: ["full_name", "email", "phone"],
      "best-practices": ["name", "email", "organization"],
      "project-display": ["name", "email", "project_title"],
      "DHE English Olympiad": ["name", "email", "school"],
      organizer: ["name", "email", "phone", "organization"],
    };

    const requiredFields = requiredFieldsMap[registrationType] || [];
    const missingFields = requiredFields.filter(
      (field) => !payload[field] || payload[field].toString().trim() === ""
    );

    // if (missingFields.length > 0) {
    //   alert(
    //     `Please fill in the following required fields: ${missingFields.join(
    //       ", "
    //     )}`
    //   );
    //   return;
    // }

    console.log("payload Data", payload);

    try {
      setLoading(true);
      const finalUrl = `${config.apiBaseUrl}${endpoint}`;
      console.log("finalUri", config);

      // 🔄 Convert payload into FormData
      const formDataObj = new FormData();
      for (const key in payload) {
        formDataObj.append(key, payload[key]);
      }

      const res = await fetch(finalUrl, {
        method: "POST",
        body: formDataObj, // ✅ no headers, fetch sets correct multipart/form-data
      });

      const result = await res.json();
      console.log("✅ Submission Result:", result);

      if (res.ok) {
        alert("Form submitted successfully!");
        // Reset form after successful submission
        setFormData({});
        setRegistrationType("");
      } else {
        alert(`Error: ${result.message || "Something went wrong"}`);
        console.error("❌ Server Error:", result);
      }
    } catch (err) {
      console.error("❌ Submission failed:", err);
      alert("Submission failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-bg px-4 py-4" style={{ marginLeft: "42px" }}>
      <style>{`
          .td_form_title {
            font-size: 1.5rem;
            color: #890c25;
            text-align: center;
            margin-bottom: 2rem;
            letter-spacing: 1px;
            text-shadow: 0 2px 12px rgba(137,12,37,0.08);
            background: linear-gradient(90deg, #890c25 60%, #890c25 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .td_form_label {
            display: block;
            font-size: 1.1rem;
            font-weight: 600;
            color: #150005;
            margin-bottom: 4px;
            letter-spacing: 0.5px;
            text-align: left;
            padding-left: 2px;
          }
          .built {
            display: block;
            width: 100%;
            padding: 14px 18px;
            border-radius: 12px;
            border: 2px solid grey;
            background: #fff;
            color: #222;
            font-size: 1.08rem;
            box-shadow: 0 2px 12px rgba(137,12,37,0.08);
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .built:focus {
            border-color: #890c25;
            box-shadow: 0 4px 18px rgba(137,12,37,0.13);
            outline: none;
          }
          .btn-custom {
            padding: 14px 18px;
            color: black;
            background: #a59059;
            margin-top: 20px;
          }
          .btn-custom:hover {
            background: #890c25;
            color: white;
            transform: scale(1.02);
          }
      `}</style>

      <div className="card container">
        <div className="card-body p-3 p-md-5">
          <form onSubmit={handleSubmit} className="td_form">
            {/* Event & Registration Type */}
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="td_form_label">Select Event</label>
                <select
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  className="built form-select"
                  required
                >
                  <option value="">-- Select an Event --</option>
                  <option selected value="smk3">
                    Shiksha Mahakumbh 5.0
                  </option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="td_form_label">
                  Select Registration Type
                </label>
                <select
                  value={registrationType}
                  onChange={(e) => {
                    if (e.target.value === "paper-submission") {
                      window.location.href =
                        "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FSK2025%2FSubmission%2Findex";
                      return;
                    }

                    if (e.target.value === "accommodation") {
                      window.location.href = "https://ac.shikshamahakumbh.com/";
                      return;
                    }

                    setRegistrationType(e.target.value);
                  }}
                  className="built form-select"
                  required
                >
                  <option value="">-- Select an option --</option>
                  <option value="conclave">Conclave</option>
                  <option value="paper-submission">Paper Submission</option>
                  <option value="programs-for-school-student">
                    Programs for School Student
                  </option>
                  <option value="best-practices">
                    Best Practices by Organisation and Individual
                  </option>
                  <option value="DHE English Olympiad">
                    DHE English Olympiad
                  </option>
                  <option value="project-display">Project Display</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="organizer">Organizer</option>
                  <option value="General Registration Form">
                    General Registration Form
                  </option>
                  <option value="talent">Talent</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>
            </div>

            {/* Conditional Components with onDataChange */}
            {registrationType === "conclave" && (
              <Conclave onDataChange={setFormData} />
            )}
            {registrationType === "accommodation" && (
              <Accommodation onDataChange={setFormData} />
            )}
            {registrationType === "General Registration Form" && (
              <General onDataChange={setFormData} />
            )}
            {registrationType === "volunteer" && (
              <Volunteer onDataChange={setFormData} />
            )}
            {registrationType === "talent" && (
              <Talent onDataChange={setFormData} />
            )}
            {registrationType === "best-practices" && (
              <BestPractice onDataChange={setFormData} />
            )}
            {registrationType === "project-display" && (
              <ProjectDisplay onDataChange={setFormData} />
            )}
            {registrationType === "DHE English Olympiad" && (
              <English onDataChange={setFormData} />
            )}
            {registrationType === "organizer" && (
              <Organizer onDataChange={setFormData} />
            )}

            {/* Submit Button */}
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ margin: "0 auto" }}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
