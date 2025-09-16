// filename: talent.jsx
"use client";

import React, { useState, useEffect } from "react";

export const Talent = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    talentType: "",

    // Student fields
    full_name: "",
    email: "",
    contact_number: "",
    dob: "",
    class_board: "",
    school_name_address: "",
    category: [],
    achievement_details: "",
    achievement_proof: null,
    media: null,
    vidya_bharti_status: "",

    // Teacher fields
    designation_subject: "",
    institution_name_address: "",
    contribution_details: "",
    city_state: "",
    languages_known: "",
    accommodation_required: "",
    supporting_documents: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    // handle category checkboxes (multi-select)
    if (name === "category") {
      setFormData((prev) => {
        let updated = [...(prev.category || [])];
        if (checked) {
          updated.push(value);
        } else {
          updated = updated.filter((item) => item !== value);
        }
        return { ...prev, category: updated };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "file" ? files[0] : value,
      }));
    }
  };

  // 🔔 Pass data to parent whenever it changes
  useEffect(() => {
    if (onDataChange) {
      onDataChange(formData);
    }
  }, [formData, onDataChange]);

  return (
    <div className="row">
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
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Email Address*</label>
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
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

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

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Class / Board*</label>
            <input
              type="text"
              name="class_board"
              value={formData.class_board}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">School Name & Address*</label>
            <input
              type="text"
              name="school_name_address"
              value={formData.school_name_address}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          {/* Categories */}
          <div className="col-md-12 mb-3">
            <label className="td_form_label">Select Category (choose one or more)*</label>
            {["academic", "sports", "social"].map((val, i) => (
              <div className="form-check" key={i}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`student_${val}`}
                  name="category"
                  value={val}
                  checked={formData.category.includes(val)}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={`student_${val}`}>
                  {val === "academic"
                    ? "📘 Academic Excellence (95%+ in 10th/12th Board Exam)"
                    : val === "sports"
                    ? "🏆 Sports / Competition (National / International Level)"
                    : "🌍 Social Service / Environmental Contribution"}
                </label>
              </div>
            ))}
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">Details of Achievement*</label>
            <textarea
              name="achievement_details"
              value={formData.achievement_details}
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
              name="achievement_proof"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">Max 5 MB | Marksheet / Certificate / Award Letter</small>
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">Upload Optional Media</label>
            <input
              type="file"
              name="media"
              onChange={handleChange}
              className="form-control built"
            />
            <small className="text-muted">Optional | Images / Video (Max 5 MB)</small>
          </div>

          <div className="col-md-12 mb-4">
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
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Email Address*</label>
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
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Designation & Subject*</label>
            <input
              type="text"
              name="designation_subject"
              value={formData.designation_subject}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">School / Institution Name & Address*</label>
            <input
              type="text"
              name="institution_name_address"
              value={formData.institution_name_address}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          {/* Categories */}
          <div className="col-md-12 mb-3">
            <label className="td_form_label">Select Category (choose one or more)*</label>
            {["innovative", "needy"].map((val, i) => (
              <div className="form-check" key={i}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`teacher_${val}`}
                  name="category"
                  value={val}
                  checked={formData.category.includes(val)}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={`teacher_${val}`}>
                  {val === "innovative"
                    ? "💡 Innovative Teaching Practices"
                    : "🤝 Education for the Needy (Social / Voluntary Service)"}
                </label>
              </div>
            ))}
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">Details of Contribution / Innovation*</label>
            <textarea
              name="contribution_details"
              value={formData.contribution_details}
              onChange={handleChange}
              rows="5"
              className="form-control built"
              required
            ></textarea>
            <small className="text-muted">Max 500 words</small>
          </div>

          <div className="col-md-12 mb-3">
            <label className="td_form_label">Upload Supporting Documents*</label>
            <input
              type="file"
              name="supporting_documents"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">Certificates / Media | Max 5 MB</small>
          </div>

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

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Languages Known*</label>
            <input
              type="text"
              name="languages_known"
              value={formData.languages_known}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Do you need Accommodation?</label>
            <select
              name="accommodation_required"
              value={formData.accommodation_required}
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
              name="vidya_bharti_status"
              value={formData.vidya_bharti_status}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="">-- Select --</option>
              <option value="vidya Bharti">Vidya Bharti</option>
              <option value="Non-Vidya Bharti">Non-Vidya Bharti</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
};
