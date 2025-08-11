import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from '../../assets/img/heroslider/k1.jpeg';
import img2 from '../../assets/img/heroslider/featurepic.jpg';

export const Upcoming = () => {
  const events = [
    {
      id: 5,
      title: "Shiksha Mahakumbh 2025",
      description: "An international conference exploring India’s educational values, innovations, and reforms to shape a globally empowered education ecosystem. An international conference s",
      date: "Will be updated soon",
      venue: "		Jawaharlal Nehru University",
      
      image: img2,
      
    },
    {
      id: 6,
      title: "Shiksha Kumbh 2025",
      description: "Academic-driven startups in J&K empower youth, foster innovation, and boost the regional economy through research-based entrepreneurship and skill-driven development.",
      date: "		Will be updated soon",
      venue: "		Indian Institute of Technology Jammu",
      
      image: img1,
    },
   
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
      {/* Section Header */}
      <div className="td_text_center td_mb_40 mt-5">
        <h2 className="td_fs_40 td_font_bold td_heading_color td_mb_15">Upcoming Events</h2>
        <p className="td_fs_18 td_body_color ">
          Discover amazing events, conferences, and workshops happening near you
        </p>
      </div>    

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

