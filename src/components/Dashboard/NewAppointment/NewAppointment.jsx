import useNewAppointment from "../../Hooks/useNewAppointment";

const NewAppointment = () => {
  const { newAppointments } = useNewAppointment();
  const totalPrice = newAppointments.reduce((accumulator,price) => accumulator + parseFloat(price.price) ,0)
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="lg:flex justify-between">
      <h1 className="text-2xl font-bold text-left text-gray-800 mb-4">
        My Appointments: {newAppointments.length}
      </h1>
      <h1 className="text-2xl font-bold text-left text-gray-800 mb-4">
        Total Price: $ {totalPrice}
      </h1>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
        <table className="table-auto w-full">
          {/* Table Header */}
          <thead className="bg-teal-500 text-white text-lg">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Treatment</th>
              <th className="px-4 py-3 text-left">Payment</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {newAppointments.length > 0 ? (
              newAppointments.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                  <td className="px-4 py-3 text-gray-700">{item.name}</td>
                  <td className="px-4 py-3 text-gray-700">{item.date}</td>
                  <td className="px-4 py-3 text-gray-700">{item.time}</td>
                  <td className="px-4 py-3 text-gray-700">{item.service}</td>
                  <td className="px-4 py-3">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                      Pay
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-6 text-center text-gray-500 italic"
                >
                  No Appointments Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewAppointment;
