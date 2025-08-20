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

export const  Shiksha =()=> {
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
        <h1 style={headingStyle}>Shiksha Kumbh</h1>
        <p style={paragraphStyle}>
          The Department of Holistic Education, Vidya Bharti, stands at the forefront of a noble mission to promote education rooted in Bhartiya values and culture on a global scale. With unwavering dedication spanning several decades, we have been committed to ensuring the welfare of all through holistic education. This journey has seen the successful launch of the "Shiksha Mahakumbh" initiative, which made its historic debut in June 2023, with the inaugural session held at NIT Jalandhar, marking a momentous stride in our quest to reimagine education.
        </p>
        <p style={paragraphStyle}>
          Owing to the overwhelming demand from educational institutions to host future editions of Shiksha Mahakumbh, we are thrilled to announce that the quota for this groundbreaking initiative has been booked until 2025. However, we recognize the pressing need to reach every corner of our educational ecosystem and maintain the momentum of Shiksha Mahakumbh's transformative impact.
        </p>
        <p style={paragraphStyle}>
          To this end, we introduce "Shiksha Kumbh," a groundbreaking concept designed to complement Shiksha Mahakumbh and ensure that the light of education reaches every institution. The first edition of Shiksha Kumbh is scheduled to take place at NIT Kurukshetra in December 2023. This event represents a focused and area-specific effort, allowing us to concentrate on select groups and address unique challenges while upholding our commitment to holistic and culturally rooted education.
        </p>
        <p style={paragraphStyle}>
          Shiksha Kumbh promises to be a beacon of educational innovation, collaboration, and empowerment, reinforcing our mission to revitalize education and ensure its alignment with India's timeless cultural and philosophical values. We invite you to join us on this incredible journey as we work together to redefine education and ensure the welfare of all.
        </p>
      </div> <div style={anchorContainer}>
        <a href="https://sk23.  /" target="_blank" style={anchorStyle}>SK 2023</a>
        <a href="https://sk24.  /" target="_blank"  style={anchorStyle}>SK 2024</a>
        <a href="/shikshaMahakumbh2025" target="_blank" style={anchorStyle}>SK 2025</a>
      </div>
    </>
  );
}