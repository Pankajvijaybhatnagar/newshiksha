import React, { useState, useMemo } from 'react'

const PaginatedTable = ({ data, rowsPerPage = 5 }) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : []

  const [currentPage, setCurrentPage] = useState(1)
  const [filterText, setFilterText] = useState('')

  // Filter data based on filterText (case-insensitive, checks all columns)
  const filteredData = useMemo(() => {
    if (!filterText) return data
    const lowerFilter = filterText.toLowerCase()
    return data.filter((row) =>
      columns.some((col) =>
        String(row[col]).toLowerCase().includes(lowerFilter)
      )
    )
  }, [filterText, data, columns])

  const totalPages = Math.ceil(filteredData.length / rowsPerPage)

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  // Reset to first page when filter changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [filterText])

  const startIndex = (currentPage - 1) * rowsPerPage
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage)

  return (
    <div>
      {/* Filter input */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filter table..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col}>{row[col]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No matching records found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>

          {[...Array(totalPages)].map((_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PaginatedTable