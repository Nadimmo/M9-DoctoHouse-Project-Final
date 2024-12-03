import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const AppForm = (appointment) => {
  const axiosSecure = useAxiosSecure();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      date: currentDateTime.toLocaleDateString(),
      time: currentDateTime.toLocaleTimeString(),
    };

    // Log formData before sending
    // console.log('FormData before sending:', formData);

    // Convert formData to JSON string
    const jsonString = JSON.stringify(formData);

    // Send data to the server
    axiosSecure.post('/Newappointments', jsonString, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      // console.log(res.data);
      if (res.data.insertedId) {
        reset(); // Reset the form
        Swal.fire({
          icon: "success",
          title: "Submission Successful!",
          text: "Your review has been submitted.",
        });
      }
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: `${err.message} Failed`,
        text: "Please try again later.",
      });
    });
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
            {...register('name', { required: 'Name is required' })}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>
        {/* Phone Number Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            {...register('phone', { required: 'Phone number is required' })}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
        </div>
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </div>
        {/* Service Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Service</label>
          <input
            defaultValue={appointment.appointment?.service}
            type="text"
            {...register('service', { required: 'Service is required' })}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
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
