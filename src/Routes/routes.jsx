import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/REgister";
import Login from "../pages/Login/Login";
import CartProduct from "../pages/CartProduct/CartProduct";
import Payment from "../pages/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path:'cart',
        element: <CartProduct></CartProduct>

      },
      {
        path: "cart/payment",
        element: <Payment></Payment>
      }
    ],
  },
]);

export default router;
