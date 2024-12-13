import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useNewAppointment from "./../../Hooks/useNewAppointment";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const [transactionId, setTransactionId] = useState("");
  const [cartError, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { newAppointments } = useNewAppointment();
  const navigate = useNavigate()

  const totalPrice = newAppointments.reduce(
    (accumulator, appointment) => accumulator + parseFloat(appointment.price),
    0
  );

  // Create payment intent
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalPrice, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        name: user?.displayName || "Anonymous",
        email: user?.email || "anonymous",
      },
    });

    if (error) {
      setError(error.message);
      return;
    } else {
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        name: user?.displayName,
        price: totalPrice,
        date: new Date(),
        transactionId: paymentIntent.id,
        newAppointmentIds: newAppointments.map(appointment=> appointment._id ),
        status: "pending"
      };

      const res = await axiosSecure.post("/payments", payment);

      if (res.data?.paymentResult?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/dashboard/paymentHistory')
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Secure Checkout
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Complete your payment securely using your card details below.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#495057",
                  fontFamily: "Arial, sans-serif",
                  "::placeholder": {
                    color: "#6c757d",
                  },
                },
                invalid: {
                  color: "#dc3545",
                },
              },
            }}
            className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Pay ${totalPrice.toFixed(2)}
        </button>
      </form>
      {cartError && <p className="mt-4 text-red-600">{cartError}</p>}
      {transactionId && (
        <p className="mt-4 text-green-600">
          Payment Successful! Transaction ID: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
