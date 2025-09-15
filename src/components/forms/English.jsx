// filename: english.jsx
"use client";

import React, { useState, useEffect } from "react";

export const English = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    // School Details
    school_name: "",
    school_address: "",
    principal_name: "",
    principal_email: "",
    coordinator_name: "",
    coordinator_contact: "",
    coordinator_email: "",

    // Student Details
    student_name: "",
    parent_name: "",
    class: "",
    section_roll: "",
    dob: "",
    gender: "",

    // Fee Details
    payment_mode: "",
    transaction_id: "",
    receipt_upload: null,
    payment_date: "",
    pan_number: "",

    // Affiliation
    vidya_bharti_status: "",
  });

  // Handle changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Notify parent when data changes
  useEffect(() => {
    if (onDataChange) {
      onDataChange(formData);
    }
  }, [formData, onDataChange]);

  return (
    <div className="row">
      {/* ---------------- School Details ---------------- */}
      <div className="col-12 mb-4">
        <h5>🏫 School Details</h5>
        <hr />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">School Name*</label>
        <input
          type="text"
          name="school_name"
          value={formData.school_name}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">School Address*</label>
        <input
          type="text"
          name="school_address"
          value={formData.school_address}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Principal’s Name*</label>
        <input
          type="text"
          name="principal_name"
          value={formData.principal_name}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Principal Email*</label>
        <input
          type="email"
          name="principal_email"
          value={formData.principal_email}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-4 mb-3">
        <label className="td_form_label">
          School Coordinator’s Name (for Olympiad)*
        </label>
        <input
          type="text"
          name="coordinator_name"
          value={formData.coordinator_name}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-4 mb-3">
        <label className="td_form_label">Coordinator Contact*</label>
        <input
          type="text"
          name="coordinator_contact"
          value={formData.coordinator_contact}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-4 mb-3">
        <label className="td_form_label">Coordinator Email*</label>
        <input
          type="email"
          name="coordinator_email"
          value={formData.coordinator_email}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* ---------------- Student Details ---------------- */}
      <div className="col-12 mb-4 mt-4">
        <h5>🧑‍🎓 Student Details</h5>
        <hr />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Full Name of Student*</label>
        <input
          type="text"
          name="student_name"
          value={formData.student_name}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Father’s / Mother’s Name*</label>
        <input
          type="text"
          name="parent_name"
          value={formData.parent_name}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-4 mb-3">
        <label className="td_form_label">Class (1–10)*</label>
        <input
          type="number"
          min="1"
          max="10"
          name="class"
          value={formData.class}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-4 mb-3">
        <label className="td_form_label">Section / Roll No.*</label>
        <input
          type="text"
          name="section_roll"
          value={formData.section_roll}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-4 mb-3">
        <label className="td_form_label">Date of Birth*</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Gender*</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* ---------------- Fee Details ---------------- */}
      <div className="col-12 mb-4 mt-4">
        <h5>💳 Fee Details</h5>
        <hr />
      </div>

      <div className="col-md-12 mb-3">
        <label className="td_form_label">Fee: ₹100 per student</label>
        <p className="text-muted">
          Please complete the payment before submitting the form.
        </p>
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Mode of Payment*</label>
        <select
          name="payment_mode"
          value={formData.payment_mode}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="upi">UPI</option>
          <option value="bank">Bank Transfer</option>
          <option value="school">School Consolidated</option>
        </select>
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Transaction ID / Receipt Number*</label>
        <input
          type="text"
          name="transaction_id"
          value={formData.transaction_id}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Upload Receipt*</label>
        <input
          type="file"
          name="receipt_upload"
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Date of Payment*</label>
        <input
          type="date"
          name="payment_date"
          value={formData.payment_date}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">PAN Number*</label>
        <input
          type="text"
          name="pan_number"
          value={formData.pan_number}
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
    </div>
  );
};
