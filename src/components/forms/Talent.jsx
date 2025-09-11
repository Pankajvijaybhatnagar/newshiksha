// filename: talent.jsx
"use client";

import React from "react";

export const Talent = ({ formData, handleChange }) => {
  return (
    <div className="row">
      {/* Selection: Student or Teacher */}
      <div className="col-md-6 mb-4">
        <label className="td_form_label">Select Category Type*</label>
        <select
          name="talentType"
          value={formData.talentType || ""}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="student">👨‍🎓 Student</option>
          <option value="teacher">👩‍🏫 Teacher</option>
        </select>
      </div>

      {/* ---------------- STUDENTS SECTION ---------------- */}
      {formData.talentType === "student" && (
        <>
          <div className="col-12 mb-4">
            <h5>👨‍🎓 For Students (विद्यार्थी श्रेणी)</h5>
            <hr />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Full Name*</label>
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
            <label className="td_form_label">Email Address*</label>
            <input
              type="email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Contact Number*</label>
            <input
              type="tel"
              name="studentPhone"
              value={formData.studentPhone}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Date of Birth*</label>
            <input
              type="date"
              name="studentDob"
              value={formData.studentDob}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Class / Board*</label>
            <input
              type="text"
              name="studentClassBoard"
              value={formData.studentClassBoard}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">School Name & Address*</label>
            <input
              type="text"
              name="studentSchool"
              value={formData.studentSchool}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">
              Select Category (choose one or more)*
            </label>
            <select
              multiple
              name="studentCategory"
              value={formData.studentCategory || []}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="academic">
                📘 Academic Excellence (95%+ in 10th/12th Board Exam)
              </option>
              <option value="sports">
                🏆 Sports / Competition (National / International Level)
              </option>
              <option value="social">
                🌍 Social Service / Environmental Contribution
              </option>
            </select>
            <small className="text-muted">
              Hold CTRL (Windows) or CMD (Mac) to select multiple
            </small>
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">Details of Achievement*</label>
            <textarea
              name="studentAchievement"
              value={formData.studentAchievement}
              onChange={handleChange}
              rows="3"
              className="form-control built"
              required
            ></textarea>
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">Upload Proof of Achievement*</label>
            <input
              type="file"
              name="studentProof"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">
              Max 5 MB | Marksheet / Certificate / Award Letter | Photo / Media
              (optional)
            </small>
          </div>

          <div className="col-md-12 mb-4">
            <label className="td_form_label">
              Are you from Vidya Bharti / Non-Vidya Bharti?*
            </label>
            <select
              name="studentAffiliation"
              value={formData.studentAffiliation}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="">-- Select --</option>
              <option value="vidya-bharti">Vidya Bharti</option>
              <option value="non-vidya-bharti">Non-Vidya Bharti</option>
            </select>
          </div>
        </>
      )}

      {/* ---------------- TEACHERS SECTION ---------------- */}
      {formData.talentType === "teacher" && (
        <>
          <div className="col-12 mb-4">
            <h5>👩‍🏫 For Teachers (अध्यापक श्रेणी)</h5>
            <hr />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Full Name*</label>
            <input
              type="text"
              name="teacherName"
              value={formData.teacherName}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Email Address*</label>
            <input
              type="email"
              name="teacherEmail"
              value={formData.teacherEmail}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Contact Number*</label>
            <input
              type="tel"
              name="teacherPhone"
              value={formData.teacherPhone}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Designation & Subject*</label>
            <input
              type="text"
              name="teacherDesignation"
              value={formData.teacherDesignation}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">
              School / Institution Name & Address*
            </label>
            <input
              type="text"
              name="teacherSchool"
              value={formData.teacherSchool}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">
              Select Category (choose one or more)*
            </label>
            <select
              multiple
              name="teacherCategory"
              value={formData.teacherCategory || []}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="innovative">💡 Innovative Teaching Practices</option>
              <option value="needy">
                🤝 Education for the Needy (Social / Voluntary Service)
              </option>
            </select>
            <small className="text-muted">
              Hold CTRL (Windows) or CMD (Mac) to select multiple
            </small>
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">
              Details of Contribution / Innovation*
            </label>
            <textarea
              name="teacherContribution"
              value={formData.teacherContribution}
              onChange={handleChange}
              rows="5"
              maxLength="500"
              className="form-control built"
              required
            ></textarea>
            <small className="text-muted">Max 500 words</small>
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">Upload Supporting Documents*</label>
            <input
              type="file"
              name="teacherProof"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">
              Certificates / Media / Project Details | Max 5 MB
            </small>
          </div>

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

          <div className="col-md-6 mb-3">
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

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Do you need Accommodation?</label>
            <select
              name="needAccommodation"
              value={formData.needAccommodation || ""}
              onChange={handleChange}
              className="form-select built"
            >
              <option value="">-- Select --</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Upload Passport-size Photo*</label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">Max 2 MB</small>
          </div>

          <div className="col-md-12 mb-3">
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
        </>
      )}
    </div>
  );
};
