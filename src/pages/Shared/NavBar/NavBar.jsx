import { Link } from "react-router-dom";
import {
  BiSolidLogInCircle,
  BiSolidLogOutCircle,
  BiSolidCart,
} from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="md:w-[80%] w-full mx-auto">
      <div className="w-full text-white">
        {/* top nav start */}
        <div className="h-16 flex ">
          <div className="bg-[#051512]  h-16 w-1/2 md:w-4/5 flex justify-evenly md:justify-between items-center px-3">
            {/* logo */}
            <div>
              <p className="font-bold md:text-2xl text-xs">ClimbHigh</p>
            </div>
            {/* link */}
            <div className="flex gap-3 text-xs font-bold">
              <Link to={"/"}>Home</Link>
              <Link to={"/allproduct"}>All Product</Link>
            </div>
          </div>
          <div className=" bg-[#fffefe2d] w-1/2 md:w-1/5 text-black flex md:justify-end justify-evenly items-center md:pr-3 gap-3">
            {user?.email ? (
              <>
                <Link to={"/cart"}>
                  <BiSolidCart className="text-white text-2xl"></BiSolidCart>
                </Link>
                <Link>
                  <BiSolidLogOutCircle
                    onClick={logOut}
                    className="text-white text-2xl"
                  ></BiSolidLogOutCircle>
                </Link>
                <Link>
                  <div
                    className=""
                    data-te-toggle="tooltip"
                    title={user?.displayName}
                  >
                    <img
                      src={user?.photoURL}
                      className="h-10 w-10  rounded-full "
                      alt=""
                    />
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <BiSolidLogInCircle className="text-white text-2xl"></BiSolidLogInCircle>
                </Link>
              </>
            )}
          </div>
        </div>
        {/* top nav end */}
      </div>
    </div>
  );
};

export default NavBar;
