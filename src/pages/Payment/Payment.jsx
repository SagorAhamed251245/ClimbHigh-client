import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Payment = () => {
  const location = useLocation();
  const CartProducts = location.state;
  const { user } = useContext(AuthContext);
  const [address, setAddress] = useState("");
  const totalPrice = CartProducts.reduce(
    (total, product) => total + product.price,
    0
  );
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_Pk);
  return (
    <div className="text-white min-h-[91vh] flex flex-col md:flex-row w-full">
      <div className=" md:w-1/2 w-full flex flex-col  items-center ">
        <h1 className="text-3xl my-14">Payment Information</h1>
        <h1 className="text-xl text-start mb-5">Contact</h1>

        <input
          type="text"
          className="text-black w-[50%] p-3 font-bold my-4"
          value={user?.displayName}
          placeholder={user?.displayName}
        />
        <input
          type="text"
          className="text-black w-[50%] p-3 font-bold"
          value={user?.email}
          placeholder={user?.email}
        />
        <input
          type="text"
          className="text-black w-[50%] p-3 font-bold my-5"
          onBlur={(event) => setAddress(event.target.value)}
          placeholder="Shipping Address"
        />
      </div>
      {/* 2 */}
      <div className="mb-32 md:mb-0  md:w-1/2 w-full">
        <p className=" text-3xl bold my-14 text-center">
          Total Price: ${parseFloat(totalPrice).toFixed(2)}
        </p>
        <div className="w-[80%] mx-auto">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              CartProducts={CartProducts}
              address={address}
            ></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
