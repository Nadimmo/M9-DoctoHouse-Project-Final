import React from "react";
import userRequest from "../../Hooks/userRequest";

const UserRequest = () => {
  const { requests } = userRequest();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-left text-gray-800 mb-6">
        User Requests: {requests.length}
      </h1>
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200 bg-white">
        <table className="table-auto w-full">
          {/* Table Header */}
          <thead className="bg-teal-500 text-white text-lg">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Date & Time</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {requests.length > 0 ? (
              requests.map((request, index) => (
                <tr key={request._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                  <td className="px-4 py-3 text-gray-700">{request.name}</td>
                  <td className="px-4 py-3 text-gray-700">{request.email}</td>
                  <td className="px-4 py-3 text-gray-700">{request.phone}</td>
                  <td className="px-4 py-3 text-gray-700">{request.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-4 py-6 text-center text-gray-500 italic"
                >
                  No User Requests Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRequest;
