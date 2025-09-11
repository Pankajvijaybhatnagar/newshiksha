import PaginatedTable from './PaginatedTable'

const TablePage = () => {
  const dummyData = Array.from({ length: 50 }, (_, i) => ({
    ID: i + 1,
    Name: `Name ${i + 1}`,
    Email: `user${i + 1}@example.com`,
    Age: 20 + (i % 30),
    Country: ['USA', 'UK', 'Canada', 'Australia'][i % 4],
    Status: ['Active', 'Inactive'][i % 2],
    Role: ['Admin', 'User  ', 'Editor'][i % 3],
    CreatedAt: `2024-06-${(i % 30) + 1}`,
    LastLogin: `2024-06-${(i % 30) + 1}`,
    Score: Math.floor(Math.random() * 100),
  }))

  return (
    <div className="container mt-4">
      <PaginatedTable data={dummyData} rowsPerPage={10} />
    </div>
  )
}

export default TablePage