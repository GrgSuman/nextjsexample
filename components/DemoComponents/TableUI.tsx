'use client'
import React, { useState } from 'react';

const TableUI = ({ initialData = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ field: null, direction: 'asc' });
  
  // Sample data
  const sampleData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin", lastActive: "2 hours ago" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending", role: "Editor", lastActive: "5 mins ago" },
    { id: 3, name: "Bob Wilson", email: "bob@example.com", status: "Inactive", role: "User", lastActive: "1 day ago" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Active", role: "Admin", lastActive: "1 hour ago" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", status: "Active", role: "User", lastActive: "Just now" },
  ];

  const data = initialData.length > 0 ? initialData : sampleData;
  const itemsPerPage = 5;

  // Search functionality
  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sorting
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.field) return 0;
    const aValue = a[sortConfig.field];
    const bValue = b[sortConfig.field];
    return (
      sortConfig.direction === 'asc' 
        ? aValue > bValue ? 1 : -1
        : aValue < bValue ? 1 : -1
    );
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Status badge styles
  const getStatusStyle = (status) => {
    const baseStyle = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status.toLowerCase()) {
      case 'active':
        return `${baseStyle} bg-green-100 text-green-800`;
      case 'pending':
        return `${baseStyle} bg-yellow-100 text-yellow-800`;
      case 'inactive':
        return `${baseStyle} bg-red-100 text-red-800`;
      default:
        return `${baseStyle} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="w-full space-y-4 bg-white p-6 rounded-xl shadow-lg">
      {/* Header and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>
        <div className="text-sm text-gray-500">
          {selectedRows.size} row(s) selected
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedRows.size === paginatedData.length}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedRows(new Set(paginatedData.map(row => row.id)));
                    } else {
                      setSelectedRows(new Set());
                    }
                  }}
                />
              </th>
              {Object.keys(data[0]).map(header => (
                header !== 'id' && (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => setSortConfig({
                      field: header,
                      direction: sortConfig.field === header && sortConfig.direction === 'asc' ? 'desc' : 'asc'
                    })}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{header}</span>
                      {sortConfig.field === header && (
                        <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                )
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedRows.has(row.id)}
                    onChange={(e) => {
                      const newSelected = new Set(selectedRows);
                      if (e.target.checked) {
                        newSelected.add(row.id);
                      } else {
                        newSelected.delete(row.id);
                      }
                      setSelectedRows(newSelected);
                    }}
                  />
                </td>
                {Object.entries(row).map(([key, value]) => (
                  key !== 'id' && (
                    <td key={key} className="px-6 py-4 whitespace-nowrap">
                      {key === 'status' ? (
                        <span className={getStatusStyle(value)}>{value}</span>
                      ) : (
                        <span className="text-sm text-gray-900">{value}</span>
                      )}
                    </td>
                  )
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          Showing {Math.min(itemsPerPage, filteredData.length)} of {filteredData.length} results
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-gray-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded border ${
                currentPage === page
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-gray-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableUI;