import React from "react";
import './style.css'

const Banner = () => {
  return (
    <div className="background p-6">
      <div className=" lg:flex justify-around">
        <div className="lg:mt-40 lg;w-[70%]">
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Your Best Medical Help Center
          </h2>
          <p className="text-sm py-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis a
            ducimus dolorum voluptate minima veniam laudantium.
          </p>
          <button className="btn btn-info my-2">Visite</button>
        </div>
        <div>
        <img src='https://i.ibb.co.com/zrPKbjx/Group-34991.png' alt="" />
      </div>
      </div>
     
    </div>
  );
};

export default Banner;
