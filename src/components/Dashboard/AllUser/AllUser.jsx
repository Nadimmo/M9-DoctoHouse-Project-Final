import React, { useContext } from "react";
import useAllUser from "../../Hooks/useAllUser";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUser = () => {
  const { users, refetch } = useAllUser();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handlerAdmin = (user) => {
    axiosSecure
      .patch(`/user/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handlerDelete = (id) => {
    axiosSecure
      .delete(`/users/${id}`)
      .then((res) => {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Removed Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        All Users: {users.length}
      </h1>
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300 bg-white">
        <table className="table-auto w-full">
          {/* Table Header */}
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-center">Role</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                <td className="px-4 py-3 text-gray-700">{user.email}</td>
                <td className="px-4 py-3 text-center text-gray-700">
                  {user.role === "admin" ? (
                    <span className="text-green-600 font-semibold">Admin</span>
                  ) : (
                    <button
                      onClick={() => handlerAdmin(user)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded transition"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handlerDelete(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
