import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../api/useAxiosSecure";
import { FindUsers } from "../../api/userApi";

import { removeProductFromLocalStorage } from "../../api/LocalStorage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const CheckoutForm = ({ CartProducts}) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [FindUser] = FindUsers();
    const navigate = useNavigate();
  
  const price = 10;
  useEffect(() => {
    const totalPrice = CartProducts.reduce(
      (total, product) => total + product.price,
      0
    );

    if (price > 0) {
      axiosSecure
        .post(`${import.meta.env.VITE_apiUrl}/payment`, { price: totalPrice })
        .then((res) => {
          
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price, axiosSecure, CartProducts]);

  const handleSubmit = async (event) => {
    if (!stripe || !elements) {
      return;
    }
    event.preventDefault();
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    console.log("cart", card);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
     

      const orderInfo = {
        user_id: FindUser._id,
        order_item: CartProducts.map(({ _id, name, color }) => ({
          item_name: name,
          product_id: _id,
         
          quantity: 1,
          color: color,
        })),
        address: 'sss',
        transaction_id: paymentIntent.id,
      };
      axiosSecure
        .post(`/order`, orderInfo)
        .then((response) => {
          toast.success('payment success.')
          navigate('/')
          removeProductFromLocalStorage()
          
        })
        .catch((error) => {
          console.log(error);
          toast.success('payment success.')
          navigate('/')
          removeProductFromLocalStorage()
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: { 
                
                fontSize: "26px",
                color: "#ffff",
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
        <div className="w-full flex justify-center mt-5">
          <button
            type="submit"
            className="bg-white border-black text-black font-bold rounded-lg w-36 p-2 mt-5 "
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
