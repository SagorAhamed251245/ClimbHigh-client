import { useEffect, useRef, useState } from "react";
import { getProductsFromLocalStorage } from "../../api/LocalStorage";
import ProductApi from "../../api/ProductApi";
// import { FindUsers } from "../../api/userApi";

// import useAxiosSecure from "../../api/useAxiosSecure";
import { Link } from "react-router-dom";

const CartProduct = () => {
  const localProduct = getProductsFromLocalStorage();
  const [CartProducts, setCartProducts] = useState([]);
  const [products] = ProductApi();
  // const [FindUser] = FindUsers();
  // const [axiosSecure] = useAxiosSecure();

  const prevCartProductsRef = useRef([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      localProduct.some((localProd) => localProd.id === product._id)
    );

    // Compare with the previous value of CartProducts
    if (!arraysEqual(filteredProducts, prevCartProductsRef.current)) {
      setCartProducts(filteredProducts);
      prevCartProductsRef.current = filteredProducts;
    }
  }, [localProduct, products]);

  // Helper function to compare two arrays for equality
  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  
  /* 
const order = [
    {
      item_name: ,

      unit_price: ,
      quantity: ,
      address: ,
      transaction_id: 
    }] */

  return (
    <div className=" min-h-[100vh] h-auto   ">
      <div className="">
        {CartProducts.map((item) => (
          <div
            key={item._id}
            className="h-48 my-5 bg-red-500 w-1/2 mx-auto border flex"
          >
            <div className="h-36 w-24  my-auto flex">
              <img src={item.img} className="object-cover" alt="" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>color:{item.color}</p>
              <p>Quantity: 1</p>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to="/cart/payment" state={CartProducts}>
          <button className="bg-yellow-900 text-white p-5">
            Proceed Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartProduct;
