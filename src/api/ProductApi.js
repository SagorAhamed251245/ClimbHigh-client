import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";

const ProductApi = () => {
    const {  loading } = useContext(AuthContext);
    

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: products = [] } = useQuery({
        queryKey: ['allUsers'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/product`)
           
            return res.data;
        },
    })

    return [products, refetch]
};

export default ProductApi;