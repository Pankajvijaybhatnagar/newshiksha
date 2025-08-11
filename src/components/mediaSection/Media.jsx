import React, { useState } from "react";

export const Media = () => {
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

  // Reusable Card component
  const MediaCard = ({ title, year, digitalLink, printLink, pastTitle, pastYear, pastDigitalLink, pastPrintLink }) => {
    const [showContent, setShowContent] = useState(false);

    return (
      <div style={cardStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={contentStyle}>{year}</p>

        <a href={digitalLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Digital Media
        </a>
        <a href={printLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Print Media
        </a>

        <div className="m-5 p-4 border rounded shadow">
          <button
            onClick={() => setShowContent(!showContent)}
            className="bg-blue-600  px-4 py-2 rounded hover:bg-blue-700"
          >
            {showContent ? 'Hide Archived Media' : 'Show Archived Media'}
          </button>

          {showContent && (
            <>
              <h2 style={titleStyle}>{pastTitle}</h2>
              <p style={contentStyle}>{pastYear}</p>
              <a href={pastDigitalLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Digital Media
              </a>
              <a href={pastPrintLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Print Media
              </a>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={containerStyle}>
      <MediaCard
        title="Shiksha Kumbh"
        year="2024"
        digitalLink="/media/digital-media"
        printLink="https://drive.google.com/drive/folders/1SgwPcXC3xRR7V3hAtKJSzeggBB9Xpwnk"
        pastTitle="Shiksha Kumbh"
        pastYear="2023"
        pastDigitalLink="/media/digital-media2023"
        pastPrintLink="https://drive.google.com/drive/folders/1SgwPcXC3xRR7V3hAtKJSzeggBB9Xpwnk"
      />

      <MediaCard
        title="Shiksha Mahakumbh"
        year="2024"
        digitalLink="/media/shikshaMahakumbh2024"
        printLink="https://www.rase.co.in/BatonCeremony"
        pastTitle="Shiksha Mahakumbh"
        pastYear="2023"
        pastDigitalLink=""
        pastPrintLink="https://drive.google.com/drive/folders/1SgwPcXC3xRR7V3hAtKJSzeggBB9Xpwnk"
      />
    </div>
  );
};
