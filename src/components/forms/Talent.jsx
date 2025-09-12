// filename: talent.jsx
"use client";

import React, { useState } from "react";

export const Talent = () => {
  const [formData, setFormData] = useState({
    talentType: "",

    // Student fields
    studentName: "",
    studentEmail: "",
    studentPhone: "",
    studentDob: "",
    studentClassBoard: "",
    studentSchool: "",
    studentCategory: [],
    studentAchievement: "",
    studentProof: null,
    studentAffiliation: "",

    // Teacher fields
    teacherName: "",
    teacherEmail: "",
    teacherPhone: "",
    teacherDesignation: "",
    teacherSchool: "",
    teacherCategory: [],
    teacherContribution: "",
    teacherProof: null,
    city: "",
    languages: "",
    needAccommodation: "",
    photo: null,
    affiliation: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    // handle checkboxes (multi-select)
    if (name === "studentCategory" || name === "teacherCategory") {
      setFormData((prev) => {
        let updated = [...(prev[name] || [])];
        if (checked) {
          updated.push(value);
        } else {
          updated = updated.filter((item) => item !== value);
        }
        return { ...prev, [name]: updated };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "file" ? files[0] : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Talent Form Submitted:", formData);
    // 👉 Add your API call / submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      {/* Selection: Student or Teacher */}
      <div className="col-md-6 mb-4">
        <label className="td_form_label">Select Category Type*</label>
        <select
          name="talentType"
          value={formData.talentType}
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
            <label className="td_form_label">Select Category (choose one or more)*</label>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="studentAcademic"
                name="studentCategory"
                value="academic"
                checked={formData.studentCategory.includes("academic")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="studentAcademic">
                📘 Academic Excellence (95%+ in 10th/12th Board Exam)
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="studentSports"
                name="studentCategory"
                value="sports"
                checked={formData.studentCategory.includes("sports")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="studentSports">
                🏆 Sports / Competition (National / International Level)
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="studentSocial"
                name="studentCategory"
                value="social"
                checked={formData.studentCategory.includes("social")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="studentSocial">
                🌍 Social Service / Environmental Contribution
              </label>
            </div>
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
              Max 5 MB | Marksheet / Certificate / Award Letter | Photo / Media (optional)
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
            <label className="td_form_label">School / Institution Name & Address*</label>
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
            <label className="td_form_label">Select Category (choose one or more)*</label>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="teacherInnovative"
                name="teacherCategory"
                value="innovative"
                checked={formData.teacherCategory.includes("innovative")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="teacherInnovative">
                💡 Innovative Teaching Practices
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="teacherNeedy"
                name="teacherCategory"
                value="needy"
                checked={formData.teacherCategory.includes("needy")}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="teacherNeedy">
                🤝 Education for the Needy (Social / Voluntary Service)
              </label>
            </div>
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">Details of Contribution / Innovation*</label>
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
            <small className="text-muted">Certificates / Media / Project Details | Max 5 MB</small>
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
              value={formData.needAccommodation}
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
        </>
      )}

      {/* Submit */}
      
    </form>
  );
};
