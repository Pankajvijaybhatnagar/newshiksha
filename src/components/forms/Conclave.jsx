// filename: conclave.jsx
"use client";

import React, { useState, useEffect } from "react";

export const Conclave = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    // Personal Details
    full_name: "",
    gender: "",
    designation: "",
    institution: "",
    contact_number: "",
    email: "",
    address: "",
    vidya_bharti_status: "",

    // Conclave
    conclave_selection: "",

    // Accommodation
    accommodation_required: "",
    arrival_date: "",
    departure_date: "",
    number_of_people: "",
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
          name="full_name"
          value={formData.full_name}
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
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Contact Number*</label>
        <input
          type="tel"
          name="contact_number"
          value={formData.contact_number}
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

      {/* ---------------- Conclave Selection ---------------- */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Conclave Selection*</label>
        <select
          name="conclave_selection"
          value={formData.conclave_selection}
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

      {formData.accommodation_required === "Yes" && (
        <>
          <div className="col-md-4 mb-3">
            <label className="td_form_label">Date of Arrival*</label>
            <input
              type="date"
              name="arrival_date"
              value={formData.arrival_date}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <label className="td_form_label">Date of Departure*</label>
            <input
              type="date"
              name="departure_date"
              value={formData.departure_date}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <label className="td_form_label">Number of People*</label>
            <input
              type="number"
              name="number_of_people"
              value={formData.number_of_people}
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
