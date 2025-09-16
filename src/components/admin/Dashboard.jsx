// filename: Dashboard.jsx
"use client";

import React, { useEffect, useState } from "react";
import { config } from "../../conf/config";
import {
  FaUsers,
  FaUniversity,
  FaClipboardList,
  FaLightbulb,
  FaProjectDiagram,
  FaBed,
  FaRegFileAlt,
  FaHandsHelping,
  FaStar,
  FaUserTie,
} from "react-icons/fa";

export const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [recent, setRecent] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch dashboard data
  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      const res = await fetch(`${config.apiBaseUrl}/api/admin/dashboard`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();
      setStats(result.stats || {});
      setRecent(result.recent_registrations || []);
      setTotal(result.total_registrations || 0);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  // Icon mapping
  const iconMap = {
    conclave_registrations: <FaUsers />,
    student_programs: <FaUniversity />,
    dhe_olympiad: <FaClipboardList />,
    best_practices: <FaLightbulb />,
    project_displays: <FaProjectDiagram />,
    accommodations: <FaBed />,
    general_registrations: <FaRegFileAlt />,
    volunteers: <FaHandsHelping />,
    talent_registrations: <FaStar />,
    organizer_registrations: <FaUserTie />,
  };

  return (
    <div className="container-fluid py-3">
      <h4 className="mb-4">Admin Dashboard</h4>

      {/* Total Registrations */}
      <div className="alert alert-info text-center fw-bold fs-5">
        Total Registrations: {total}
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        {Object.entries(stats).map(([key, value]) => (
          <div className="col-md-4 col-lg-3" key={key}>
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="me-3 fs-3 text-primary">{iconMap[key]}</div>
                <div>
                  <h6 className="fw-1 mb-1">{value.label}</h6>
                  <p className="card-text fs-5 fw-bold">{value.count}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Registrations */}
      <div className="card shadow-sm">
        <div className="card-header  text-white">
          <h5 className="mb-0">Recent Registrations</h5>
        </div>
        <div className="card-body table-responsive">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table table-sm table-striped table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Registered At</th>
                </tr>
              </thead>
              <tbody>
                {recent.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No recent registrations
                    </td>
                  </tr>
                ) : (
                  recent.map((r, i) => (
                    <tr key={i}>
                      <td className="text-capitalize">{r.type}</td>
                      <td>{r.name}</td>
                      <td>{r.email}</td>
                      <td>{r.created_at}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
