import React from "react";
import { Link } from "react-router-dom";

import logoBlack from "../../assets/img/logo_black.png";

export const HeaderSidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className={`td_side_header ${showSidebar && "active"}`}>
      <button className="td_close" onClick={toggleSidebar} />

      <div className="td_side_header_overlay" onClick={toggleSidebar} />

      <div className="td_side_header_in">
        <div className="td_side_header_shape" />
        <Link className="td_site_branding" href="index.html">
          <img src={logoBlack} alt="Logo" />
        </Link>

        <div className="td_side_header_box">
          <h2 className="td_side_header_heading">
            Welcome to Shiksha Mahakumbh
          </h2>
        </div>
        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Contact Us</h3>
          <ul className="td_side_header_contact_info td_mp_0">
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>
                <a href="tel:+444547800112">+91 9417050631</a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                Plot No. 1, Sector 71, Sahibzada Ajit Singh Nagar, Punjab 160071
              </span>
            </li>
          </ul>
        </div>
        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Feedback</h3>
          <div className="td_newsletter td_style_1">
            <form className="td_newsletter_form">
              <input
                type="email"
                className="td_newsletter_input"
                placeholder="Email address"
              />
              <button
                type="submit"
                className="td_btn td_style_1 td_radius_30 td_medium"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Send</span>
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Follow Us</h3>
          <div className="td_social_btns td_style_1 td_heading_color">
             <a href="https://www.facebook.com/shikshamahakumbh?mibextid=ZbWKwL" className="td_center">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.youtube.com/@ShikshaMahakumbh" className="td_center">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/shikshamahakumbh/profilecard/?igsh=NnljejByOXo4OTZr" className="td_center">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://x.com/shikshamahakumb?t=9ZRwSFPF-PWT8m641Aoqfg&s=08" className="td_center">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
          </div>
        </div>
      </div>
    </div>
  );
};
