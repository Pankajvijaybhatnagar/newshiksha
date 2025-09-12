// filename: firstform.jsx
"use client";

import React, { useState } from "react";
import { Conclave } from "./Conclave";
import { Accommodation } from "./Accommodation";
import { General } from "./General";
import { Volunteer } from "./Volunteer";
import { Talent } from "./Talent";
import { BestPractice } from "./BestPractice";
import { ProjectDisplay } from "./ProjectDisplay";
import { English } from "./English";
import {Organizer} from "./Organizer";

export const Firstform = () => {
  const [event, setEvent] = useState("");
  const [registrationType, setRegistrationType] = useState("");
  const [formData, setFormData] = useState({}); // Central store of child data

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Final Submitted Data:", {
      event,
      registrationType,
      formData,
    });
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-bg px-4 py-4" style={{ marginLeft: "42px" }}>
      <style>{`
          .td_form_title {
            font-size: 1.5rem;
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
          <form onSubmit={handleSubmit} className="td_form">
            {/* Event & Registration Type */}
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
                  <option value="conclave">Conclave</option>
                  <option value="programs-for-school-student">
                    Programs for School Student
                  </option>
                  <option value="best-practices">
                    Best Practices by Organisation and Individual
                  </option>
                  <option value="DHE English Olympiad">
                    DHE English Olympiad
                  </option>
                  <option value="project-display">Project Display</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="organizer">Organizer</option>
                  <option value="General Registration Form">
                    General Registration Form
                  </option>
                  <option value="talent">Talent</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="organizer">Organizer</option>
                </select>
              </div>
            </div>

            {/* Conditional Components with onDataChange */}
            {registrationType === "conclave" && (
              <Conclave onDataChange={setFormData} />
            )}
            {registrationType === "accommodation" && (
              <Accommodation onDataChange={setFormData} />
            )}
            {registrationType === "General Registration Form" && (
              <General onDataChange={setFormData} />
            )}
            {registrationType === "volunteer" && (
              <Volunteer onDataChange={setFormData} />
            )}
            {registrationType === "talent" && (
              <Talent onDataChange={setFormData} />
            )}
            {registrationType === "best-practices" && (
              <BestPractice onDataChange={setFormData} />
            )}
            {registrationType === "project-display" && (
              <ProjectDisplay onDataChange={setFormData} />
            )}
            {registrationType === "DHE English Olympiad" && (
              <English onDataChange={setFormData} />
            )}
            {registrationType === "organizer" && (
              <Organizer onDataChange={setFormData} />
            )}

            {/* Submit Button */}
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ margin: "0 auto" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
