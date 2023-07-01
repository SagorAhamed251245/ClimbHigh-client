
import { useContext } from "react";

import { Navigate } from "react-router";

import { AuthContext } from "../../provider/AuthProvider";
import LoadingPage from "../../pages/Shared/LoadingPage/LoadingPage";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login"  replace></Navigate>
};

export default PrivateRoute;