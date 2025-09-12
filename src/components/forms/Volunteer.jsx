// filename: volunteer.jsx
"use client";

import React, { useState } from "react";

export const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    age: "",
    qualification: "",
    org: "",
    designation: "",
    city: "",
    volunteerCategory: "",
    languages: "",
    availability: "",
    specificDates: "",
    experience: "",
    emergencyContact: "",
    affiliation: "",
    needAccommodation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Form Submitted:", formData);
    // 👉 Add your API call / submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      {/* Full Name */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Full Name*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
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
          name="phone"
          value={formData.phone}
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
          name="qualification"
          value={formData.qualification}
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
          name="org"
          value={formData.org}
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
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      {/* Volunteer Category */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Volunteer Category Preference*</label>
        <select
          name="volunteerCategory"
          value={formData.volunteerCategory}
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
          name="languages"
          value={formData.languages}
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
            name="specificDates"
            value={formData.specificDates}
            onChange={handleChange}
            className="form-control built"
          />
        </div>
      )}

      {/* Previous Experience */}
      <div className="col-md-12 mb-3">
        <label className="td_form_label">Previous Volunteering Experience (if any)</label>
        <textarea
          name="experience"
          value={formData.experience}
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
          name="emergencyContact"
          value={formData.emergencyContact}
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

      {/* Accommodation */}
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Do you need Accommodation?*</label>
        <select
          name="needAccommodation"
          value={formData.needAccommodation}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Submit */}
    
    </form>
  );
};
