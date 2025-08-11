import React from "react";
import { Layout } from "../../layouts/Layout";

import contactImg from "../../assets/img/shiksha logo.jpg";

export const Contact = () => {
  return (
    <Layout breadcrumbTitle={"Contact"} breadcrumbSubtitle={"Contact"}>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-1">
              <div className="row align-items-center td_gap_y_40">
                <div className="col-lg-7">
                  <img src={contactImg} alt="Contact" className="w-100 bg-black" style={{height:"450px" , width:"400px"}}/>
                </div>
                <div className="col-xl-4 offset-xl-1 col-lg-5">
                  <div className="td_contact_info">
                    <div className="td_section_heading td_style_2 td_mb_20">
                      <h2 className="td_contact_info_title td_fs_36 mb-0">
                        Our Office Address
                      </h2>
                    </div>
                    
                    <div>
                      <h2 className="td_fs_24 td_semibold td_mb_20">
                        Punjab Campus
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                        Plot No. 1, Sector 71, SAS Nagar (Mohali) – 160071, Punjab, India
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a>+91 7903431900 </a> |&nbsp;&nbsp;
                        <a>+91 9463231250 </a>|&nbsp;&nbsp;<br/>
                        <a>172 408 7787 </a>&nbsp;
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
                        <a href="mailto:info@gmail.com">info@shikshamahakumbh.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="td_height_120 td_height_lg_80" />

        <div className="td_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4934971157636!2d76.71794769754321!3d30.704524040135293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef9e548f352b%3A0xd0cb22104f971044!2splot%20no%201%20Bar%20Majra%20S.A.S%20Nagar%20mohali!5e0!3m2!1sen!2sin!4v1752728947359!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" ></iframe>
        </div>
      </section>
    </Layout>
  );
};
