import React from "react";
import Banner from "../Banner/Banner";
import OurServices from "./OurServices/OurServices";
import Review from "./Review/Review";
import Doctors from "./Doctors/Doctors";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-10">
        <OurServices></OurServices>
        <Review></Review>
        <Doctors></Doctors>
        <Contact></Contact>
      </div>
      
    </div>
  );
};

export default Home;
