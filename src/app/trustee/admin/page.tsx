"use client";

import React, { useState } from "react";

const TrusteePage = () => {
  const [admins] = useState([
    { id: 1, name: "John Doe", joined: "Jan 2023", role: "Administrator" },
    { id: 2, name: "Jane Smith", joined: "Feb 2023", role: "Administrator" },
  ]);
  const [volunteers] = useState([
    { id: 1, name: "Hamza Ali", joined: "Jan 2024", programs: 3, status: "Active" },
    { id: 2, name: "Umar", joined: "Feb 2024", programs: 2, status: "Active" },
    { id: 3, name: "Jibran", joined: "Mar 2024", programs: 5, status: "Inactive" },
    { id: 4, name: "Ali", joined: "Apr 2024", programs: 4, status: "Active" },
    { id: 5, name: "Areesha", joined: "May 2024", programs: 1, status: "Suspended" },
    { id: 6, name: "Nirma", joined: "May 2024", programs: 1, status: "Active" },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Trustee Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-800">Dashboard Overview</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-medium text-gray-600">Total Volunteers</h3>
            <p className="text-2xl font-semibold text-gray-800">{volunteers.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-medium text-gray-600">Active Volunteers</h3>
            <p className="text-2xl font-semibold text-gray-800">
              {volunteers.filter((vol) => vol.status === "Active").length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-medium text-gray-600">Programs Participated</h3>
            <p className="text-2xl font-semibold text-gray-800">
              {volunteers.reduce((acc, vol) => acc + vol.programs, 0)}
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-medium text-gray-800 mb-4">Admin Overview</h2>
      <div className="overflow-x-auto rounded-lg shadow mb-6">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Joined</th>
              <th className="px-6 py-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="border-b hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">{admin.name}</td>
                <td className="px-6 py-4 text-gray-800">{admin.joined}</td>
                <td className="px-6 py-4 text-gray-800">{admin.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-lg font-medium text-gray-800 mb-4">Volunteer Overview</h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Joined</th>
              <th className="px-6 py-3">Programs Participated</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((volunteer) => (
              <tr key={volunteer.id} className="border-b hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">{volunteer.name}</td>
                <td className="px-6 py-4 text-gray-800">{volunteer.joined}</td>
                <td className="px-6 py-4 text-gray-800">{volunteer.programs}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs text-white rounded-full ${
                      volunteer.status === "Active"
                        ? "bg-green-500"
                        : volunteer.status === "Suspended"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {volunteer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrusteePage;
