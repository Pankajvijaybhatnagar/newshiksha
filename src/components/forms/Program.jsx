// filename: program.jsx
"use client";

import React, { useState, useEffect } from "react";

export const Program = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    // Common Student Details
    studentName: "",
    gender: "",
    classGrade: "",
    schoolName: "",
    schoolAddress: "",
    principalName: "",
    principalContact: "",
    coordinatorName: "",
    coordinatorContact: "",
    email: "",
    affiliation: "",
    accommodation: "",

    // Program selector
    programType: "",

    // National Tinkering Challenge
    tinkeringTheme: "",
    tinkeringTitle: "",
    tinkeringAbstract: "",
    prototypeStatus: "",
    prototypeVideo: null,
    tinkeringTeamFile: null,

    // School Innovation Clubs
    clubName: "",
    studentParticipantsFile: null,
    teacherParticipantsFile: null,
    showcaseDescription: "",
    showcaseFile: null,

    // Vidyarthi Sammelan
    activityPreference: "",
    activitySkill: "",
    languagePreference: "",
    specialNeeds: "",

    // Bharat Yatra
    quizParticipation: "",
    quizLevel: "",
    knowledgeAreas: "",
    heritageType: "",
    heritageMedia: null,
    shortDescription: "",
    bharatAccommodation: "",
    guardianName: "",
    guardianContact: "",
    photoId: null,
  });

  // ✅ Fixed handleChange
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
      {/* ---------------- Common Student Info ---------------- */}
      <div className="col-12 mb-4">
        <h5>👤 Student Details</h5>
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

      <div className="col-md-3 mb-3">
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

      <div className="col-md-3 mb-3">
        <label className="td_form_label">Class / Grade*</label>
        <input
          type="text"
          name="classGrade"
          value={formData.classGrade}
          onChange={handleChange}
          className="form-control built"
          required
        />
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
        <label className="td_form_label">School Full Address*</label>
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
        <label className="td_form_label">Principal’s Contact*</label>
        <input
          type="text"
          name="principalContact"
          value={formData.principalContact}
          onChange={handleChange}
          className="form-control built"
          required
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Teacher/Coordinator Name*</label>
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
        <label className="td_form_label">Teacher/Coordinator Contact*</label>
        <input
          type="text"
          name="coordinatorContact"
          value={formData.coordinatorContact}
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

      <div className="col-md-3 mb-3">
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

      <div className="col-md-3 mb-3">
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

      {/* ---------------- Program Selection ---------------- */}
      <div className="col-12 mb-4 mt-4">
        <h5>📌 Program Selection</h5>
        <hr />
      </div>

      <div className="col-md-6 mb-3">
        <label className="td_form_label">Select Program*</label>
        <select
          name="programType"
          value={formData.programType}
          onChange={handleChange}
          className="form-select built"
          required
        >
          <option value="">-- Select --</option>
          <option value="tinkering">National Tinkering Challenge</option>
          <option value="clubs">School Innovation Clubs Meet-up</option>
          <option value="sammelan">National Vidyarthi Sanskar Sammelan</option>
          <option value="bharatyatra">Bharat Yatra: Quiz & Heritage Trail</option>
        </select>
      </div>

      {/* ---------------- Tinkering ---------------- */}
      {formData.programType === "tinkering" && (
        <>
          <div className="col-12 mb-3">
            <h6>National Tinkering Challenge – “Bharat Ke Navachar”</h6>
            <hr />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Theme Chosen*</label>
            <select
              name="tinkeringTheme"
              value={formData.tinkeringTheme}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="">-- Select Theme --</option>
              <option value="climate">Climate</option>
              <option value="cleanenergy">Clean Energy</option>
              <option value="agriculture">Agriculture</option>
              <option value="rural">Rural Education</option>
              <option value="disability">Disability Tech</option>
              <option value="pharma">Pharma Drug Delivery</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Project / Innovation Title*</label>
            <input
              type="text"
              name="tinkeringTitle"
              value={formData.tinkeringTitle}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-12 mb-3">
            <label className="td_form_label">Abstract / Idea Description*</label>
            <textarea
              name="tinkeringAbstract"
              value={formData.tinkeringAbstract}
              onChange={handleChange}
              rows="4"
              maxLength="900"
              className="form-control built"
              required
            ></textarea>
            <small className="text-muted">Max 300 words</small>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Prototype Status*</label>
            <select
              name="prototypeStatus"
              value={formData.prototypeStatus}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="">-- Select --</option>
              <option value="concept">Concept</option>
              <option value="prototype">Prototype Ready</option>
              <option value="working">Working Model</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Upload Prototype Video*</label>
            <input
              type="file"
              name="prototypeVideo"
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Upload Team Members File*</label>
            <input
              type="file"
              name="tinkeringTeamFile"
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>
        </>
      )}

      {/* ---------------- Clubs ---------------- */}
      {formData.programType === "clubs" && (
        <>
          <div className="col-12 mb-3">
            <h6>School Innovation Clubs Meet-up</h6>
            <hr />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Club Name*</label>
            <input
              type="text"
              name="clubName"
              value={formData.clubName}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">
              Upload Student Participants (Word file)*
            </label>
            <input
              type="file"
              name="studentParticipantsFile"
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">
              Upload Teacher / Mentor Participants (Word file)*
            </label>
            <input
              type="file"
              name="teacherParticipantsFile"
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-12 mb-3">
            <label className="td_form_label">
              Showcase Activity / Practice (200 words)*
            </label>
            <textarea
              name="showcaseDescription"
              value={formData.showcaseDescription}
              onChange={handleChange}
              rows="3"
              maxLength="600"
              className="form-control built"
              required
            ></textarea>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">
              Upload Supporting File / Presentation
            </label>
            <input
              type="file"
              name="showcaseFile"
              onChange={handleChange}
              className="form-control built"
            />
          </div>
        </>
      )}

      {/* ---------------- Sammelan ---------------- */}
      {formData.programType === "sammelan" && (
        <>
          <div className="col-12 mb-3">
            <h6>National Vidyarthi Sanskar Sammelan</h6>
            <hr />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Preferred Activity*</label>
            <select
              name="activityPreference"
              value={formData.activityPreference}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="">-- Select --</option>
              <option value="storytelling">Storytelling</option>
              <option value="vedicmath">Vedic Math Quiz</option>
              <option value="yoga">Yoga & Meditation</option>
              <option value="talk">Inspirational Talk</option>
              <option value="cultural">Cultural Performance</option>
            </select>
          </div>

          <div className="col-12 mb-3">
            <label className="td_form_label">Skill / Experience*</label>
            <textarea
              name="activitySkill"
              value={formData.activitySkill}
              onChange={handleChange}
              rows="3"
              className="form-control built"
              required
            ></textarea>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Language Preference*</label>
            <select
              name="languagePreference"
              value={formData.languagePreference}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="">-- Select --</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="regional">Regional</option>
            </select>
          </div>

          <div className="col-12 mb-3">
            <label className="td_form_label">Special Needs / Requirements</label>
            <input
              type="text"
              name="specialNeeds"
              value={formData.specialNeeds}
              onChange={handleChange}
              className="form-control built"
            />
          </div>
        </>
      )}

      {/* ---------------- Bharat Yatra ---------------- */}
      {formData.programType === "bharatyatra" && (
        <>
          <div className="col-12 mb-3">
            <h6>Bharat Yatra: Know My Nation Quiz & Heritage Trail</h6>
            <hr />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Quiz Participation*</label>
            <select
              name="quizParticipation"
              value={formData.quizParticipation}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="">-- Select --</option>
              <option value="individual">Individual</option>
              <option value="team">Team</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Preferred Level*</label>
            <select
              name="quizLevel"
              value={formData.quizLevel}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="">-- Select --</option>
              <option value="regional">Regional</option>
              <option value="zonal">Zonal</option>
              <option value="national">Direct National</option>
            </select>
          </div>

          <div className="col-12 mb-3">
            <label className="td_form_label">Knowledge Focus Areas*</label>
            <input
              type="text"
              name="knowledgeAreas"
              value={formData.knowledgeAreas}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Heritage Trail Activity*</label>
            <select
              name="heritageType"
              value={formData.heritageType}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="">-- Select --</option>
              <option value="virtual">Virtual Walk</option>
              <option value="model">Model Display</option>
              <option value="exhibition">Exhibition</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Upload Images / Videos</label>
            <input
              type="file"
              name="heritageMedia"
              onChange={handleChange}
              className="form-control built"
            />
          </div>

          <div className="col-12 mb-3">
            <label className="td_form_label">Short Description*</label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              rows="3"
              maxLength="900"
              className="form-control built"
              required
            ></textarea>
            <small className="text-muted">Max 150 words</small>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Accommodation Required*</label>
            <select
              name="bharatAccommodation"
              value={formData.bharatAccommodation}
              onChange={handleChange}
              className="form-select built"
              required
            >
              <option value="">-- Select --</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Parent / Guardian Name*</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Parent / Guardian Contact*</label>
            <input
              type="text"
              name="guardianContact"
              value={formData.guardianContact}
              onChange={handleChange}
              className="form-control built"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="td_form_label">Upload Photo ID Proof*</label>
            <input
              type="file"
              name="photoId"
              onChange={handleChange}
              className="form-control built"
              required
            />
            <small className="text-muted">School ID / Aadhar</small>
          </div>
        </>
      )}
    </div>
  );
};
