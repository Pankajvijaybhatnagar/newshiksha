// Updated CoursesOne component content-wise for Shiksha Mahakumbh Abhiyan

import React from "react";
import { useTabs } from "../../lib/hooks/useTabs";
import { CoursesOneItem } from "./CoursesOneItem";

import courseThumb1 from "../../assets/img/home_1/pic.jpg";
import courseThumb2 from "../../assets/img/home_1/abc1.jpg";
import courseThumb3 from "../../assets/img/home_1/abc2.jpg";
import courseThumb4 from "../../assets/img/home_1/course_thumb_4.jpg";
import courseThumb5 from "../../assets/img/home_1/course_thumb_5.jpg";
import courseThumb6 from "../../assets/img/home_1/course_thumb_6.jpg";

export const CoursesOne = () => {
  useTabs();

  return (
    <section className="td_gray_bg_3">
      <div className="td_height_112 td_height_lg_75" />

      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.15s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Featured Tracks
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">Educational Themes</h2>
        </div>
        <div className="td_height_30 td_height_lg_30" />

        <div className="td_tabs">
          <ul
            className="td_tab_links td_style_1 td_mp_0 td_fs_20 td_medium td_heading_color wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <li className="active">
              <a href="#tab_1">School Education</a>
            </li>
            {/* <li>
              <a href="#tab_2">Higher Education</a>
            </li>
            <li>
              <a href="#tab_3">EdTech & Innovation</a>
            </li>
            <li>
              <a href="#tab_4">Workshops & Bootcamps</a>
            </li> */}
          </ul>
          <div className="td_height_50 td_height_lg_50" />

          <div className="td_tab_body">
            <div className="td_tab active" id="tab_1">
              <div className="row td_gap_y_24">
                {coursesUndergrad.map((course, idx) => (
                  <div
                    key={idx}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={course.delay}
                  >
                    <CoursesOneItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            <div className="td_tab" id="tab_2">
              <div className="row td_gap_y_24">
                {coursesGraduate.map((course, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <CoursesOneItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            <div className="td_tab" id="tab_3">
              <div className="row td_gap_y_24">
                {coursesOnline.map((course, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <CoursesOneItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            <div className="td_tab" id="tab_4">
              <div className="row td_gap_y_24">
                {coursesShort.map((course, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <CoursesOneItem {...course} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

const coursesUndergrad = [
  {
    src: courseThumb1,
    seats: 150,
    semesters: 6,
    subtitle: "K–12 Innovation",
    title: "Community-Driven Schooling Models",
    description:
      "Explore foundational reforms in school education focused on inclusion and creativity.",
    totalRatings: 5,
    delay: "0.2s",
  },
  {
    src: courseThumb2,
    seats: 100,
    semesters: 4,
    subtitle: "Foundational Learning",
    title: "Pedagogies for the Future",
    description:
      "Reimagine learning outcomes through multidisciplinary curriculum & methods.",
    totalRatings: 10,
    delay: "0.25s",
  },
  {
    src: courseThumb3,
    seats: 300,
    semesters: 5,
    subtitle: "Regional Outreach",
    title: "Rural & Tribal Education Access",
    description:
      "Address barriers to learning through localized, culturally rooted solutions.",
    totalRatings: 12,
    delay: "0.3s",
  },
];

const coursesGraduate = [
  {
    src: courseThumb4,
    seats: 200,
    semesters: 4,
    subtitle: "Academic Research",
    title: "Building Policy Through Knowledge",
    description:
      "Use research and analytics to support evidence-based educational policy.",
    totalRatings: 18,
    delay: "0.2s",
  },
  {
    src: courseThumb5,
    seats: 120,
    semesters: 6,
    subtitle: "Startup & Innovation",
    title: "Edupreneurship for Development",
    description:
      "Bridge academia and entrepreneurship through innovation ecosystems.",
    totalRatings: 9,
    delay: "0.25s",
  },
  {
    src: courseThumb6,
    seats: 160,
    semesters: 4,
    subtitle: "Multidisciplinary Learning",
    title: "Integrating Skills with Research",
    description:
      "Champion flexible, skill-integrated higher education aligned with NEP 2020.",
    totalRatings: 22,
    delay: "0.3s",
  },
];

const coursesOnline = [
  {
    src: courseThumb2,
    seats: 140,
    semesters: 3,
    subtitle: "Digital Classrooms",
    title: "Enhancing Reach Through EdTech",
    description:
      "Enable access to quality learning with affordable, scalable digital tools.",
    totalRatings: 16,
    delay: "0.2s",
  },
  {
    src: courseThumb3,
    seats: 180,
    semesters: 3,
    subtitle: "Learning Platforms",
    title: "India’s Emerging EduTech Landscape",
    description:
      "Explore innovations bridging the digital divide in Indian education.",
    totalRatings: 11,
    delay: "0.25s",
  },
  {
    src: courseThumb5,
    seats: 120,
    semesters: 2,
    subtitle: "Smart Learning",
    title: "AI & Data in Education",
    description:
      "Understand how AI and analytics are transforming learning processes.",
    totalRatings: 14,
    delay: "0.3s",
  },
];

const coursesShort = [
  {
    src: courseThumb6,
    seats: 90,
    semesters: 1,
    subtitle: "Civic Literacy",
    title: "NEP 2020 Awareness Bootcamp",
    description:
      "Interactive workshop on understanding the National Education Policy 2020.",
    totalRatings: 10,
    delay: "0.2s",
  },
  {
    src: courseThumb1,
    seats: 80,
    semesters: 1,
    subtitle: "Capacity Building",
    title: "Teacher Leadership & Transformation",
    description:
      "Hands-on training modules for educators and institutional heads.",
    totalRatings: 7,
    delay: "0.25s",
  },
  {
    src: courseThumb4,
    seats: 100,
    semesters: 1,
    subtitle: "Grassroots Innovation",
    title: "Community Participation Labs",
    description:
      "Short-term engagements for panchayat & local education leaders.",
    totalRatings: 6,
    delay: "0.3s",
  },
];
