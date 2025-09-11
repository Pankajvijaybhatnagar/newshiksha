// filename: firstform.jsx
"use client";

import React, { useState } from "react";

export const Firstform = () => {
  const [event, setEvent] = useState("");
  const [registrationType, setRegistrationType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    projectTitle: "",
    abstract: "",
    file: null,
    gender: "",
    designation: "",
    address: "",
    affiliation: "",
    conclaveSelection: [],
    accommodation: "",
    arrivalDate: "",
    departureDate: "",
    numPeople: "",
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === "select-multiple") {
      const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
      setFormData((prev) => ({
        ...prev,
        [name]: selected,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { event, registrationType, formData });
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-bg px-4 py-10 " style={{ marginLeft: "42px" }}>
      <style>{`
          .td_form_title {
            font-size: 2.2rem;
            font-weight: 700;
            color: #890c25;
            text-align: center;
            margin-bottom: 2rem;
            letter-spacing: 1px;
            text-shadow: 0 2px 12px rgba(137,12,37,0.08);
            background: linear-gradient(90deg, #890c25 60%, #a59059 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .td_form_label {
            display: block;
            font-size: 1.1rem;
            font-weight: 600;
            color: #a59059;
            margin-bottom: 4px;
            letter-spacing: 0.5px;
            text-align: left;
            padding-left: 2px;
          }
          .td_form_group {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            margin-bottom: 0;
          }
          @media (max-width: 600px) {
            .td_form_title {
              font-size: 1.4rem;
              margin-bottom: 1.2rem;
            }
            .td_form_label {
              font-size: 0.98rem;
              margin-bottom: 3px;
            }
          }
          .built {
            display: block;
            width: 100%;
            max-width: 500px;
            padding: 14px 18px;
            border-radius: 12px;
            border: 2px solid #a59059;
            background: #fff;
            color: #222;
            font-size: 1.08rem;
            box-shadow: 0 2px 12px rgba(137,12,37,0.08);
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .built:focus {
            border-color: #890c25;
            box-shadow: 0 4px 18px rgba(137,12,37,0.13);
            outline: none;
          }
          @media (min-width: 768px) {
            .td_form_row {
              display: grid !important;
              grid-template-columns: 0.5fr 0.5fr !important;
              gap: 20px !important;
            }
          }
          .btn{
              padding: 14px 18px !important;
              color: black !important;
              background: #a59059 !important;
              margin-top: 20px !important;
          }
          .h:hover {
              background: #890c25 !important;
              color: white !important;
              scale: 1.02 !important;
          }
      `}</style>

      <div className="td_form_card td_style_1 max-w-4xl mx-auto">
        <div className="td_form_card_in p-6 md:p-10 my">
          <h2 className="td_form_title text-center text-2xl md:text-3xl mb-8">
            Event Registration
          </h2>

          <form onSubmit={handleSubmit} className="td_form space-y-8">
            {/* Select Event + Registration Type */}
            <div className="td_form_row">
              <div className="td_form_group">
                <label className="td_form_label">Select Event</label>
                <select
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  className="built"
                  required
                >
                  <option value="">-- Select an Event --</option>
                  <option value="smk3">Shiksha Mahakumbh 5.0</option>
                </select>
              </div>
              <div className="td_form_group">
                <label className="td_form_label">Select Registration Type</label>
                <select
                  value={registrationType}
                  onChange={(e) => setRegistrationType(e.target.value)}
                  className="built"
                  required
                >
                  <option value="">-- Select an option --</option>
                  <option value="delegate">Delegate</option>
                  <option value="project-display">Project Display</option>
                  <option value="talent">Talent</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="ngo">NGO</option>
                  <option value="conclave">Conclave</option>
                  <option value="submit-abstract">Submit Abstract</option>
                  <option value="submit-paper">Submit Full-Length Paper</option>
                  <option value="best-practices">Best Practices</option>
                  <option value="organizer">Organizer</option>
                  <option value="accommodation">Accommodation</option>
                </select>
              </div>
            </div>

            {/* Common Fields */}
            {(registrationType || event) && registrationType !== "conclave" && (
              <div className="td_form_row">
                <div className="td_form_group">
                  <label className="td_form_label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="built"
                    required
                  />
                </div>
                <div className="td_form_group">
                  <label className="td_form_label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="built"
                    required
                  />
                </div>
                <div className="td_form_group">
                  <label className="td_form_label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="built"
                    required
                  />
                </div>
                <div className="td_form_group">
                  <label className="td_form_label">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    name="org"
                    value={formData.org}
                    onChange={handleChange}
                    placeholder="Enter your organization"
                    className="built"
                  />
                </div>
              </div>
            )}

            {/* Project Display */}
            {registrationType === "project-display" && (
              <div className="td_form_row">
                <div className="td_form_group">
                  <label className="td_form_label">Project Title</label>
                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    placeholder="Enter your project title"
                    className="built"
                  />
                </div>
              </div>
            )}

            {/* Abstract */}
            {registrationType === "submit-abstract" && (
              <div className="td_form_row">
                <div className="td_form_group">
                  <label className="td_form_label">Abstract</label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    placeholder="Write your abstract here..."
                    rows="4"
                    className="built"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Full Paper */}
            {registrationType === "submit-paper" && (
              <div className="td_form_row">
                <div className="td_form_group">
                  <label className="td_form_label">
                    Upload Full-Length Paper
                  </label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="built"
                  />
                </div>
              </div>
            )}

            {/* Conclave Specific Fields */}
            {/* Conclave Specific Fields */}
            {registrationType === "conclave" && (
              <>
                <div className="td_form_row">
                  <div className="td_form_group">
                    <label className="td_form_label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="built"
                      required
                    />
                  </div>
                  <div className="td_form_group">
                    <label className="td_form_label">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="built"
                      required
                    >
                      <option value="">-- Select Gender --</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="td_form_group">
                    <label className="td_form_label">Designation / Role</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className="built"
                    />
                  </div>
                  <div className="td_form_group">
                    <label className="td_form_label">
                      Institution / Organization
                    </label>
                    <input
                      type="text"
                      name="org"
                      value={formData.org}
                      onChange={handleChange}
                      className="built"
                    />
                  </div>
                  <div className="td_form_group">
                    <label className="td_form_label">Contact Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="built"
                    />
                  </div>
                  <div className="td_form_group">
                    <label className="td_form_label">Email ID</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="built"
                    />
                  </div>
                  <div className="td_form_group col-span-2">
                    <label className="td_form_label">Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="2"
                      className="built"
                    ></textarea>
                  </div>
                  <div className="td_form_group col-span-2">
                    <label className="td_form_label">
                      Are you from Vidya Bharti / Non-Vidya Bharti?
                    </label>
                    <select
                      name="affiliation"
                      value={formData.affiliation}
                      onChange={handleChange}
                      className="built"
                    >
                      <option value="">-- Select --</option>
                      <option value="vidya-bharti">Vidya Bharti</option>
                      <option value="non-vidya-bharti">Non-Vidya Bharti</option>
                    </select>
                  </div>

                  {/* Conclave Selection - single dropdown */}
                  <div className="td_form_group col-span-2">
                    <label className="td_form_label">Conclave Selection</label>
                    <select
                      name="conclaveSelection"
                      value={formData.conclaveSelection}
                      onChange={handleChange}
                      className="built"
                      required
                    >
                      <option value="">-- Select a Conclave --</option>
                      <option value="National Education Leadership Conclave">National Education Leadership Conclave</option>
                      <option value="School Transformation & Leadership Conclave">School Transformation & Leadership Conclave</option>
                      <option value="Teachers of Bharat Conclave">Teachers of Bharat Conclave</option>
                      <option value="Global Partnerships & Knowledge Diplomacy Conclave">Global Partnerships & Knowledge Diplomacy Conclave</option>
                      <option value="Policy, Governance & Innovation Conclave">Policy, Governance & Innovation Conclave</option>
                      <option value="Social Responsibility & Equity Conclave">Social Responsibility & Equity Conclave</option>
                      <option value="Student Changemakers Conclave">Student Changemakers Conclave</option>
                      <option value="Research, Science & Knowledge Systems Conclave">Research, Science & Knowledge Systems Conclave</option>
                      <option value="Media, Narratives & Digital Influence Conclave">Media, Narratives & Digital Influence Conclave</option>
                      <option value="Grassroots & Community Education Conclave">Grassroots & Community Education Conclave</option>
                      <option value="Inclusion & Differently-Abled Learning Conclave">Inclusion & Differently-Abled Learning Conclave</option>
                      <option value="Parents & Civil Society Conclave">Parents & Civil Society Conclave</option>
                    </select>
                  </div>

                  {/* Accommodation */}
                  <div className="td_form_group col-span-2">
                    <label className="td_form_label">Do you require accommodation?</label>
                    <select
                      name="accommodation"
                      value={formData.accommodation}
                      onChange={handleChange}
                      className="built"
                    >
                      <option value="">-- Select --</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  {formData.accommodation === "yes" && (
                    <>
                      <div className="td_form_group">
                        <label className="td_form_label">Date of Arrival</label>
                        <input
                          type="date"
                          name="arrivalDate"
                          value={formData.arrivalDate}
                          onChange={handleChange}
                          className="built"
                        />
                      </div>
                      <div className="td_form_group">
                        <label className="td_form_label">Date of Departure</label>
                        <input
                          type="date"
                          name="departureDate"
                          value={formData.departureDate}
                          onChange={handleChange}
                          className="built"
                        />
                      </div>
                      <div className="td_form_group">
                        <label className="td_form_label">Number of People</label>
                        <input
                          type="number"
                          name="numPeople"
                          value={formData.numPeople}
                          onChange={handleChange}
                          className="built"
                        />
                      </div>
                    </>
                  )}
                </div>
              </>
            )}

            {/* Submit */}
            <div className="td_form_group text-center ">
              <button
                type="submit"
                disabled={!event || !registrationType}
                className={`btn h td_btn td_style_1 w-full md:w-1/2 ${!event || !registrationType ? "disabled opacity-60" : ""
                  }`}
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
