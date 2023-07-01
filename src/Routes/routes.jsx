import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/REgister";
import Login from "../pages/Login/Login";
import CartProduct from "../pages/CartProduct/CartProduct";
import Payment from "../pages/Payment/Payment";
import AllProducts from "../pages/AllProducts/AllProducts";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main></Main>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
     
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <CartProduct></CartProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "cart/payment",
        element: <Payment></Payment>,
      },
      {
        path: "allproduct",
        element: <AllProducts></AllProducts>,
      },
    ],
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);

export default router;
