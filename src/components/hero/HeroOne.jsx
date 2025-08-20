import React, { useState } from "react";
import { Link } from "react-router-dom";

import heroBg from "../../assets/img/home_1/hero_bg.jpg";

export const HeroOne = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const notices = [
    {
      id: 1,
      text: "Registration for Shiksha Mahakumbh 2025 is now open",
      link: "/registration",
      type: "registration"
    },
    {
      id: 2,
      text: "Join 50,000+ educators in the largest education summit",
      link: "/about",
      type: "info"
    },
    {
      id: 3,
      text: "Early bird registration ends March 15th, 2025",
      link: "/registration",
      type: "urgent"
    },
    {
      id: 4,
      text: "Special workshops on AI in Education available",
      link: "/workshops",
      type: "workshop"
    },
    {
      id: 5,
      text: "International speakers confirmed for the event",
      link: "/speakers",
      type: "info"
    },
    {
      id: 6,
      text: "Scholarships available for rural educators",
      link: "/scholarships",
      type: "scholarship"
    }
  ];

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
    // You can add navigation logic here
    console.log(`Clicked on: ${notice.text}`);
    // Example: window.open(notice.link, '_blank');
  };

  // Duplicate notices for seamless scrolling
  const duplicatedNotices = [...notices, ...notices];

  return (
    <>
      <section
        className="td_hero td_style_1 td_heading_bg td_center td_bg_filed"
        style={{ backgroundImage: `url(${heroBg})`, position: 'relative' }}
      >
        {/* Notice Box */}
        {/* <div className="notice-box">
          <div className="notice-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
            <span>Latest Updates</span>
          </div>
          <div className="notice-scroll-container">
            <div className="notice-scroll-content">
              {duplicatedNotices.map((notice, index) => (
                <div 
                  key={`${notice.id}-${index}`} 
                  className={`notice-item notice-${notice.type}`}
                  onClick={() => handleNoticeClick(notice)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleNoticeClick(notice);
                    }
                  }}
                >
                  <span className="notice-bullet">•</span>
                  <span>{notice.text}</span>
                  <svg 
                    className="notice-arrow" 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M9 18L15 12L9 6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div> */}

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
            <p style={{color:'white'}} className="td_hero_subtitle td_fs_18 td_white_color td_opacity_7 td_mb_30">
              Join a multi-edition national initiative uniting educators, innovators, and policymakers to shape a future-ready, inclusive education system rooted in Indian values.
            </p>
            <Link
              to="/"
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
            to="/https://shikshamahakumb.co.in/registration"
            className="td_btn td_style_1 td_radius_10 td_medium td_fs_20 wow fadeInUp"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Register to Participate in Shiksha Mahakumbh 2025</span>
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
            to="/https://shikshamahakumb.co.in/exhibition"
            className="td_btn td_style_1 td_radius_10 td_medium td_fs_20 wow fadeInUp"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Demonstration of Startups /Innovative projects display at Shiksha Mahakumbh 2025</span>
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

      <style jsx>{`
        .notice-box {
          position: absolute;
          right: 5px;
          top: 80%;
          transform: translateY(-50%);
          width: 320px;
          height: 280px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 20px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
          z-index: 10;
          overflow: hidden;
        }

        .notice-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 15px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .notice-header svg {
          color: #ffd700;
          animation: sparkle 2s infinite;
        }

        @keyframes sparkle {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
            opacity: 1;
          }
          50% { 
            transform: scale(1.2) rotate(180deg); 
            opacity: 0.8;
          }
        }

        .notice-scroll-container {
          height: 320px;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .notice-scroll-content {
          animation: continuousScroll 20s linear infinite;
          will-change: transform;
        }

        .notice-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
          line-height: 1.4;
          margin-bottom: 12px;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border-left: 3px solid rgba(220, 53, 69, 0.8);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .notice-item:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateX(5px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .notice-item:active {
          transform: translateX(3px) scale(0.98);
        }

        .notice-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: width 0.5s ease;
        }

        .notice-item:hover::before {
          width: 100%;
        }

        .notice-bullet {
          color: rgba(220, 53, 69, 0.8);
          font-weight: bold;
          flex-shrink: 0;
          font-size: 16px;
        }

        .notice-arrow {
          color: rgba(255, 255, 255, 0.6);
          flex-shrink: 0;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-10px);
        }

        .notice-item:hover .notice-arrow {
          opacity: 1;
          transform: translateX(0);
          color: rgba(255, 255, 255, 0.9);
        }

        /* Different notice types */
        .notice-urgent {
          border-left-color: #ff4444;
          animation: urgentPulse 2s infinite;
        }

        // .notice-workshop {
        //   border-left-color: #4CAF50;
        // }

        // .notice-scholarship {
        //   border-left-color: #2196F3;
        // }

        // .notice-registration {
        //   border-left-color: #FF9800;
        // }

        // .notice-info {
        //   border-left-color: #9C27B0;
        // }

        @keyframes urgentPulse {
          0%, 100% { 
            border-left-color: #ff4444; 
          }
          50% { 
            border-left-color: #ff6666; 
            box-shadow: 0 0 10px rgba(255, 68, 68, 0.3);
          }
        }

        @keyframes continuousScroll {
          0% { 
            transform: translateY(0); 
          }
          100% { 
            transform: translateY(-50%); 
          }
        }

        /* Pause animation on hover */
        .notice-scroll-container:hover .notice-scroll-content {
          animation-play-state: paused;
        }

        /* Responsive design */
        @media (max-width: 1200px) {
          .notice-box {
            width: 280px;
            right: 15px;
          }
        }

        @media (max-width: 1024px) {
          .notice-box {
            width: 250px;
            right: 20px;
            height: 300px;
          }
          
          .notice-scroll-container {
            height: 240px;
          }
        }

        @media (max-width: 768px) {
          .notice-box {
            display: none;
          }
        }

        /* Focus styles for accessibility */
        .notice-item:focus {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: 2px;
        }

        /* Smooth scrolling performance */
        .notice-scroll-content {
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </>
  );
};