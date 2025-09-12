// filename: organizer.jsx
"use client";

import React, { useState, useEffect } from "react";

export const Organizer = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    stateCode: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Ensure input is always uppercase
    const upperValue = value.toUpperCase();
    setFormData((prev) => ({
      ...prev,
      [name]: upperValue,
    }));

    // Validation
    if (name === "stateCode" && upperValue !== value) {
      setError("State code must be entered in CAPITAL letters.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.stateCode) {
      setError("State code is required.");
      return;
    }
    console.log("Organizer Registration Submitted:", formData);
    alert("Form submitted successfully!");
  };

  // 🔔 Pass data up to parent (Firstform) if needed
  useEffect(() => {
    if (onDataChange) {
      onDataChange(formData);
    }
  }, [formData, onDataChange]);

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Enter State Code*</label>
        <input
          type="text"
          name="stateCode"
          value={formData.stateCode}
          onChange={handleChange}
          placeholder="Enter state code"
          className="form-control built"
          required
        />
        {error && <small className="text-danger">{error}</small>}
        <small className="text-muted d-block">
          State code should be entered in CAPITAL letters.
        </small>
      </div>

      <div className="col-12 text-end mt-3">
        <button type="submit" className="btn btn-primary">
          Validate State Code
        </button>
      </div>
    </form>
  );
};
