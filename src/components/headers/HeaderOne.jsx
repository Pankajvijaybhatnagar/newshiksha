import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderLanguage } from "./HeaderLanguage";
import { HeaderSidebar } from "./HeaderSidebar";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

import Logo from "../../assets/img/logo.png";

export const HeaderOne = () => {
  useMobilemenu();
  useStickyHeader();

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((v) => !v);

  return (
    <>
      <header className="td_site_header td_style_1 td_type_3 td_sticky_header td_medium td_heading_color">
        <div className="td_main_header">
          <div className="container-fluid">
            <div className="td_main_header_in">
              {/* left */}
              <div className="td_main_header_left">
                <Link className="td_site_branding" to="/">
                  <img width={170} src={Logo} alt="Logo" />
                </Link>
                <div className="td_header_social_btns">
                  <a href="https://www.facebook.com/shikshamahakumbh?mibextid=ZbWKwL" className="td_center">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.youtube.com/@ShikshaMahakumbh" className="td_center">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/shikshamahakumbh/profilecard/?igsh=NnljejByOXo4OTZr" className="td_center">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                 
                </div>
              </div>

              <div className="td_main_header_center">
                <nav className="td_nav">
                  <div className="td_nav_list_wrap">
                    <div className="td_nav_list_wrap_in">
                      {/* first three */}
                      <ul className="td_nav_list">
                        <li >
                          <Link to="/">Home</Link>

                        </li>
                        <li className="menu-item-has-children td_mega_menu">
                          <Link to="/products">About</Link>
                          <ul className="absolute left-0 z-50 hidden group-hover:block bg-white shadow-lg p-4 td_mega_wrapper">
                            <li><Link to="/about">Introduction</Link></li>
                            <li><Link to="/about/ShikshaKumbh">Shiksha Kumbh</Link></li>
                            <li><Link to="/about/ShikshaMahaKumbh">Shiksha MahaKumbh</Link></li>
                            <li><a href="/abhiyanphotoframe.pdf" target="_blank">Abhiyan in Photo Frames</a></li>
                            <li><a href="/smk 3.pdf" target="_blank">Shiksha Mahakumbh 3.0 in Photo Frame</a></li>
                            <li><Link to="/about/ShikshaVibhag">शैक्षिक विभाग - Shaikshik Vibha</Link></li>
                            <li><Link to="/about/VitVibhag">वित्त विभाग - Vitt Vibhag</Link></li>
                            <li><Link to="/about/pracharVibhag">प्रचार विभाग - Prachar Vibhag</Link></li>
                            <li><Link to="/about/samparkVibhag">संपर्क विभाग - Sampark Vibhag</Link></li>
                            <li><Link to="/about/prabandhanVibhag">प्रबंधन विभाग - Prabandhan Vibhag</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/students-registration">Registration</Link>
                        </li>
                        <li className="menu-item-has-children td_mega_menu">
                          <Link to="/students-registration">Program</Link>
                          <ul className="absolute left-0 z-50 hidden group-hover:block bg-white shadow-lg p-4 ">
                            <li><Link to="/shikshaMahakumbh2025">SHIKSHA MAHAKUMBH 2025</Link></li>
                          </ul>
                        </li>

                      </ul>

                      <Link className="td_site_branding" to="/">
                        <img width={170} src={Logo} alt="Logo" />
                      </Link>

                      {/* last three */}
                      <ul className="td_nav_list">
                        <li className="menu-item-has-children td_mega_menu">
                          <Link to="#">Pages</Link>
                          <ul className="td_mega_wrapper">
                            <li className="menu-item-has-children">
                              <h4>Gallery</h4>
                              <li className="menu-item-has-children">

                                <ul>
                                  <li><Link to="/photos">Photos</Link></li>
                                  <li><Link to="/videos">Videos</Link></li>
                                  <li><Link to="/media">Media</Link></li>
                                  <li><Link to="/press-release">Press Release</Link></li>
                                </ul>
                              </li>
                            </li>
                            <li className="menu-item-has-children">
                              <h4>Brochure</h4>
                              <ul>
                                <li><a href="/SM24 Brochure.pdf" target="_blank" rel="noopener noreferrer">Conference</a></li>
                                <li><Link to="/sponsor">Sponsor</Link></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <h4>Other Pages</h4>
                              <ul>
                                <li>
                                  <a href="https://pub.dhe.org.in/" target="_blank" rel="noopener noreferrer">
                                    Publications
                                  </a>
                                </li>
                                <li><Link to="/committee">Committee</Link></li>
                               
                                <li><Link to="/paper-submission">Paper Submission</Link></li>
                                <li><Link to="/wishes-received">Wishes Received</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="#">Events</Link>
                          <ul className="absolute left-0 z-50 hidden group-hover:block bg-white shadow-lg p-4">
                            <li><Link to="/past-event">Past Event</Link></li>
                            <li><Link to="/upcoming-event">Upcoming Event</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li><Link to="/merchandise">Merchandise</Link></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              {/* right */}
              <div className="td_main_header_right">
                {/* lang dropdown */}
                {/* <div className="position-relative td_language_wrap">
                  <HeaderLanguage />
                </div> */}

                <div className="position-relative">
                  <HeaderSearch />
                </div>

                <button className="td_hamburger_btn" onClick={toggleSidebar} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeaderSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};
