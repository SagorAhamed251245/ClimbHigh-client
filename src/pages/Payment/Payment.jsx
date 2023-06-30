import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation()
  const CartProducts = location.state
 
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_Pk);
  return (
    <div className="text-white min-h-[91vh]">
      <div>
        <h1>Information</h1>
      </div>
      {/* 2 */}
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm CartProducts={CartProducts}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
