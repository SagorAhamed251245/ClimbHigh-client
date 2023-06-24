import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";

const Main = () => {
    return (
       <>
       <div className="sticky top-0 z-10">
       <NavBar></NavBar>
       </div>
       <Outlet></Outlet>
       </>
    );
};

export default Main;