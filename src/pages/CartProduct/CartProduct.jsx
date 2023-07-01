import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import ProductApi from "../../api/productApi";
import { getProductsFromLocalStorage } from "../../api/LocalStorage";


const CartProduct = () => {
  const localProduct = getProductsFromLocalStorage();
  const [CartProducts, setCartProducts] = useState([]);
  const [products] = ProductApi();
 

  const prevCartProductsRef = useRef([]);
  console.log(localProduct);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      localProduct.some((localProd) => localProd.id === product._id)
    );

    if (!arraysEqual(filteredProducts, prevCartProductsRef.current)) {
      setCartProducts(filteredProducts);
      prevCartProductsRef.current = filteredProducts;
    }
  }, [localProduct, products]);

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

  return (
    <div
      className={`${
        localProduct.length < 1 ? "hidden" : ""
      } min-h-[100vh] h-auto`}
    >
      <div className="">
        {CartProducts.map((item) => (
          <div key={item._id} className="h-48 my-5  w-1/2 mx-auto border flex">
            <div className="h-36 w-24  my-auto flex  p-3">
              <img src={item.img} className="object-cover" alt="" />
            </div>
            <div className="mt-6 ml-5 font-bold text-white">
              <p>{item.name}</p>
              <p>color:{item.color}</p>
              <p>Quantity: 1</p>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={`${CartProducts.length === 0 ? "hidden" : ""}w-[80%] mx-auto flex justify-end`}>
        <Link to="/cart/payment" state={CartProducts}>
          <button className="bg-white text-black  p-3 font-bold ">
            Proceed Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartProduct;
