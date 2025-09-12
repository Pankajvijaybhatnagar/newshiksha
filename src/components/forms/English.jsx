// filename: english.jsx
"use client";

import React, { useState } from "react";

export const English = () => {
  const [formData, setFormData] = useState({
    // School Details
    schoolName: "",
    schoolAddress: "",
    principalName: "",
    schoolEmail: "",
    coordinatorName: "",
    coordinatorContact: "",

    // Student Details
    studentName: "",
    parentName: "",
    studentClass: "",
    rollNo: "",
    dob: "",
    gender: "",

    // Fee Details
    paymentMode: "",
    transactionId: "",
    feeReceipt: null,
    paymentDate: "",
    panNumber: "",

    // Affiliation
    affiliation: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("English Olympiad Form Submitted:", formData);
    // 👉 Add your API call or form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      {/* ---------------- School Details ---------------- */}
      <div className="col-12 mb-4">
        <h5>🏫 School Details</h5>
        <hr />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">School Name*</label>
        <input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">School Address*</label>
        <input
          type="text"
          name="schoolAddress"
          value={formData.schoolAddress}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Principal’s Name*</label>
        <input
          type="text"
          name="principalName"
          value={formData.principalName}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Email*</label>
        <input
          type="email"
          name="schoolEmail"
          value={formData.schoolEmail}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">
          School Coordinator’s Name (for Olympiad)*
        </label>
        <input
          type="text"
          name="coordinatorName"
          value={formData.coordinatorName}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">
          Coordinator’s Contact Number & Email*
        </label>
        <input
          type="text"
          name="coordinatorContact"
          value={formData.coordinatorContact}
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
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Father’s / Mother’s Name*</label>
        <input
          type="text"
          name="parentName"
          value={formData.parentName}
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
          name="studentClass"
          value={formData.studentClass}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-4 mb-3">
        <label className="td_form_label">Section / Roll No.*</label>
        <input
          type="text"
          name="rollNo"
          value={formData.rollNo}
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
          name="paymentMode"
          value={formData.paymentMode}
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
        <label className="td_form_label">
          Transaction ID / Receipt Number*
        </label>
        <input
          type="text"
          name="transactionId"
          value={formData.transactionId}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Upload Receipt*</label>
        <input
          type="file"
          name="feeReceipt"
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Date of Payment*</label>
        <input
          type="date"
          name="paymentDate"
          value={formData.paymentDate}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">PAN Number*</label>
        <input
          type="text"
          name="panNumber"
          value={formData.panNumber}
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
          name="affiliation"
          value={formData.affiliation}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="vidya-bharti">Vidya Bharti</option>
          <option value="non-vidya-bharti">Non-Vidya Bharti</option>
        </select>
      </div>

      {/* Submit */}
     
    </form>
  );
};
