import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const ErrorPage = () => {
  return (
    <div>
      <div className="hero back min-h-screen">
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <p className="text-2xl text-white mt-40 font-bold mx-auto">
              Back to
              <Link to={"/"}>
                <span className="text-[#F7A582] "> Home</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
