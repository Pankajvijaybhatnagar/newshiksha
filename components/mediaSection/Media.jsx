import React, { useState } from "react";

export const Media = () => {
  const containerStyle = {
    padding: "40px 20px",
    backgroundColor: "#fdf6f7",
    minHeight: "100vh",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "50px",
  };

  const mainTitleStyle = {
    fontSize: "3rem",
    color: "#890c25",
    fontWeight: "bold",
    marginBottom: "10px",
    textShadow: "2px 2px 4px rgba(137, 12, 37, 0.1)",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    color: "#666",
    fontWeight: "400",
  };

  const tabContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
    gap: "20px",
    flexWrap: "wrap",
  };

  const tabStyle = {
    padding: "15px 30px",
    backgroundColor: "#fff",
    border: "2px solid #890c25",
    borderRadius: "50px",
    color: "#890c25",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "1.1rem",
    minWidth: "200px",
    textAlign: "center",
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: "#890c25",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(137, 12, 37, 0.3)",
  };

  const contentGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "start",
  };

  const sectionStyle = {
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(137, 12, 37, 0.1)",
    border: "1px solid rgba(137, 12, 37, 0.1)",
  };

  const sectionHeaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "25px",
    paddingBottom: "15px",
    borderBottom: "2px solid #890c25",
  };

  const yearBadgeStyle = {
    backgroundColor: "#890c25",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "bold",
  };

  const linksContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const linkButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 20px",
    backgroundColor: "#fdf6f7",
    border: "2px solid #890c25",
    borderRadius: "15px",
    color: "#890c25",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    fontSize: "1rem",
  };

  const archiveToggleStyle = {
    width: "100%",
    padding: "15px",
    backgroundColor: "#890c25",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
    transition: "all 0.3s ease",
  };

  const archiveContentStyle = {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "15px",
    border: "2px dashed #890c25",
  };

  const MediaSection = ({ title, year, digitalLink, printLink, pastTitle, pastYear, pastDigitalLink, pastPrintLink }) => {
    const [showArchive, setShowArchive] = useState(false);

    return (
      
      <div style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <h2 style={{ fontSize: "2rem", color: "#890c25", fontWeight: "bold", margin: 0 }}>
            {title}
          </h2>
          <div style={yearBadgeStyle}>{year}</div>
        </div>

        <div style={linksContainerStyle}>
          <a 
            href={digitalLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={linkButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#890c25";
              e.target.style.color = "#fff";
              e.target.style.transform = "translateX(10px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#fdf6f7";
              e.target.style.color = "#890c25";
              e.target.style.transform = "translateX(0)";
            }}
          >
            <span>📱 Digital Media</span>
            <span>→</span>
          </a>

          <a 
            href={printLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={linkButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#890c25";
              e.target.style.color = "#fff";
              e.target.style.transform = "translateX(10px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#fdf6f7";
              e.target.style.color = "#890c25";
              e.target.style.transform = "translateX(0)";
            }}
          >
            <span>📰 Print Media</span>
            <span>→</span>
          </a>
        </div>

        <button
          onClick={() => setShowArchive(!showArchive)}
          style={archiveToggleStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = showArchive ? "#ef4444" : "#2563eb";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = showArchive ? "#ef4444" : "#890c25";
            e.target.style.transform = "translateY(0)";
          }}
        >
          {showArchive ? '🔼 Hide Archived Media' : '🔽 Show Archived Media'}
        </button>

        {showArchive && (
          <div style={archiveContentStyle}>
            <div style={{ ...sectionHeaderStyle, border: "none", marginBottom: "15px" }}>
              <h3 style={{ fontSize: "1.5rem", color: "#890c25", fontWeight: "bold", margin: 0 }}>
                {pastTitle}
              </h3>
              <div style={{ ...yearBadgeStyle, backgroundColor: "#6b7280" }}>{pastYear}</div>
            </div>

            <div style={linksContainerStyle}>
              <a 
                href={pastDigitalLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ ...linkButtonStyle, borderColor: "#6b7280", color: "#6b7280" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#6b7280";
                  e.target.style.color = "#fff";
                  e.target.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#fdf6f7";
                  e.target.style.color = "#6b7280";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                <span>📱 Digital Media (Archive)</span>
                <span>→</span>
              </a>

              <a 
                href={pastPrintLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ ...linkButtonStyle, borderColor: "#6b7280", color: "#6b7280" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#6b7280";
                  e.target.style.color = "#fff";
                  e.target.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#fdf6f7";
                  e.target.style.color = "#6b7280";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                <span>📰 Print Media (Archive)</span>
                <span>→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    );
  };

  const [activeTab, setActiveTab] = useState("all");

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={mainTitleStyle}>Media Gallery</h1>
        <p style={subtitleStyle}>Access digital and print media resources</p>
      </div>

      <div style={tabContainerStyle}>
        <div 
          style={activeTab === "all" ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab("all")}
          onMouseEnter={(e) => {
            if (activeTab !== "all") {
              e.target.style.backgroundColor = "#fdf6f7";
              e.target.style.transform = "translateY(-3px)";
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab !== "all") {
              e.target.style.backgroundColor = "#fff";
              e.target.style.transform = "translateY(0)";
            }
          }}
        >
          All Media
        </div>
        <div 
          style={activeTab === "2024" ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab("2024")}
          onMouseEnter={(e) => {
            if (activeTab !== "2024") {
              e.target.style.backgroundColor = "#fdf6f7";
              e.target.style.transform = "translateY(-3px)";
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab !== "2024") {
              e.target.style.backgroundColor = "#fff";
              e.target.style.transform = "translateY(0)";
            }
          }}
        >
          2024 Media
        </div>
      </div>

      <div style={contentGridStyle}>
        <MediaSection
          title="Shiksha Kumbh"
          year="2024"
          digitalLink="/media/digital-media"
          printLink="/media/print-media"
          pastTitle="Shiksha Kumbh"
          pastYear="2023"
          pastDigitalLink="/media/digital-media2023"
          pastPrintLink="/media/print-media"
        />

        <MediaSection
          title="Shiksha Mahakumbh"
          year="2024"
          digitalLink="/media/shikshaMahakumbh2024"
          printLink="/media/print-media"
          pastTitle="Shiksha Mahakumbh"
          pastYear="2023"
          pastDigitalLink="/media/shikshaMahakumbh2023"
          pastPrintLink="/media/print-media"
        />
      </div>
    </div>
  );
};