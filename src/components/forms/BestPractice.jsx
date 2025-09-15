// filename: bestpractice.jsx
"use client";

import React, { useState, useEffect } from "react";

export const BestPractice = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    practice_title: "",
    organization_name: "",
    work_area: "",
    description: "",
    outcomes: "",
    replication_scope: "",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    contact_address: "",
    vidya_bharti_status: "",
    accommodation_required: "",
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
          name="practice_title"
          value={formData.practice_title}
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
          name="organization_name"
          value={formData.organization_name}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* Area of Work */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Area of Work*</label>
        <select
          name="work_area"
          value={formData.work_area}
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
          name="description"
          value={formData.description}
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
          name="outcomes"
          value={formData.outcomes}
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
          name="replication_scope"
          value={formData.replication_scope}
          onChange={handleChange}
          rows="3"
          className="form-control built"
          required
        ></textarea>
      </div>

      {/* Contact Name */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Contact Name*</label>
        <input
          type="text"
          name="contact_name"
          value={formData.contact_name}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* Contact Email */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Contact Email*</label>
        <input
          type="email"
          name="contact_email"
          value={formData.contact_email}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* Contact Phone */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Contact Phone*</label>
        <input
          type="tel"
          name="contact_phone"
          value={formData.contact_phone}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* Contact Address */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Contact Address*</label>
        <input
          type="text"
          name="contact_address"
          value={formData.contact_address}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* Affiliation */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">
          Are you from Vidya Bharti / Non-Vidya Bharti?*
        </label>
        <select
          name="vidya_bharti_status"
          value={formData.vidya_bharti_status}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="Vidya Bharti">Vidya Bharti</option>
          <option value="Non-Vidya Bharti">Non-Vidya Bharti</option>
        </select>
      </div>

      {/* Accommodation */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Do you need Accommodation?*</label>
        <select
          name="accommodation_required"
          value={formData.accommodation_required}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>
  );
};
