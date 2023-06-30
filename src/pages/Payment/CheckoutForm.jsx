import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../api/useAxiosSecure";
import { FindUsers } from "../../api/userApi";
import axios from "axios";
import { removeProductFromLocalStorage } from "../../api/LocalStorage";

const CheckoutForm = ({ CartProducts }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [FindUser] = FindUsers();
  //   const navigate = useNavigate();
  console.log(CartProducts);
  const price = 10;
  useEffect(() => {
    const totalPrice = CartProducts.reduce(
      (total, product) => total + product.price,
      0
    );

    console.log(totalPrice);
    if (price > 0) {
      axios
        .post(`${import.meta.env.VITE_apiUrl}/payment`, { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
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
        order_item: CartProducts.map(({ _id, name, price, color }) => ({
          item_name: name,
          product_id: _id,
          unit_price: price,
          quantity: 1,
          color: color,
        })),
        address: "my home",
        transaction_id: paymentIntent.id,
      };
      axiosSecure
        .post(`/order`, orderInfo)
        .then((response) => {
          console.log(response);
          removeProductFromLocalStorage()
        })
        .catch((error) => {
          console.log(error);
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
        <div className="w-full flex justify-center mt-5">
          <button
            type="submit"
            className="bg-pink-500 border-black text-white rounded-lg w-36 p-2 mt-5 "
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
