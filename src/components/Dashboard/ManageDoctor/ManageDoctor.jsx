import React from "react";
import useDoctors from "../../Hooks/useDoctors";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageDoctor = () => {
  const { doctor, refetch } = useDoctors();
  const axiosSecure = useAxiosSecure();

  const handlerDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/doctors/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "The doctor has been removed successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        My Doctors: {doctor.length}
      </h1>
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300 bg-white">
        <table className="table-auto w-full">
          {/* Table Header */}
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Specialty</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {doctor.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt={`${item.doctor_Name}'s avatar`}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">
                        {item.doctor_Name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-700">{item.specialty}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handlerDelete(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition"
                  >
                    Delete
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

export default ManageDoctor;
