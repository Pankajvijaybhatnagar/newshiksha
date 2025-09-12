// filename: firstform.jsx
"use client";

import React, { useState } from "react";
import { Conclave } from "./Conclave";
import { Accommodation } from "./Accommodation";
import { General } from "./General";
import { Volunteer } from "./Volunteer";
import { Talent } from "./Talent";
import { BestPractice } from "./BestPractice";
import {ProjectDisplay} from "./ProjectDisplay";
import {English} from "./English";
 
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
    conclaveSelection: "",
    accommodation: "",
    arrivalDate: "",
    departureDate: "",
    numPeople: "",
    delegateCategory: "",
    eventName: "",
    accommodationFee: "",
    feeReceipt: null,
    transactionId: "",
    needAccommodation: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const current = prev[name] || [];
        return {
          ...prev,
          [name]: checked
            ? [...current, value] // add if checked
            : current.filter((v) => v !== value), // remove if unchecked
        };
      });
    } else if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { event, registrationType, formData });
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-bg px-4 py-4" style={{ marginLeft: "42px" }}>
      <style>{`
          .td_form_title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #890c25;
            text-align: center;
            margin-bottom: 2rem;
            letter-spacing: 1px;
            text-shadow: 0 2px 12px rgba(137,12,37,0.08);
            background: linear-gradient(90deg, #890c25 60%, #890c25 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .td_form_label {
            display: block;
            font-size: 1.1rem;
            font-weight: 600;
            color: #150005;
            margin-bottom: 4px;
            letter-spacing: 0.5px;
            text-align: left;
            padding-left: 2px;
          }
          .built {
            display: block;
            width: 100%;
            padding: 14px 18px;
            border-radius: 12px;
            border: 2px solid grey;
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
          .btn-custom {
            padding: 14px 18px;
            color: black;
            background: #a59059;
            margin-top: 20px;
          }
          .btn-custom:hover {
            background: #890c25;
            color: white;
            transform: scale(1.02);
          }
      `}</style>

      <div className="card container">
        <div className="card-body p-3 p-md-5">
          <h2 className="td_form_title mb-4">Event Registration</h2>

          <form onSubmit={handleSubmit} className="td_form">
            {/* Select Event + Registration Type */}
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="td_form_label">Select Event</label>
                <select
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  className="built form-select"
                  required
                >
                  <option value="">-- Select an Event --</option>
                  <option value="smk3">Shiksha Mahakumbh 5.0</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="td_form_label">Select Registration Type</label>
                <select
                  value={registrationType}
                  onChange={(e) => setRegistrationType(e.target.value)}
                  className="built form-select"
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
                  <option value="best-practices">Best Practices by Organisation and Individual</option>
                  <option value="organizer">Organizer</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="General Registration Form">General Registration Form</option>
                  <option value="DHE English Olympiad">DHE English Olympiad</option>
                </select>
              </div>
            </div>

            {/* Example: Project Display */}
           

            {/* Example: Abstract */}
            {registrationType === "submit-abstract" && (
              <div className="row mb-3">
                <div className="col-md-12">
                  <label className="td_form_label">Abstract</label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    rows="4"
                    className="built form-control"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Example: Paper Upload */}
            {registrationType === "submit-paper" && (
              <div className="row mb-3">
                <div className="col-md-12">
                  <label className="td_form_label">Upload Full-Length Paper</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="built form-control"
                  />
                </div>
              </div>
            )}

            {/* ✅ Conclave Section */}
            {registrationType === "conclave" && <Conclave formData={formData} handleChange={handleChange} />}

            {/* ✅ Accommodation Section Example */}
            {registrationType === "accommodation" && <Accommodation formData={formData} handleChange={handleChange} />}

            { /* General resigtration form */}
            {registrationType === "General Registration Form" && <General formData={formData} handleChange={handleChange} />}

            {/* Volunteer */}
            {registrationType === "volunteer" && <Volunteer formData={formData} handleChange={handleChange} />}

            {/* Talent */}
            {registrationType === "talent" && <Talent formData={formData} handleChange={handleChange} />}

            {/* //Best Practices */}
            {registrationType === "best-practices" && <BestPractice formData={formData} handleChange={handleChange} />}

            {/* Project Display */}
            {registrationType === "project-display" && <ProjectDisplay formData={formData} handleChange={handleChange} />}

            {/* English Olympiad */}
              {registrationType === "DHE English Olympiad" && <English formData={formData} handleChange={handleChange} />}
            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!event || !registrationType}
                className="btn btn-custom w-100 w-md-50"
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
