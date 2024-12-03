import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img3 from '../../../assets/Group 17.png'

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import useReviews from "../../Hooks/useReviews";

const Review = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const { reviews } = useReviews();
  // console.log(reviews)

  return (
    <div>
      <div className="text-center mt-20">
        <h3 className="text-4xl font-bold">What Our Patients Says</h3>
        <p className="text-sm lg:w-[50%] text-justify lg:text-center mt-4 mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="mt-5 my-10">
        <Swiper
          slidesPerView={1} // Default for larger screens
          centeredSlides={true}
          spaceBetween={30}
          className="mySwiper w-[100%] lg:w-[80%]"
        >
          {
            reviews.map(review =><>
            <SwiperSlide key={review._id} className="rounded-xl border-2 p-4">
              <div key={review._id} >
                <div className="lg:flex justify-between">
                  <div className="lg:flex">
                    <img
                      src={review.image}
                      alt="loading..."
                      className="mx-auto w-60 h-60 rounded-[50%] border-2"
                    />
                    <div className="ml-5 text-center lg:text-left">
                      <h3 className="text-lg  font-bold">{review.userName} </h3>
                      <span className="text-sm ">{review.work}</span>
                    </div>
                  </div>
                  <img src={img3} alt="" className="lg:ml-5 mx-auto lg:mx-0 justify-end" />
                </div>

                <p className="text-sm mt-4 opacity-[.7] text-justify">
                  {review.review}
                </p>
              </div>
            </SwiperSlide>;
            </>)
          }




        </Swiper>
      </div>
    </div>
  );
};

export default Review;
