// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");

  // Detect mobile device
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold"
      }}>
        🚫 Please open this application on a Desktop or Laptop
      </div>
    );
  }

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/signin" replace />;
  }

  // If token exists and not mobile, render the children
  return children;
};

export default ProtectedRoute;