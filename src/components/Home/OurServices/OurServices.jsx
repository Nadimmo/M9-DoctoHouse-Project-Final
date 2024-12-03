import React from "react";
const OurServices = () => {
  return (
    <div className="lg:flex justify-around mt-28">
      <div>
        <img src='https://i.ibb.co.com/nP3DKn4/services.png' alt="" className="lg:h-[700px] lg:ml-20"/>
      </div>

      <div className="lg:ml-40">
        <div>
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-sm py-2 lg:w-[400px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        {/* tab in our services */}
        <div className="py-4 ">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-bold btn "
              aria-label="Cavity Protection"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 "
            >
              <div className="mt-5">
                    <img src='https://i.ibb.co.com/7XfQWfy/teeth.png' alt="" className="lg:w-[400px]"/>
                    <div className="lg:w-[400px] text-justify">
                        <h3 className="text-lg font-bold">Electro  Gastrology Therapy</h3>
                        <p className="text-sm py-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                        <button className="btn btn-outline text-[#F7A582] mt-4">View Details</button>
                    </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-bold btn "
              aria-label="Cosmetic Dentist"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100"
            >
             <div className="mt-5">
                    <img src='https://i.ibb.co.com/7XfQWfy/teeth.png' alt="" className="lg:w-[400px]"/>
                    <div className="lg:w-[400px] text-justify">
                        <h3 className="text-lg font-bold">Cosmetic Dentist</h3>
                        <p className="text-sm py-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                        <button className="btn btn-outline text-[#F7A582] mt-4">View Details</button>
                    </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-bold btn "
              aria-label="Oral Surgery"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 "
            >
              <div className="mt-5">
                    <img src='https://i.ibb.co.com/7XfQWfy/teeth.png' alt="" className="lg:w-[400px]"/>
                    <div className="lg:w-[400px] text-justify">
                        <h3 className="text-lg font-bold">Oral Surgery </h3>
                        <p className="text-sm py-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                        <button className="btn btn-outline text-[#F7A582] mt-4">More Details</button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
