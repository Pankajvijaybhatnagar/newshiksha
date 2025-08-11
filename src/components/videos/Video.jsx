import React from "react";

export const Video = () => {
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
        <div style={containerStyle}>
            {/* Card 1 - Updated to match Card 2 */}
            <div style={cardStyle}>

                <h1 style={titleStyle}>Shiksha Kumbh</h1>

                <a
                    href="https://www.youtube.com/@ShikshaMahakumbh"
                    target="_blank"
                    style={linkStyle}
                >
                    RASE
                    CONFERENCES
                    DOCUMENTARIES

                </a>
                
                <a
                    href="https://www.youtube.com/watch?v=9c9RHrsVU5A"
                    target="_blank"
                    style={linkStyle}
                >
                   2023
                </a>
            </div>

            {/* Card 2 */}
            <div style={cardStyle}>

                <h2 style={titleStyle}>Shiksha Mahakumbh</h2>
               
                <a
                    href="https://www.youtube.com/@ShikshaMahakumbh"
                    target="_blank"
                    style={linkStyle}
                >
                    RASE
                    CONFERENCES
                    DOCUMENTARIES
                </a>
                
                <a
                    href="https://www.youtube.com/watch?v=uzQgxD5Bojk&feature=youtu.be"
                    target="_blank"
                    style={linkStyle}
                >
                    2023
                </a>
                
            </div>
        </div>
    );
};
