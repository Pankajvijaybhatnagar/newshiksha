import React from "react";
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";

import pageHeadingBg from "../../assets/img/others/page_heading_bg.jpg";
import shape3 from "../../assets/img/others/page_heading_shape_3.svg";
import shape4 from "../../assets/img/others/page_heading_shape_4.svg";
import shape5 from "../../assets/img/others/page_heading_shape_5.svg";

export const Breadcrumb = ({ title }) => {
    useHobble();

    return (
        <section
            className="td_page_heading td_center td_bg_filed td_heading_bg text-center td_hobble"
            style={{
                background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
                height: "200px",
                minHeight: "unset",
                position: "relative"
            }}
        >
            <div className="container">
                <div className="td_page_heading_in">
                    <h1 className="td_fs_48 td_mb_10" style={{
                        color: "#111",
                        textShadow: "2px 2px 0 #e94e77, 4px 4px 0 #cfdef3, 0 8px 16px rgba(137,12,37,0.18)",
                        fontWeight: "900",
                        letterSpacing: "2px"
                    }}>{title}</h1>
                    <ol className="breadcrumb m-0 td_fs_20 td_opacity_8 td_semibold" style={{ color: "#111" }}>
                        <li className="breadcrumb-item">
                            <Link to="/" style={{ color: "#111" }}>Home</Link>
                        </li>
                        {/* <li className="breadcrumb-item active" style={{ color: "#111" }}>{subtitle}</li> */}
                    </ol>
                </div>
            </div>

            <div className="td_page_heading_shape_1 position-absolute td_hover_layer_3" />
            <div className="td_page_heading_shape_2 position-absolute td_hover_layer_5" />

            <div className="td_page_heading_shape_3 position-absolute">
                <img src={shape3} alt="Decorative shape 3" />
            </div>
            <div className="td_page_heading_shape_4 position-absolute">
                <img src={shape4} alt="Decorative shape 4" />
            </div>
            <div className="td_page_heading_shape_5 position-absolute">
                <img src={shape5} alt="Decorative shape 5" />
            </div>
            <div className="td_page_heading_shape_6 position-absolute td_hover_layer_3" />
        </section>
    );
};
