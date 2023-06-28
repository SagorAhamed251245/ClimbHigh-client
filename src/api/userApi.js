import axios from "axios";

export const setUser = (user) => {
  const User = {
    email: user.email,
    name: user.displayName,
  };

  axios
    .post(`${import.meta.env.VITE_apiUrl}/singup`, User )
    .then(response => {
    
    })
    .catch(error => {
      console.log(error);
    });
};

