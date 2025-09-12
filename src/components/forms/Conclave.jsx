// filename: conclave.jsx
"use client";

import React, { useState, useEffect } from "react";

export const Conclave = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    // Personal Details
    name: "",
    gender: "",
    designation: "",
    org: "",
    phone: "",
    email: "",
    address: "",
    affiliation: "",

    // Conclave
    conclaveSelection: "",

    // Accommodation
    accommodation: "",
    arrivalDate: "",
    departureDate: "",
    numPeople: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Lift data up to parent whenever formData changes
  useEffect(() => {
    if (onDataChange) {
      onDataChange(formData);
    }
  }, [formData, onDataChange]);

  return (
    <div className="row">
      {/* ---------------- Personal Details ---------------- */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Full Name*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
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
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Designation / Role*</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Institution / Organization*</label>
        <input
          type="text"
          name="org"
          value={formData.org}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Contact Number*</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Email ID*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-12 mb-3">
        <label className="td_form_label">Address*</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows="2"
          className="form-control built"
          required
        ></textarea>
      </div>

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

      {/* ---------------- Conclave Selection ---------------- */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Conclave Selection*</label>
        <select
          name="conclaveSelection"
          value={formData.conclaveSelection}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select a Conclave --</option>
          <option value="National Education Leadership Conclave">
            National Education Leadership Conclave
          </option>
          <option value="School Transformation & Leadership Conclave">
            School Transformation & Leadership Conclave
          </option>
          <option value="Teachers of Bharat Conclave">
            Teachers of Bharat Conclave
          </option>
          <option value="Global Partnerships & Knowledge Diplomacy Conclave">
            Global Partnerships & Knowledge Diplomacy Conclave
          </option>
          <option value="Policy, Governance & Innovation Conclave">
            Policy, Governance & Innovation Conclave
          </option>
          <option value="Social Responsibility & Equity Conclave">
            Social Responsibility & Equity Conclave
          </option>
          <option value="Student Changemakers Conclave">
            Student Changemakers Conclave
          </option>
          <option value="Research, Science & Knowledge Systems Conclave">
            Research, Science & Knowledge Systems Conclave
          </option>
          <option value="Media, Narratives & Digital Influence Conclave">
            Media, Narratives & Digital Influence Conclave
          </option>
          <option value="Grassroots & Community Education Conclave">
            Grassroots & Community Education Conclave
          </option>
          <option value="Inclusion & Differently-Abled Learning Conclave">
            Inclusion & Differently-Abled Learning Conclave
          </option>
          <option value="Parents & Civil Society Conclave">
            Parents & Civil Society Conclave
          </option>
        </select>
      </div>

      {/* ---------------- Accommodation ---------------- */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Do you require Accommodation?*</label>
        <select
          name="accommodation"
          value={formData.accommodation}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {formData.accommodation === "yes" && (
        <>
          <div className="col-md-4 mb-3">
            <label className="td_form_label">Date of Arrival*</label>
            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <label className="td_form_label">Date of Departure*</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <label className="td_form_label">Number of People*</label>
            <input
              type="number"
              name="numPeople"
              value={formData.numPeople}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>
        </>
      )}
    </div>
  );
};
