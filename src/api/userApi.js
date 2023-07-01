import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export const setUser = (user) => {
  const User = {
    email: user.email,
    name: user.displayName,
  };

  axios
    .post(`${import.meta.env.VITE_apiUrl}/singup`, User)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });
};

export const FindUsers = () => {
  const { loading, user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: FindUser = [] } = useQuery({
    queryKey: ["user"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/profile/${user?.email}`);
      return res.data;
    },
  });
  return [FindUser, refetch];
 
};
