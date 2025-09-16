// filename: general.jsx
"use client";

import React, { useState, useEffect } from "react";

export const General = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    registration_id: "", // auto-generated on backend, but keeping here for structure
    full_name: "",
    email: "",
    contact_number: "",
    designation: "",
    institution_name: "",
    institution_address: "",
    delegate_category: "",
    accommodation_required: "",
    registration_fee: "",
    transaction_id: "",
    receipt: null,
    pan_number: "",
    vidya_bharti_status: "",
    created_at: "", // backend-generated timestamp
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // notify parent about data changes
  useEffect(() => {
    if (onDataChange) {
      onDataChange(formData);
    }
  }, [formData, onDataChange]);

  return (
    <div className="row">
      {/* Full Name */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Full Name*</label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="form-control built"
          required
        />
      </div>

      {/* Email */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Email Address*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@example.com"
          className="form-control built"
          required
        />
      </div>

      {/* Phone */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Contact Number*</label>
        <input
          type="tel"
          name="contact_number"
          value={formData.contact_number}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          className="form-control built"
          required
        />
      </div>

      {/* Designation */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Designation*</label>
        <select
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="researcher">Researcher</option>
          <option value="professional">Professional</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Institution Name */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Institution / Organisation Name*</label>
        <input
          type="text"
          name="institution_name"
          value={formData.institution_name}
          onChange={handleChange}
          placeholder="Enter full name"
          className="form-control built"
          required
        />
      </div>

      {/* Institution Address */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Institution / Organisation Address*</label>
        <textarea
          name="institution_address"
          value={formData.institution_address}
          onChange={handleChange}
          rows="2"
          className="form-control built"
          required
        ></textarea>
      </div>

      {/* Delegate Category */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Delegate Category*</label>
        <select
          name="delegate_category"
          value={formData.delegate_category}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select Category --</option>
          <option value="student">Student Delegate</option>
          <option value="faculty">Faculty Delegate</option>
          <option value="research">Research Scholar</option>
          <option value="industry">Industry Delegate</option>
          <option value="international">International Delegate (Free)</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Accommodation Requirement */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Accommodation Requirement*</label>
        <select
          name="accommodation_required"
          value={formData.accommodation_required}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Registration Fee */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Registration Fee</label>
        <input
          type="text"
          name="registration_fee"
          value={formData.registration_fee}
          onChange={handleChange}
          className="form-control built"
          placeholder="Mentioned as per category"
          readOnly
        />
      </div>

      {/* UTR / Transaction ID */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">UTR No. / Transaction ID</label>
        <input
          type="text"
          name="transaction_id"
          value={formData.transaction_id}
          onChange={handleChange}
          className="form-control built"
        />
      </div>

      {/* Upload Fee Receipt */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Upload Fee Receipt</label>
        <input
          type="file"
          name="receipt"
          onChange={handleChange}
          className="form-control built"
        />
      </div>

      {/* PAN Number */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">PAN Number</label>
        <input
          type="text"
          name="pan_number"
          value={formData.pan_number}
          onChange={handleChange}
          className="form-control built"
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
          <option value="vidya Bharti">Vidya Bharti</option>
          <option value="Non-Vidya Bharti">Non-Vidya Bharti</option>
        </select>
      </div>
    </div>
  );
};
