import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import img from "../../assets/chair 1.png";
import axios from "axios";
import AppForm from "./AppForm";
import useAppointment from "../Hooks/useAppointment";

const Appointment = () => {
  const { appointments } = useAppointment();
  const [value, onChange] = useState(new Date());
  const [selectedAppointment, setSelectedAppointment] = useState(null); // State to hold selected appointment

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment); // Set the clicked appointment data
    document.getElementById("my_modal_5").showModal(); // Open the modal
  };

  return (
    <div>
      {/* Banner */}
      <div className="hero bg-[#07332F] text-white h-[400px]">
        <div className="hero-content text-center">
          <div className="max-w-md text-left">
            <h1 className="text-4xl font-bold">Appointment</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="mx-10 lg:mx-32 mt-20 lg:flex justify-between">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Calendar
            className="rounded-xl border-2 shadow-lg mt-10"
            onChange={onChange}
            value={value}
          />
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img src={img} alt="Chair" className="w-[100%] my-5 lg:my-0" />
        </div>
      </div>

      {/* Services */}
      <div className="mt-20 my-10 mx-10 lg:mx-32">
        <div className="text-center">
          <p className="text-sm text-[#F7A582] py-2">
            Available Services on {value.toLocaleDateString()} {/* Show selected date */}
          </p>
          <h3 className="text-2xl font-bold">Please select a service.</h3>
        </div>

        {/* Service Cards */}
        <div className="lg:grid grid-cols-3 gap-5 mt-10 hover:cursor-pointer">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              onClick={() => handleAppointmentClick(appointment)} // Pass clicked appointment data
            >
              <div className="flex border-2 rounded-xl shadow-lg p-4 my-2">
                <img
                  src={appointment.image}
                  alt="Service icon"
                  className="bg-[#FD9BA1] p-2 rounded-xl"
                />
                <h3 className="text-xl font-bold ml-3 mt-3">{appointment.service}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            {/* Pass selected appointment data to AppForm */}
            <AppForm appointment={selectedAppointment} />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Appointment;
