import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import useNewAppointment from "./../../Hooks/useNewAppointment";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()
  const [transactionId, setTransactionId] = useState("")
  const [cartError, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { newAppointments } = useNewAppointment();
  const totalPrice = newAppointments.reduce(
    (accumulator, price) => accumulator + parseFloat(price.price),
    0
  );
// console.log(clientSecret)
  //create payment intent
  //   useEffect(()=>{
  //     fetch('/create-payment-intent',{
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: json.stringify(totalPrice)
  //     })
  //     .then(res =>{
  //         res.json()
  //     })
  //     .then((data)=>{
  //         setClientSecret(data.clientSecret)
  //     })
  //   },[])
//create payment intent
  useEffect(() => {
    if (totalPrice > 0) {
      axiosPublic.post("/create-payment-intent", {price: totalPrice }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [totalPrice,axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
    //   console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    //create payment intent
    const {paymentIntent, error: cartError} = await stripe.confirmCardPayment(
        clientSecret,{
            payment_method:{
                card: card,
                billing_details:{
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        }
      )

      //send data in database 
    if (cartError) {
        console.log("error", cartError);
      } else {
        if (paymentIntent.status === "succeeded") {
          setTransactionId(paymentIntent.id);
  
          const payment = {
            email: user.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
          };
  
          const res = await axiosPublic.post("/payments", payment);
          console.log(res.data)
  
          if (res.data?.paymentResult?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Payment Successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      }


  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <p className="text-lg bg-red-500">{cartError}</p>
      <p className="text-lg bg-green-500">{transactionId}</p>
    </div>
  );
};

export default CheckoutForm;
