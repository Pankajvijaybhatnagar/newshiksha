// filename: volunteer.jsx
"use client";

import React, { useState, useEffect } from "react";

export const Volunteer = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    gender: "",
    dob: "",
    age: "",
    educational_qualification: "",
    institution_name: "",
    designation: "",
    city_state: "",
    volunteer_category: "",
    languages_known: "",
    availability: "",
    specific_dates: "",
    previous_experience: "",
    emergency_contact: "",
    vidya_bharti_status: "",
    accommodation_required: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔔 Pass data up to parent
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

      {/* Contact Number */}
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

      {/* Gender */}
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

      {/* DOB */}
      <div className="col-md-6 mb-3">
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

      {/* Age */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Age*</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="18 years and above preferred"
          className="form-control built"
          required
        />
      </div>

      {/* Educational Qualification */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Educational Qualification*</label>
        <input
          type="text"
          name="educational_qualification"
          value={formData.educational_qualification}
          onChange={handleChange}
          placeholder="Enter current qualification"
          className="form-control built"
          required
        />
      </div>

      {/* Institution */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Institution / Organisation Name*</label>
        <input
          type="text"
          name="institution_name"
          value={formData.institution_name}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* Designation */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Designation / Role (if applicable)</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className="form-control built"
        />
      </div>

      {/* City / State */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">City / State*</label>
        <input
          type="text"
          name="city_state"
          value={formData.city_state}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* Volunteer Category */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Volunteer Category Preference*</label>
        <select
          name="volunteer_category"
          value={formData.volunteer_category}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="registration">Registration & Help Desk</option>
          <option value="stage">Stage Management</option>
          <option value="technical">Technical & IT Support</option>
          <option value="hospitality">Hospitality & Accommodation</option>
          <option value="cultural">Cultural Programmes Support</option>
          <option value="transport">Transport & Logistics</option>
          <option value="media">Media & Documentation</option>
          <option value="exhibition">Exhibition / Stall Management</option>
          <option value="conference">Conference Sessions Coordination</option>
          <option value="other">Other (Specify)</option>
        </select>
      </div>

      {/* Languages */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Languages Known*</label>
        <input
          type="text"
          name="languages_known"
          value={formData.languages_known}
          onChange={handleChange}
          placeholder="English / Hindi / Regional Language / Others"
          className="form-control built"
          required
        />
      </div>

      {/* Availability */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Availability*</label>
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="full">Full Event (31 Oct – 2 Nov 2025)</option>
          <option value="specific">Specific Dates (Mention below)</option>
        </select>
      </div>

      {/* Specific Dates */}
      {formData.availability === "specific" && (
        <div className="col-md-12 mb-3">
          <label className="td_form_label">Mention Specific Dates</label>
          <input
            type="text"
            name="specific_dates"
            value={formData.specific_dates}
            onChange={handleChange}
            className="form-control built"
          />
        </div>
      )}

      {/* Previous Experience */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Previous Volunteering Experience (if any)</label>
        <textarea
          name="previous_experience"
          value={formData.previous_experience}
          onChange={handleChange}
          rows="3"
          className="form-control built"
        ></textarea>
      </div>

      {/* Emergency Contact */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Emergency Contact*</label>
        <input
          type="text"
          name="emergency_contact"
          value={formData.emergency_contact}
          onChange={handleChange}
          placeholder="Name, Relationship, Mobile Number"
          className="form-control built"
          required
        />
      </div>

      {/* Affiliation */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Are you from Vidya Bharti / Non-Vidya Bharti?*</label>
        <select
          name="vidya_bharti_status"
          value={formData.vidya_bharti_status}
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
    </div>
  );
};
