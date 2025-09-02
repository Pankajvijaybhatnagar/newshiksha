import React, { useState } from "react";
import Link from "next/link";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderLanguage } from "./HeaderLanguage";
import { HeaderSidebar } from "./HeaderSidebar";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

const Logo = "/assets/img/logo.png";

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
                <Link className="td_site_branding" href="/">
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
                          <Link href="/">Home</Link>
                        </li>
                        <li className="menu-item-has-children td_mega_menu">
                          <Link href="/products">About</Link>
                          <ul className="absolute left-0 z-50 hidden group-hover:block shadow-lg p-4 td_mega_wrapper" style={{backgroundColor: '#890c25'}}>
                            <li><Link href="/about" className="text-white hover:text-gray-200">Introduction</Link></li>
                            <li><Link href="/about/ShikshaKumbh" className="text-white hover:text-gray-200">Shiksha Kumbh</Link></li>
                            <li><Link href="/about/ShikshaMahaKumbh" className="text-white hover:text-gray-200">Shiksha MahaKumbh</Link></li>
                            <li><a href="/abhiyanphotoframe.pdf" target="_blank" className="text-white hover:text-gray-200">Abhiyan in Photo Frames</a></li>
                            <li><a href="/smk 3.pdf" target="_blank" className="text-white hover:text-gray-200">Shiksha Mahakumbh 3.0 in Photo Frame</a></li>
                            <li><Link href="/about/ShikshaVibhag" className="text-white hover:text-gray-200">शैक्षिक विभाग - Shaikshik Vibha</Link></li>
                            <li><Link href="/about/VitVibhag" className="text-white hover:text-gray-200">वित्त विभाग - Vitt Vibhag</Link></li>
                            <li><Link href="/about/pracharVibhag" className="text-white hover:text-gray-200">प्रचार विभाग - Prachar Vibhag</Link></li>
                            <li><Link href="/about/samparkVibhag" className="text-white hover:text-gray-200">संपर्क विभाग - Sampark Vibhag</Link></li>
                            <li><Link href="/about/prabandhanVibhag" className="text-white hover:text-gray-200">प्रबंधन विभाग - Prabandhan Vibhag</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link href="https://shikshamahakumb.co.in/registration">Registration</Link>
                        </li>
                        <li className="menu-item-has-children td_mega_menu">
                          <Link href="/students-registration">Program</Link>
                          <ul className="absolute left-0 z-50 hidden group-hover:block shadow-lg p-4" style={{backgroundColor: '#890c25'}}>
                            <li><Link href="/shikshaMahakumbh2025" className="text-white hover:text-gray-200">SHIKSHA MAHAKUMBH 2025</Link></li>
                          </ul>
                        </li>

                      </ul>

                      <Link className="td_site_branding" href="/">
                        <img width={170} src={Logo} alt="Logo" />
                      </Link>

                      {/* last three */}
                      <ul className="td_nav_list">
                        <li className="menu-item-has-children td_mega_menu">
                          <Link href="#">Pages</Link>
                          <ul className="td_mega_wrapper" style={{backgroundColor: '#890c25'}}>
                            <li className="menu-item-has-children">
                              <h4 className="text-white">Gallery</h4>
                              <div className="menu-item-has-children">
                                <ul>
                                  <li><Link href="/photos" className="text-white hover:text-gray-200">Photos</Link></li>
                                  <li><Link href="/videos" className="text-white hover:text-gray-200">Videos</Link></li>
                                  <li><Link href="/media" className="text-white hover:text-gray-200">Media</Link></li>
                                  <li><Link href="/press-release" className="text-white hover:text-gray-200">Press Release</Link></li>
                                </ul>
                              </div>
                            </li>
                            <li className="menu-item-has-children">
                              <h4 className="text-white">Brochure</h4>
                              <ul>
                                <li><a href="/conference" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">Conference</a></li>
                                <li><Link href="/sponsor" className="text-white hover:text-gray-200">Sponsor</Link></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <h4 className="text-white">Other Pages</h4>
                              <ul>
                                <li>
                                  <a href="https://pub.dhe.org.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                                    Publications
                                  </a>
                                </li>
                                <li><Link href="/committee" className="text-white hover:text-gray-200">Committee</Link></li>
                                <li><Link href="/paper-submission" className="text-white hover:text-gray-200">Paper Submission</Link></li>
                                <li><Link href="/wishes-received" className="text-white hover:text-gray-200">Wishes Received</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">Events</Link>
                          <ul className="absolute left-0 z-50 hidden group-hover:block shadow-lg p-4" style={{backgroundColor: '#890c25'}}>
                            <li><Link href="/past-event" className="text-white hover:text-gray-200">Past Event</Link></li>
                            <li><Link href="/upcoming-event" className="text-white hover:text-gray-200">Upcoming Event</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                        <li><Link href="/merchandise">Merchandise</Link></li>
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