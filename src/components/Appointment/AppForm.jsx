import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AppForm = ({ appointment }) => {
  const axiosSecure = useAxiosSecure();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data) => {
    const formData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service || appointment.service, // Use either user input or default value
      price: data.price || appointment.price, // Use either user input or default value
      date: currentDateTime.toLocaleDateString(),
      time: currentDateTime.toLocaleTimeString(),
    };

    try {
      const response = await axiosSecure.post("/Newappointments", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.insertedId) {
        reset(); // Reset the form
        Swal.fire({
          icon: "success",
          title: "Submission Successful!",
          text: "Your appointment has been submitted.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: `Submission Failed: ${err.message}`,
        text: "Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Current Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="text"
            value={currentDateTime.toLocaleDateString()}
            disabled
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {/* Current Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="text"
            value={currentDateTime.toLocaleTimeString()}
            disabled
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        {/* Phone Number Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        {/* Service Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Service</label>
          <input
            type="text"
            defaultValue={appointment?.service}
            {...register("service")}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {/* Price Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="text"
            defaultValue={appointment?.price}
            {...register("price")}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppForm;
