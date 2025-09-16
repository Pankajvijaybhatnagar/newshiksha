// filename: AccommodationTable.jsx
"use client";

import React, { useState, useEffect } from "react";
import { config } from "../../conf/config";
import { FaEdit, FaTrash, FaPlus, FaFileImage } from "react-icons/fa";

export const AccommodationTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  // Fetch records
  const fetchData = async (pageNo = 1) => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      const res = await fetch(
        `${config.apiBaseUrl}/api/admin/accommodations?page=${pageNo}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const result = await res.json();
      setData(result.data || []);
      setTotalPages(result.pagination?.pages || 1);
    } catch (error) {
      console.error("Error fetching accommodations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      const token = sessionStorage.getItem("token");
      await fetch(`${config.apiBaseUrl}/api/admin/accommodations/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData(page);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // Edit & Create modal
  const handleEdit = (row) => {
    setFormData(row);
    setSelectedId(row.id);
    setShowModal(true);
  };

  const handleCreate = () => {
    setFormData({});
    setSelectedId(null);
    setShowModal(true);
  };

  // Save (PUT or POST)
  const handleSave = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const method = selectedId ? "PUT" : "POST";
      const url = selectedId
        ? `${config.apiBaseUrl}/api/admin/accommodations/${selectedId}`
        : `${config.apiBaseUrl}/api/admin/accommodations`;

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      setShowModal(false);
      fetchData(page);
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="table-responsive">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>Accommodation Bookings</h4>
        <button className="btn btn-success btn-sm" onClick={handleCreate}>
          <FaPlus className="me-1" /> Add New
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-sm table-striped table-bordered align-middle">
          <thead className="table-info">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Designation</th>
              <th>Institution</th>
              <th>Address</th>
              <th>Dates</th>
              <th>Category</th>
              <th>Event</th>
              <th>Persons</th>
              <th>Fee</th>
              <th>Txn ID</th>
              <th>Vidya Bharti</th>
              <th>Receipt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="15" className="text-center">
                  No records found
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.contact_number}</td>
                  <td>{row.designation}</td>
                  <td>{row.institution_name}</td>
                  <td>{row.institution_address}</td>
                  <td>{row.accommodation_dates}</td>
                  <td>{row.delegate_category}</td>
                  <td>{row.event_name}</td>
                  <td>{row.number_of_persons}</td>
                  <td>₹{row.accommodation_fee}</td>
                  <td>{row.transaction_id}</td>
                  <td>{row.vidya_bharti_status}</td>
                  <td>
                    {row.receipt_upload ? (
                      <a
                        href={`${config.apiBaseUrl}/${row.receipt_upload}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFileImage /> View
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="d-flex bg-white">
                    <button
                      className="btn btn-outline-primary btn-sm me-2"
                      onClick={() => handleEdit(row)}
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(row.id)}
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(page - 1)}>
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i + 1}
              className={`page-item ${page === i + 1 ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => setPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(page + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>

      {/* Modal (Create/Edit) */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedId ? "Edit Accommodation" : "Add Accommodation"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row g-2">
                  {[
                    "name",
                    "email",
                    "contact_number",
                    "designation",
                    "institution_name",
                    "institution_address",
                    "accommodation_dates",
                    "delegate_category",
                    "event_name",
                    "number_of_persons",
                    "accommodation_fee",
                    "transaction_id",
                    "vidya_bharti_status",
                  ].map((field) => (
                    <div className="col-md-6" key={field}>
                      <label className="form-label text-capitalize">
                        {field.replaceAll("_", " ")}
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        name={field}
                        value={formData[field] || ""}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-success" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={() => setShowModal(false)}
        ></div>
      )}
    </div>
  );
};
