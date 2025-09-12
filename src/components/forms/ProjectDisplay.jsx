// filename: projectdisplay.jsx
"use client";

import React, { useState, useEffect } from "react";

export const ProjectDisplay = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    projectType: "",

    // Common fields
    projectName: "",
    projectDescription: "",
    projectPpt: null,
    projectVideo: null,
    email: "",
    phone: "",
    teamSize: "",
    teamDetails: null,
    feeReceipt: null,
    panNumber: "",
    affiliation: "",
    accommodation: "",

    // HEI specific
    instituteName: "",
    instituteAddress: "",

    // School specific
    schoolName: "",
    schoolAddress: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Notify parent about data changes
  useEffect(() => {
    if (onDataChange) {
      onDataChange(formData);
    }
  }, [formData, onDataChange]);

  return (
    <div className="row">
      {/* First selection: HEI or School */}
      <div className="col-md-6 mb-4">
        <label className="td_form_label">Select Institution Type*</label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="hei">Higher Education Institution (HEI)</option>
          <option value="school">School</option>
        </select>
      </div>

      {/* ---------------- HEI FORM ---------------- */}
      {formData.projectType === "hei" && (
        <>
          <div className="col-12 mb-3">
            <h5>Project Display Registration for Higher Education Institutions (HEI)</h5>
            <hr />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Project Name*</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">Project Description (Max 400 words)*</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows="4"
              maxLength="2500"
              className="form-control built"
              required
            ></textarea>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Project PPT Upload*</label>
            <input
              type="file"
              name="projectPpt"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">Max size: 40 MB</small>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Project Video Upload*</label>
            <input
              type="file"
              name="projectVideo"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">Max size: 40 MB</small>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Institute Name*</label>
            <input
              type="text"
              name="instituteName"
              value={formData.instituteName}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Institute Address*</label>
            <input
              type="text"
              name="instituteAddress"
              value={formData.instituteAddress}
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
            <label className="td_form_label">Select Team Size*</label>
            <input
              type="number"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Team Details (Upload in Word file)*</label>
            <input
              type="file"
              name="teamDetails"
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          {/* Fee + QR */}
          <div className="col-md-12 mb-3">
            <label className="td_form_label">Fee: ₹200</label>
            <p>Scan the QR Code below to make payment</p>
            <img src="/qr-code.png" alt="QR Code" width="150" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Fee Receipt Upload*</label>
            <input
              type="file"
              name="feeReceipt"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">
              UTR No. / Transaction ID / Cheque No. mandatory
            </small>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">PAN Number of Institution/Individual*</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          {/* Affiliation + Accommodation */}
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
        </>
      )}

      {/* ---------------- SCHOOL FORM ---------------- */}
      {formData.projectType === "school" && (
        <>
          <div className="col-12 mb-3">
            <h5>Project Display Registration for Schools</h5>
            <hr />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Project Name*</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">Project Description (Max 400 words)*</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows="4"
              maxLength="2500"
              className="form-control built"
              required
            ></textarea>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Project PPT Upload*</label>
            <input
              type="file"
              name="projectPpt"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">Max size: 40 MB</small>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Project Video Upload*</label>
            <input
              type="file"
              name="projectVideo"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">Max size: 40 MB</small>
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
            <label className="td_form_label">Select Team Size*</label>
            <input
              type="number"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Team Details (Upload in Word file)*</label>
            <input
              type="file"
              name="teamDetails"
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          {/* Fee + QR */}
          <div className="col-md-12 mb-3">
            <label className="td_form_label">Fee: ₹200</label>
            <p>Scan the QR Code below to make payment</p>
            <img src="/qr-code.png" alt="QR Code" width="150" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Fee Receipt Upload*</label>
            <input
              type="file"
              name="feeReceipt"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">
              UTR No. / Transaction ID / Cheque No. mandatory
            </small>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">PAN Number of Institution/Individual*</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          {/* Affiliation + Accommodation */}
          <div className="col-md-6 mb-3">
            <label className="td_form_label">Are you from Vidya Bharti / Non-Vidya Bharti?</label>
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
            <label className="td_form_label">Do you need Accommodation?</label>
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
        </>
      )}
    </div>
  );
};
