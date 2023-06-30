export const addProductToLocalStorage = (product) => {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
};

export const getProductsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("products")) || [];
};

export const removeProductFromLocalStorage = () => {
  localStorage.removeItem('products')
};
