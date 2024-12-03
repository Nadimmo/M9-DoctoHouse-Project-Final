import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios"; // Ensure axios is installed
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UseForm = () => {
  const axiosPublic = useAxiosPublic();
  const hosting_image_key = "ebced42c75e22d67b350b68860e7277c";
  const hosting_image_api = `https://api.imgbb.com/1/upload?key=${hosting_image_key}`;

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const { userName, work, review, image } = data;

    const formData = new FormData();
    formData.append("image", image[0]);

    try {
      const imageUploadResponse = await axios.post(
        hosting_image_api,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (imageUploadResponse.data.success) {
        const imageUrl = imageUploadResponse.data.data.url;

        const userData = {
          userName,
          work,
          review,
          image: imageUrl,
        };

        const jsonString = JSON.stringify(userData);

        const result = await axiosPublic.post("/reviews", jsonString, {
          headers: { 'Content-Type': 'application/json' }
        });

        if (result.data) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Submission Successful!",
            text: "Your review has been submitted.",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div className="mx-auto my-10 p-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Submit Your Review
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* User Name */}
        <div>
          <label className="block text-lg mb-2" htmlFor="userName">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            {...register("userName", { required: "User name is required" })}
            className="w-full p-3 text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Enter your name"
          />
          {errors.userName && (
            <p className="mt-1 text-red-500">{errors.userName.message}</p>
          )}
        </div>

        {/* Work Description */}
        <div>
          <label className="block text-lg mb-2" htmlFor="work">
            Work
          </label>
          <input
            type="text"
            id="work"
            {...register("work", { required: "Work description is required" })}
            className="w-full p-3 text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Describe your work"
          />
          {errors.work && (
            <p className="mt-1 text-red-500">{errors.work.message}</p>
          )}
        </div>

        {/* Review */}
        <div>
          <label className="block text-lg mb-2" htmlFor="review">
            Review
          </label>
          <textarea
            id="review"
            {...register("review", { required: "Review is required" })}
            className="w-full p-3 text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Write your review"
            rows="4"
          />
          {errors.review && (
            <p className="mt-1 text-red-500">{errors.review.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-lg mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            {...register("image", { required: "Image is required" })}
            accept="image/*"
            className="w-full p-3 text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
          {errors.image && (
            <p className="mt-1 text-red-500">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-teal-300 hover:text-white transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseForm;
