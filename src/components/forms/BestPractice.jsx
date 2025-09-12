// filename: bestpractice.jsx
"use client";

import React, { useState, useEffect } from "react";

export const BestPractice = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    bestPracticeTitle: "",
    bestPracticeOrg: "",
    bestPracticeArea: "",
    bestPracticeDescription: "",
    bestPracticeOutcomes: "",
    bestPracticeScope: "",
    bestPracticeContact: "",
    bestPracticeAffiliation: "",
    bestPracticeAccommodation: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Send form data up to parent on every change
  useEffect(() => {
    if (onDataChange) {
      onDataChange(formData);
    }
  }, [formData, onDataChange]);

  return (
    <div className="row">
      {/* Title */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Title of the Best Practice*</label>
        <input
          type="text"
          name="bestPracticeTitle"
          value={formData.bestPracticeTitle}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* Organisation / Individual */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Name of Organisation / Individual*</label>
        <input
          type="text"
          name="bestPracticeOrg"
          value={formData.bestPracticeOrg}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* Area of Work */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Area of Work*</label>
        <select
          name="bestPracticeArea"
          value={formData.bestPracticeArea}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select Area --</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="environment">Environment</option>
          <option value="skill">Skill Development</option>
          <option value="social">Social Welfare</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Description */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Brief Description (500–700 words)*</label>
        <textarea
          name="bestPracticeDescription"
          value={formData.bestPracticeDescription}
          onChange={handleChange}
          rows="6"
          maxLength="4000"
          className="form-control built"
          required
        ></textarea>
        <small className="text-muted">Limit: 500–700 words</small>
      </div>

      {/* Outcomes */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Outcomes / Achievements*</label>
        <textarea
          name="bestPracticeOutcomes"
          value={formData.bestPracticeOutcomes}
          onChange={handleChange}
          rows="4"
          className="form-control built"
          required
        ></textarea>
        <small className="text-muted">
          Include both quantitative & qualitative results
        </small>
      </div>

      {/* Scope for Replication */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Scope for Replication*</label>
        <textarea
          name="bestPracticeScope"
          value={formData.bestPracticeScope}
          onChange={handleChange}
          rows="3"
          className="form-control built"
          required
        ></textarea>
      </div>

      {/* Contact Details */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Contact Details*</label>
        <textarea
          name="bestPracticeContact"
          value={formData.bestPracticeContact}
          onChange={handleChange}
          rows="3"
          placeholder="Name, Email, Phone, Address"
          className="form-control built"
          required
        ></textarea>
      </div>

      {/* Affiliation */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">
          Are you from Vidya Bharti / Non-Vidya Bharti?*
        </label>
        <select
          name="bestPracticeAffiliation"
          value={formData.bestPracticeAffiliation}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="vidya-bharti">Vidya Bharti</option>
          <option value="non-vidya-bharti">Non-Vidya Bharti</option>
        </select>
      </div>

      {/* Accommodation */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Do you need Accommodation?*</label>
        <select
          name="bestPracticeAccommodation"
          value={formData.bestPracticeAccommodation}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  );
};
