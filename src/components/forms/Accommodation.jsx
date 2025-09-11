// filename: accommodation.jsx
"use client";

import React from "react";

export const Accommodation = ({ formData, handleChange }) => {
  return (
    <div className="row">
      <div className="col-md-6 mb-3">
        <label className="td_form_label">Name*</label>
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
        <label className="td_form_label">Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
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
        <label className="td_form_label">Designation*</label>
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

      <div className="col-md-12 mb-3">
        <label className="td_form_label">Institution / Organisation Address*</label>
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
        <label className="td_form_label">Accommodation Date(s)*</label>
        <div className="d-flex gap-2">
          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            className="form-control built"
            required
          />
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="form-control built"
            required
          />
        </div>
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Delegate Category*</label>
        <select
          name="delegateCategory"
          value={formData.delegateCategory}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select Category --</option>
          <option value="student">Student Delegate</option>
          <option value="faculty">Faculty Delegate</option>
          <option value="industry">Industry Delegate</option>
          <option value="international">International Delegate</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Event Name*</label>
        <select
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select Event --</option>
          <option value="smk2025">Shiksha Mahakumbh 2025</option>
        </select>
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Number of Persons*</label>
        <select
          name="numPeople"
          value={formData.numPeople}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Accommodation Fee</label>
        <input
          type="text"
          name="accommodationFee"
          value={formData.accommodationFee || ""}
          onChange={handleChange}
          className="form-control built"
          placeholder="Mentioned as per category"
          readOnly
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Upload Fee Receipt</label>
        <input
          type="file"
          name="feeReceipt"
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">UTR No. / Transaction ID</label>
        <input
          type="text"
          name="transactionId"
          value={formData.transactionId || ""}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

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

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Do you need Accommodation?*</label>
        <select
          name="needAccommodation"
          value={formData.needAccommodation || ""}
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
