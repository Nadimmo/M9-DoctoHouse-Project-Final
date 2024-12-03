import { useForm } from 'react-hook-form';
import { FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const user = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: data.dateTime,
    };

    axiosPublic.post('/userRequest', user)
      .then((res) => {
        if (res.data.insertedId) {
          reset(); // Reset the form
          Swal.fire({
            icon: "success",
            title: "Submission Successful!",
            text: "Your message has been sent. We will get back to you shortly.",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
        });
      });
  };

  return (
    <div className="lg:mx-20 my-20 bg-gradient-to-r from-green-800 via-teal-800 to-green-900 text-white p-10 rounded-xl lg:flex justify-between shadow-xl">
      {/* Left Side: Contact Info */}
      <div className="mt-10">
        <h3 className="text-4xl font-bold mb-4">Get in Touch</h3>
        <p className="text-lg lg:w-[400px] mb-6">
          Have questions or need assistance? Reach out to us—we're here to help. Your feedback and inquiries are valuable to us.
        </p>
        <div className="flex items-center mb-4">
          <span className="text-2xl text-green-300">
            <FaPhone />
          </span>
          <p className="text-md ml-3">+88 01750 14 14 14</p>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-2xl text-green-300">
            <MdLocationPin />
          </span>
          <p className="text-md ml-3">Dhanmondi, Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="lg:w-1/2 p-6 bg-white text-black rounded-lg shadow-md">
        <h3 className="text-3xl font-bold mb-4 text-center text-green-900">Send Us a Message</h3>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Please fill out the form below, and our team will get back to you promptly.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
          {/* Name and Email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              {...register('name', { required: true })}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Phone and Date */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone"
              {...register('phone', { required: true })}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="datetime-local"
              {...register('dateTime', { required: true })}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full p-3 bg-green-700 text-white rounded hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
