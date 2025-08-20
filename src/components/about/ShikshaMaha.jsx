import React, { useState } from "react";
// import b1 from "../../assets/img/heroslider/b1.JPG";
// import b2 from "../../assets/img/heroslider/b2.JPG";
// import b3 from "../../assets/img/heroslider/b3.JPG";
import featurepic from "../../assets/img/heroslider/featurepic.jpg";
import k1 from "../../assets/img/heroslider/k1.jpeg";
import k2 from "../../assets/img/heroslider/k2.jpeg";
import k3 from "../../assets/img/heroslider/k3.jpg";
import k4 from "../../assets/img/heroslider/k4.jpeg";
import k6 from "../../assets/img/heroslider/k6.jpeg";
import k7 from "../../assets/img/heroslider/k7.jpeg";
import k8 from "../../assets/img/heroslider/k8.jpeg";
import k9 from "../../assets/img/heroslider/k9.png";
import main from "../../assets/img/heroslider/main.jpg";

const images = [

  featurepic,
  k1,
  k2,
  k3,
  k4,
  k6,
  k7,
  k8,
  k9,
  main,
];

const sliderContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "40px auto",
};

const imageStyle = {
  width: "800px",
  height: "400px",
  objectFit: "cover",
  borderRadius: "16px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
};

const buttonStyle = {
  margin: "16px",
  padding: "8px 24px",
  fontSize: "1.1rem",
  borderRadius: "8px",
  border: "none",
  background: "#890c25",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
};

export const  ShikshaMaha =()=> {
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const contentContainer = {
    maxWidth: "900px",
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
    padding: "40px 32px",
    margin: "40px auto",
    color: "#222",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
  };

  const headingStyle = {
    fontSize: "2.2rem",
    fontWeight: "bold",
    color: "#890c25",
    marginBottom: "18px",
    letterSpacing: "1px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    marginBottom: "12px",
  };

  const anchorContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    margin: "32px 0",
  };

  const anchorStyle = {
    padding: "12px 32px",
    fontSize: "1.1rem",
    borderRadius: "8px",
    background: "#890c25",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
    transition: "background 0.2s",
    border: "none",
    cursor: "pointer",
    letterSpacing: "1px",
  };

  return (
    <>
      <div style={sliderContainer}>
        <img src={images[current]} alt={`Slide ${current + 1}`} style={imageStyle} />
      </div>
     
      <div style={contentContainer}>
        <h1 style={headingStyle}>Shiksha MahaKumbh</h1>
        <p style={paragraphStyle}>
         Shiksha Mahakumbh is the brainchild of Dr. Thakur SKR, a prominent ISRO scientis.
        </p>
        <p style={paragraphStyle}>
         The inaugural edition of Shiksha Mahakumbh i.e., National Conference on Recent Advances in School Education (RASE 2023) was organised by Sarvhitkari Educational Society, a prominent unit of Vidya Bharti –Akhil Bhartiya Shiksha Sansthan in the state of Punjab, in collaboration with Dr. B. R. Ambedkar National Institute of Technology Jalandhar. The conference was held from June 9 to 11, 2023, at the esteemed premises of Dr. B. R. Ambedkar National Institute of Technology, Jalandhar.
        </p>
        <p style={paragraphStyle}>
         During the campaign of Shiksha Mahakumbh, the voice of conducting this very massive and innovative event annually in collaboration with Institutions of National Importance arose. Several Directors of these Institutions and Vice-Chancellors of Central Universities demanded its next edition in their Institutions. Accordingly, the matter was discussed within the committee of this mass movement and it’s decided to book its first 5 editions in collaboration with these Institutions of National Importance. When the agreement of its 2nd edition was signed between Department of Holistic Education, the originating place of this mass movement and Indian Institute of Technology Ropar, the news spread across the country. Thereafter several other Universities demanded for its editions in their institutions. Then the managing committee decided to launch its another franchise i.e., Shiksha Kumbh. Accordingly, the mass movement translated into Shiksha Mahakumbh – an annual event for the entire globe and Shiksha Kumbh – an annual event for field-specific participants of the globe.
        </p>
        <p style={paragraphStyle}>
         The foremost objective of Shiksha Mahakumbh is to cultivate an environment conducive to the effective implementation of the National Education Policy 2020 (NEP). Moreover, this conference franchise aspires to congregate and facilitate the exchange of insights and research findings among distinguished academic scientists, researchers, research scholars, and industry experts, encompassing all facets of school and higher education. This endeavor, spearheaded by the Department of Holistic Education of Vidya Bharti, is unparalleled on a global scale, aiming to annually unite the 26.5 Crore school students and 4.25 Crore college/university students from across Bharat on a single platform to decide the direction of Bhartiya Education in a similar fashion as was the practice in ancient Bharat. It achieves this laudable goal through its collaboration with Institutions of National Importance.
"Shiksha Mahakumbh is managed by the Event Management Cell of the Department of Holistic Education, which is a new generation Think Tank of Vidya Bharti.

        </p>
        <p style={paragraphStyle}>Shiksha MahaKumbh</p>
      </div> <div style={anchorContainer}>
        <a href="https://sk23.  /" target="_blank" style={anchorStyle}>SK 2023</a>
        <a href="https://sk24.  /" target="_blank"  style={anchorStyle}>SK 2024</a>
        <a href="/shikshaMahakumbh2025" target="_blank" style={anchorStyle}>SK 2025</a>
      </div>
    </>
  );
}