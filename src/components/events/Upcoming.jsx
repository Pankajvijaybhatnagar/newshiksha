import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from '../../assets/img/heroslider/k1.jpeg';
import img2 from '../../assets/img/heroslider/featurepic.jpg';
import img3 from '../../assets/img/heroslider/niper.jpg';

export const Upcoming = () => {
  const events = [
    // {
    //   id: 5,
    //   title: "Shiksha Mahakumbh 2025",
    //   description: "An international conference exploring India’s educational values, innovations, and reforms to shape a globally empowered education ecosystem. An international conference s",
    //   date: "Will be updated soon",
    //   venue: "		Jawaharlal Nehru University",
      
    //   image: img2,
      
    // },
    // {
    //   id: 6,
    //   title: "Shiksha Kumbh 2025",
    //   description: "Academic-driven startups in J&K empower youth, foster innovation, and boost the regional economy through research-based entrepreneurship and skill-driven development.",
    //   date: "		Will be updated soon",
    //   venue: "		Indian Institute of Technology Jammu",
      
    //   image: img1,
    // },
   
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Technology: "td_bg_blue_100 td_text_blue_800",
      Environment: "td_bg_green_100 td_text_green_800",
      Healthcare: "td_bg_red_100 td_text_red_800",
      Business: "td_bg_purple_100 td_text_purple_800"
    };
    return colors[category] || "td_bg_gray_100 td_text_gray_800";
  };

  return (
    <div className="td_container_fluid td_py_60 td_bg_gray_4 text-center">
      {/* Top Info Section with Image and Text */}
      <div style={{
        maxWidth: '950px',
        margin: '0 auto 48px auto',
        background: 'linear-gradient(120deg, #fff 80%, #ffe3ec 100%)',
        borderRadius: '28px',
        boxShadow: '0 12px 40px rgba(137,12,37,0.13)',
        padding: '40px 36px 32px 36px',
        textAlign: 'center',
        border: '1.5px solid #e94e77',
        position: 'relative',
      }}>
        {/* Top Image */}
        <div style={{
          width: '340px',
          height: '240px',
          background: 'linear-gradient(135deg, #ffe3ec 60%, #fff 100%)',
          borderRadius: '20px',
          margin: '0 auto 32px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 32px rgba(137,12,37,0.10)',
          border: '1.5px solid #e94e77',
        }}>
          <img src={img3} alt="Conference" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 2px 12px rgba(137,12,37,0.10)' }} />
        </div>
        {/* Text Content */}
        <h3 style={{
          color: '#890c25',
          fontWeight: 'bold',
          fontSize: '1.7rem',
          marginBottom: '22px',
          letterSpacing: '0.7px',
          lineHeight: '1.3',
        }}>
          Multi-Track Conference and Demonstration of Startups /Innovative projects display at Shiksha Mahakumbh 2025<br />[31 Oct - 2 Nov 2025]<br />Venue Partner: <a href="https://niper.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#e94e77', textDecoration: 'underline' }}>NIPER, Mohali</a>
        </h3>
        <h4 style={{
          color: '#e94e77',
          fontWeight: 'bold',
          fontSize: '1.18rem',
          marginBottom: '14px',
          letterSpacing: '0.7px',
        }}>Author Guidelines for Paper Submission</h4>
        <p style={{
          marginBottom: '16px',
          color: '#444',
          fontSize: '1.12rem',
          lineHeight: '1.8',
        }}>
          Authors are invited to submit original, unpublished research papers and recent advancements related to the conference tracks. Submitted papers, limited to 5-6 pages, should be novel contributions with conference track. Each submission must include the paper title, abstract, keywords, author names, affiliations and email address. All manuscripts must strictly adhere to the formatting template provided by the conference, which can be downloaded from IEEE Conference Templates.
        </p>
        <ul style={{
          marginBottom: '16px',
          paddingLeft: '22px',
          textAlign: 'left',
          display: 'inline-block',
          color: '#555',
          fontSize: '1.08rem',
          lineHeight: '1.7',
        }}>
          <li>A plagiarism check report may be submitted with similarity index below 15%.</li>
          <li>The papers must be submitted in PDF format following the specified conference template and should not exceed 5-6 pages. The final camera-ready paper must be submitted before the deadline.</li>
          <li>All required documents and correspondence should be submitted in a single email within the specified deadlines.</li>
        </ul>
        <div style={{
          marginTop: '22px',
          color: '#890c25',
          fontWeight: 'bold',
          fontSize: '1.13rem',
          letterSpacing: '0.5px',
        }}>
         <a href='#'>Multi Track Conference<br />Call For Papers</a> 
        </div>
        <div style={{
          marginTop: '12px',
          color: '#e94e77',
          fontWeight: 'bold',
          fontSize: '1.13rem',
          letterSpacing: '0.5px',
        }}>
          Demonstration of Projects
        </div>
      </div>

      {/* Section Header */}
      {/* <div className="td_text_center td_mb_40 mt-5">
        <h2 className="td_fs_40 td_font_bold td_heading_color td_mb_15">Upcoming Events</h2>
        <p className="td_fs_18 td_body_color ">
          Discover amazing events, conferences, and workshops happening near you
        </p>
      </div>     */}

      {/* Cards Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
        {events.map((event) => (
          <div key={event.id} style={{ flex: '0 1 49%', maxWidth: '29%', minWidth: '220px', display: 'flex', justifyContent: 'center' }}>
            <div className="td_card td_style_1 td_hover_layer_1 td_mb_30 td_white_bg td_radius_15 td_overflow_hidden td_border_1 td_border_color" style={{width: '100%'}}>
              {/* Image */}
              <div className="td_card_img_wrap td_overflow_hidden td_position_relative td_h_200 mb-5">
                <img
                  src={event.image}
                  alt={event.title}
                  className="td_w_full td_h_full td_object_cover td_transition_all td_duration_700 group-hover:td_scale_110"
                  style={{height:"200px"}}
                />
                <div className="td_position_absolute td_inset_0 td_bg_gradient_to_t td_from_black_20 td_to_transparent td_opacity_0 group-hover:td_opacity_100 td_transition_opacity td_duration_300"></div>
                <span className={`td_position_absolute td_top_15 td_left_15 td_px_15 td_py_5 td_radius_30 td_fs_12 td_font_semibold ${getCategoryColor(event.category)}`}>
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="td_card_body td_p_25">
                {/* Title */}
                <h3 className="td_fs_20 td_font_bold td_heading_color td_mb_15 group-hover:td_accent_color td_transition_colors td_duration_300 td_line_clamp_2">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="td_body_color td_fs_14 td_mb_20 td_line_clamp_3">
                  {event.description}
                </p>

                {/* Date */}
                <div className="td_flex td_items_center td_body_color td_fs_14 td_mb_15">
                  <Calendar className="td_w_16 td_h_16 td_mr_10 td_accent_color" />
                  <span className="td_font_medium">{event.date}</span>
                </div>

                {/* Venue */}
                <div className="td_flex td_items_center td_body_color td_fs_14 td_mb_25">
                  <MapPin className="td_w_16 td_h_16 td_mr_10 td_accent_color" />
                  <span className="td_font_medium td_truncate">{event.venue}</span>
                </div>

                {/* Read More Button */}
                <button className="td_btn td_style_1 td_w_full td_accent_bg td_white_color td_font_semibold td_py_12 td_px_20 td_radius_5 td_transition_all td_duration_300 group-hover:td_scale_105 group-hover:td_shadow_md td_flex td_items_center td_justify_center td_gap_10 p-3">
                    <Link to={`/event/${event.id}`} className="...your button classes..." target='_blank'>
                  <span>Read More</span>
                  <ArrowRight className="td_w_16 td_h_16 td_transition_transform td_duration_300 group-hover:td_translate_x_5" /></Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      
    </div>
  );
};

