import { FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import useDoctors from "../../Hooks/useDoctors";
import { key } from "localforage";


const Doctors = () => {
  const {doctor} = useDoctors()
  


  return (
    <div className="lg:mx-20">
      <div className="text-center mt-32">
        <h3 className="text-4xl font-bold">Our Expert Doctors</h3>
        <p className="text-sm lg:w-[50%] text-justify lg:text-center mt-4 mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="lg:grid grid-cols-3 gap-5 mt-20">

        {doctor.map(item => <>
          <div key={item._id} className="card bg-base-100 w-80- shadow-xl my-5">
          <figure>
            <img
              src={item.image}
              alt="loading..."
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{item.doctor_Name}</h2>
            <p className="text-sm opacity-[0.6]">
             {item.specialty}
            </p>
            <div className="mt-6 opacity-[0.6]">
              <div className="flex justify-between">
                <span>
                  <MdLocationPin></MdLocationPin>
                </span>
                <p className="text-sm ml-2">{item.location}</p>
              </div>
              <div className="flex justify-between mt-2">
                <span>
                  <FaCalendarAlt></FaCalendarAlt>
                </span>
                <p className="text-sm ml-2">{item.date}</p>
              </div>
              <div className="mt-2 flex">
                <span className="mt-[6px]">
                  <FaDollarSign></FaDollarSign>
                </span>
                <p className="text-lg ml-2 font-bold">{item.price}</p>

              </div>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-outline w-full mt-5 text-[#F7A582] hover:bg-[#F7A582] hover:border-none ">
                View Profile
              </button>
            </div>
          </div>
        </div>
        </>)}


        

      
       
      </div>
    </div>
  );
};

export default Doctors;
