import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const { isAdmin } = useAdmin();

  const img1 = "https://i.ibb.co.com/jHYkrRB/Group-2.png"; // Replace this URL with the correct image URL
  const Links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/appointment"}>Appointment</NavLink>
      </li>
      <li>
        <NavLink to={"/reviews"}>Review</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink to={"/dashboard/users"}>Dashboard</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to={"/dashboard/appointment"}>Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-md"
          >
            {Links}
          </ul>
        </div>
        <Link to={"/"}>
          <img src={img1} alt="Logo" className="bg-black w-40" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <p className="text-sm font-bold mr-4 text-[#F7A582]">{user.displayName}</p>
            <button onClick={LogOut} className="btn text-[#F7A582] btn-outline">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
