import React from 'react'
import usePaymentHistory from './../../Hooks/usePaymentHistory';

const PaymentHistory = () => {
  const { payments } = usePaymentHistory()
  // console.log(payments)
  return (
      <div className="p-6 bg-gray-100 min-h-screen">
          <div className="lg:flex justify-start">
          <h1 className="text-2xl font-bold text-left text-gray-800 mb-4">
            My Payments: {payments.length}
          </h1>
         
          </div>
          <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
            <table className="table-auto w-full">
              {/* Table Header */}
              <thead className="bg-teal-500 text-white text-lg">
                <tr>
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Date&Time</th>
                  <th className="px-4 py-3 text-left">TransactionId</th>
                </tr>
              </thead>
    
              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {payments.length > 0 ? (
                  payments.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                      <td className="px-4 py-3 text-gray-700">{item.name || "User"}</td>
                      <td className="px-4 py-3 text-gray-700">{item.email}</td>
                      <td className="px-4 py-3 text-gray-700">{item.date}</td>
                      <td className="px-4 py-3 text-gray-700">{item.transactionId}</td>
                    
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-4 py-6 text-center text-gray-500 italic"
                    >
                      No PaymentHistory Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default PaymentHistory