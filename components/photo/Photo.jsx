import React from "react";

export const Photo = () => {
  const containerStyle = {
    display: "flex",
    gap: "20px",
    padding: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#fdf6f7",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(137, 12, 37, 0.2)",
    overflow: "hidden",
    width: "320px",
    border: "1px solid #890c25",
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderBottom: "2px solid #890c25",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    margin: "15px",
    color: "#890c25",
    fontWeight: "bold",
  };

  const contentStyle = {
    fontSize: "1rem",
    margin: "5px 15px",
    color: "#444",
  };

  const linkStyle = {
    margin: "5px 15px 15px",
    color: "#890c25",
    fontWeight: "bold",
    textDecoration: "none",
    display: "inline-block",
    border: "1px solid #890c25",
    padding: "6px 12px",
    borderRadius: "6px",
  };

  return (
    <>
   
    <div style={containerStyle}>
      {/* Card 1 - Updated to match Card 2 */}
      <div style={cardStyle}>
       
        <h2 style={titleStyle}>Shiksha Kumbh</h2>
        <p style={contentStyle}>2024 Photos</p>
        <p style={contentStyle}>Day 1 Photos</p>
        <a
          href="https://drive.google.com/drive/folders/1SgwPcXC3xRR7V3hAtKJSzeggBB9Xpwnk"
          target="_blank"
          style={linkStyle}
        >
          View Photos
        </a>
        <p style={contentStyle}>Day 2 Photos</p>
        <a
          href="https://drive.google.com/drive/folders/1SgwPcXC3xRR7V3hAtKJSzeggBB9Xpwnk"
          target="_blank"
          style={linkStyle}
        >
          View Photos
        </a>
      </div>

      {/* Card 2 */}
      <div style={cardStyle}>
       
        <h2 style={titleStyle}>Shiksha Mahakumbh</h2>
        <p style={contentStyle}>2024 Photos</p>
        <p style={contentStyle}>Shiksha Mahakumbh Photos:</p>
        <a
          href="https://drive.google.com/drive/folders/1XnauGu1-dQ2KCpTzvIMHhUwlBF-6GDEN"
          target="_blank"
          style={linkStyle}
        >
          View Photos
        </a>
        <p style={contentStyle}>Baton Ceremony Photos:</p>
        <a
          href="https://www.  /BatonCeremony"
          target="_blank"
          style={linkStyle}
        >
          View Photos
        </a>
        <p style={contentStyle}>Residential Camp Photos:</p>
        <a
          href="https://www.  /ResidentialCamp"
          target="_blank"
          style={linkStyle}
        >
          View Photos
        </a>
      </div>
      
    </div>
      


    </>
  );
};
