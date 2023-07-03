import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";
import { FindUsers } from "./userApi";

const OrderApi = () => {
  const { loading } = useContext(AuthContext);

  const [FindUser] = FindUsers();
  

  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: payments = [] } = useQuery({
    queryKey: ["paymentHistory"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/userorders/${FindUser._id}`);

      return res.data;
    },
  });

  return [payments, refetch];
};

export default OrderApi;
