import React from "react";
import videoBg from "../../assets/img/home_1/video_bg.jpg";
import { VideoPlayer } from "./VideoPlayer";

export const VideoOne = () => {
  return (
    <section>
      <div
        className="td_video_block td_style_1 td_accent_bg td_bg_filed td_center text-center"
        style={{ 
          backgroundImage: `url(${videoBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
          padding: '80px 15px',
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
          <VideoPlayer
            trigger={
              <a
                href="#vid2"
                className="td_player_btn_wrap_2 td_video_open wow zoomIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                style={{ display: 'inline-block', marginBottom: '40px' }}
              >
                <span 
                  className="td_player_btn td_center"
                  style={{
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span></span>
                </span>
              </a>
            }
          />

          <div className="td_height_70 td_height_lg_50" />
          <h2
            className="td_fs_48 td_white_color mb-0 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            style={{
              fontSize: 'clamp(24px, 4vw, 48px)',
              lineHeight: '1.5',
              margin: '0',
              padding: '0 20px'
            }}
          >
            Watch a Quick Tour <br />
            of Our Campus
          </h2>
        </div>
      </div>
      <div
        className="container wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.25s"
        style={{
          maxWidth: '1200px',
          margin: '0 20',
          padding: '0 25px',
          transform: 'translateY(0px)'
        }}
      >
        <div 
          className="td_contact_box td_style_1 td_accent_bg td_radius_10"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '40px 30px',
            gap: '30px',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              gap: '20px',
              padding: '30px 20px'
            }
          }}
        >
          <style jsx>{`
            @media (max-width: 768px) {
              .td_contact_box {
                flex-direction: column !important;
                gap: 20px !important;
                padding: 30px 20px !important;
                text-align: center !important;
              }
              .td_contact_box_left,
              .td_contact_box_right {
                text-align: center !important;
                flex: none !important;
              }
              .td_contact_box_right {
                text-align: center !important;
              }
              .td_fs_36 {
                font-size: clamp(20px, 5vw, 36px) !important;
                word-break: break-word !important;
              }
              .td_fs_18 {
                font-size: clamp(16px, 3vw, 18px) !important;
              }
              .td_contact_box_or {
                margin: 10px 0 !important;
              }
            }
            @media (min-width: 769px) {
              .td_contact_box {
                display: flex !important;
                flex-direction: row !important;
                align-items: center !important;
                justify-content: space-between !important;
              }
              .td_contact_box_left {
                flex: 1 !important;
                text-align: left !important;
              }
              .td_contact_box_right {
                flex: 1 !important;
                text-align: right !important;
              }
            }
            .td_fs_36 {
              font-size: clamp(20px, 5vw, 36px);
              line-height: 1.3;
            }
            .td_fs_18 {
              font-size: clamp(16px, 3vw, 18px);
            }
            .td_contact_box a {
              word-break: break-word;
              display: inline-block;
              transition: all 0.3s ease;
            }
            .td_contact_box a:hover {
              opacity: 0.8;
            }
          `}</style>
          
          <div className="td_contact_box_left" style={{ flex: 1 }}>
            <p className="td_fs_18 td_light td_white_color td_mb_4">
              Email Us:
            </p>
            <h3 className="td_fs_25 mb-0 td_white_color">
              <a href="mailto:info@shikshamahakumbh.com">info@shikshamahakumbh.com</a>
            </h3>
          </div>
          <div 
            className="td_contact_box_or td_fs_24 td_medium td_white_bg td_white_bg td_center rounded-circle td_accent_color"
            style={{
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: 'clamp(18px, 3vw, 24px)'
            }}
          >
            or
          </div>
          <div className="td_contact_box_right" style={{ flex: 1 }}>
            <p className="td_fs_18 td_light td_white_color td_mb_4">
              Call Us:
            </p>
            <h3 className="td_fs_36 mb-0 td_white_color">
              <a href="tel:+919876543210">7903431900, 9463231250</a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};