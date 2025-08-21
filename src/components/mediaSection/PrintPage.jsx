import React from "react";

export const PrintPage = () => {
  // Dynamically import all images from the folder
  const importAll = (r) => r.keys().map(r);
// Dynamically import all images from the folder
const images = Object.values(import.meta.glob('../../assets/img/sk24printmedia/*.{png,jpg,jpeg,svg}', { eager: true })).map(mod => mod.default);
  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        padding: "24px",
        width: "100%",
        boxSizing: "border-box",
        justifyItems: "center",
      }}
    >
      {images.map((src, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            height: "340px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.09)",
            background: "linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)",
            border: "4px solid #890c25",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={src}
            alt={`gallery-${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "transform 0.3s",
            }}
          />
        </div>
      ))}
    </div>
  );
};

