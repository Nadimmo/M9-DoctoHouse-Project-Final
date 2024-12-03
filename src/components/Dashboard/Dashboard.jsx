import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const { isAdmin } = useAdmin();

  const navLinkStyle =
    "block lg:text-lg px-4 py-3 font-medium rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-teal-600 hover:text-white";

  const activeLinkStyle = "bg-teal-500 text-white";

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="lg:w-72 min-h-screen p-6 bg-gradient-to-r from-pink-400 to-orange-300 text-black shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Dashboard</h2>
        <ul className="space-y-4">
          {isAdmin ? (
            <>
              {/* Admin Dashboard Links */}
              <li>
                <NavLink
                  to="/dashboard/users"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeLinkStyle : ""}`
                  }
                >
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/doctor"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeLinkStyle : ""}`
                  }
                >
                  Add Doctors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageDoctor"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeLinkStyle : ""}`
                  }
                >
                  Manage Doctors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/request"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeLinkStyle : ""}`
                  }
                >
                  Request User
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeLinkStyle : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* User Dashboard Links */}
              <li>
                <NavLink
                  to="/dashboard/review"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeLinkStyle : ""}`
                  }
                >
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/appointment"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeLinkStyle : ""}`
                  }
                >
                  My Appointment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeLinkStyle : ""}`
                  }
                >
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${navLinkStyle} ${isActive ? activeLinkStyle : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
