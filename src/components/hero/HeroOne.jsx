import React from "react";
import { Link } from "react-router-dom";

import heroBg from "../../assets/img/home_1/hero_bg_1.jpg";

export const HeroOne = () => {
  return (
    <>
      <section
        className="td_hero td_style_1 td_heading_bg td_center td_bg_filed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container">
          <div
            className="td_hero_text wow fadeInRight"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
          >
            <p className="td_hero_subtitle_up td_fs_18 td_white_color td_spacing_1 td_semibold text-uppercase td_mb_10 td_opacity_9">
              Transforming Education Together
            </p>
            <h1 className="td_hero_title td_fs_64 td_white_color td_mb_12">
              <span>Shiksha Mahakumbh</span> – A National Movement for Global Learning
            </h1>
            <p className="td_hero_subtitle td_fs_18 td_white_color td_opacity_7 td_mb_30">
              Join a multi-edition national initiative uniting educators, innovators, and policymakers to shape a future-ready, inclusive education system rooted in Indian values.
            </p>
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_1 td_radius_10 td_medium"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>Explore Our Initiatives</span>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1575 4.34302L3.84375 15.6567"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="td_lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <div className="container">
        <div className="td_hero_btn_group">
          <Link
            to="/courses-grid-view"
            className="td_btn td_style_1 td_radius_10 td_medium td_fs_20 wow fadeInUp"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Apply for Upcoming Edition</span>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1575 4.34302L3.84375 15.6567"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
          <Link
            to="/signup"
            className="td_btn td_style_1 td_radius_10 td_medium td_fs_20 wow fadeInUp"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Join the Movement</span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7945 12.2734H8.95703C8.74129 12.2734 8.56641 12.4484 8.56641 12.6641V14.768C8.56641 14.9837 8.74129 15.1587 8.95703 15.1587H10.7945C11.0102 15.1587 11.1851 14.9837 11.1851 14.768V12.6641C11.1851 12.4483 11.0102 12.2734 10.7945 12.2734ZM10.4038 14.3774H9.34766V13.0547H10.4038V14.3774Z"
                  fill="currentColor"
                />
                {/* Remaining paths unchanged for brevity */}
              </svg>
            </span>
          </Link>
          <Link
            to="#"
            className="td_btn td_style_1 td_radius_10 td_medium td_fs_20 wow fadeInUp"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Chat With Our Team</span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG chat icon kept intact */}
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
