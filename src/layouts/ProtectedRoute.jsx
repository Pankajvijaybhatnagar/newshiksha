// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/signin" replace />;
  }

  // If token exists, render the children
  return children;
};

export default ProtectedRoute;
