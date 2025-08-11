import React from "react";
import qrCodeImg1 from "../../assets/img/sponsor/qr1.webp";
import qrCodeImg2 from "../../assets/img/sponsor/ar2.webp";

export const Sponsor = () => {
  return (
    <div className="container-fluid td_gray_bg_3 p-6">
      <div className="td_section_heading td_style_1 text-center td_mb_40">
        <h2 className="td_fs_48">Bank Account Details</h2>
      </div>

      {/* Cards Container */}
      <div className="row td_row_gap_30">
        {/* Card 1 */}
        <div className="col-lg-6">
          <div className="td_card td_style_1 td_white_bg td_radius_15 p-6 h-100 d-flex flex-column">
            <div>
              <h3 className="td_fs_24 td_bold td_mb_20">State Bank of India</h3>
              <ul className="td_list td_style_2 td_mb_0">
                <li>
                  <span className="td_semibold">Account Name:</span> Shiksha Mahakumbh
                </li>
                <li>
                  <span className="td_semibold">Account Number:</span>42563560855
                </li>
                <li>
                  <span className="td_semibold">IFSC:</span> SBIN0000628
                </li>
                <li>
                  <span className="td_semibold">Branch:</span>Chandigarh Main Branch
                </li>
                 <li>
                  <span className="td_semibold">UPI ID:</span>shikshamahakumbh@sbi
                </li>
              </ul>
            </div>
            <div className="mt-auto text-center">
              <img 
                src={qrCodeImg1} 
                alt="QR Code" 
                className="td_radius_10 td_mt_20" 
                style={{ width: '250px', height: '250px' }}
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-6">
          <div className="td_card td_style_1 td_white_bg td_radius_15 p-6 h-100 d-flex flex-column">
            <div>
              <h3 className="td_fs_24 td_bold td_mb_20">State Bank of India</h3>
              <ul className="td_list td_style_2 td_mb_0">
                <li>
                  <span className="td_semibold">Account Name:</span>Shiksha Kumbh
                </li>
                <li>
                  <span className="td_semibold">Account Number:</span> 42563561350
                </li>
                <li>
                  <span className="td_semibold">IFSC:</span> SBIN0000628
                </li>
                <li>
                  <span className="td_semibold">Branch:</span>Chandigarh Main Branch
                </li>
                  <li>
                  <span className="td_semibold">UPI ID: </span>  shikshakhumbh@sbi
                </li>
              </ul>
            </div>
            <div className="mt-auto text-center">
              <img 
                src={qrCodeImg2} 
                alt="QR Code" 
                className="td_radius_10 td_mt_20" 
                style={{ width: '250px', height: '250px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* PDF Links */}
      <div className="row td_row_gap_30 td_mt_40">
        <div className="col-md-6 text-center mb-5 mt-5">
          <div className="td_btn_group d-flex flex-column flex-md-row justify-content-center gap-3">
            <a
              href="/s1.pdf"
              className="td_btn td_style_1 td_accent_bg td_white_color td_radius_10"
              target="_blank"
              rel="noopener noreferrer"
            >
             For more details about sponsorship, Sponsorship 1.
            </a>
            <a
              href="/s2.pdf"
              className="td_btn td_style_1 td_heading_bg td_white_color td_radius_10"
              target="_blank"
              rel="noopener noreferrer"
            >
            For more details about sponsorship, Sponsorship 2.
            </a>
          </div>
        </div>
        <div className="col-md-6 text-center mb-5 mt-5">
          <div className="td_btn_group d-flex flex-column flex-md-row justify-content-center gap-3">
            <a
              href="/s1.pdf"
              className="td_btn td_style_1 td_accent_bg td_white_color td_radius_10"
              target="_blank"
              rel="noopener noreferrer"
            >
              For more details about sponsorship, Sponsorship 1.
            </a>
            <a
              href="/s2.pdf"
              className="td_btn td_style_1 td_heading_bg td_white_color td_radius_10"
              target="_blank"
              rel="noopener noreferrer"
            >
             For more details about sponsorship, Sponsorship 2.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};