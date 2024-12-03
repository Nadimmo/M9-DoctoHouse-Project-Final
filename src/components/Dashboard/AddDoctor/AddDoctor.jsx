import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AddDoctor = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const hosting_image_key = "0bcaa4dd3d98e007bdbc634f6cca348c";
  const hosting_image_api = `https://api.imgbb.com/1/upload?key=${hosting_image_key}`;

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const { name, specialty, location, date, price, image } = data;

    // Create FormData to send image
    const formData = new FormData();
    formData.append("image", image[0]); // Append the uploaded image

    try {
      // Upload image to imgbb
      const res = await axiosPublic.post(hosting_image_api, formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      if (res.data.success) {
        const imageUrl = res.data.data.url;

        // Construct doctor object
        const doctor = {
          doctor_Name: name,
          specialty,
          location,
          date,
          image: imageUrl, // Use uploaded image URL
          price,
        };

        // Send doctor data to the backend
        const response = await axiosSecure.post("/doctors", doctor);

        if (response.data.insertedId) {
          reset(); // Reset the form on success
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is added to the list.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong with the image upload!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error("Error:", error);
    }
  };

  return (
    <div className="mx-auto p-6 bg-sky-500 text-black font-bold rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Add New Doctor
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Doctor Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Doctor Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Doctor name is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter doctor's name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Specialty */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="specialty">
            Specialty
          </label>
          <input
            type="text"
            id="specialty"
            {...register("specialty", { required: "Specialty is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter specialty"
          />
          {errors.specialty && (
            <p className="text-red-500">{errors.specialty.message}</p>
          )}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            {...register("location", { required: "Location is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="date">
            Available Date
          </label>
          <input
            type="date"
            id="date"
            {...register("date", { required: "Date is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="price">
            Consultation Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { required: "Price is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>

        {/* Image */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            {...register("image", { required: "Image is required" })}
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
