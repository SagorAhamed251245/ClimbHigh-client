import Container from "../../../components/Container/Container";
import { Link } from "react-router-dom";
import { BiSolidLogInCircle, BiSolidLogOutCircle, BiSolidUser , BiSolidCart} from "react-icons/bi";

const NavBar = () => {
  return (
    <Container>
      <div className="w-full text-white">
        {/* top nav start */}
        <div className="h-16 flex ">
          <div className="bg-[#051512]  h-16 w-4/5 flex  justify-between items-center px-3">
            {/* logo */}
            <div>
              <p>Logo</p>
            </div>
            {/* link */}
            <div className="flex gap-3 text-xs font-bold">
              <Link>Home</Link>
              <Link>All Product</Link>
              <Link>Backpack</Link>
              <Link>Climbing Accessories</Link>
            </div>
          </div>
          <div className=" bg-[#fffefe2d]  w-1/5 text-black flex justify-end items-center pr-3 gap-3">
            <Link>
              <BiSolidCart className="text-white text-2xl"></BiSolidCart>
            </Link>
            <Link>
              <BiSolidUser className="text-white text-2xl"></BiSolidUser>
            </Link>
            <Link>
              <BiSolidLogOutCircle className="text-white text-2xl"></BiSolidLogOutCircle>
            </Link>
            <Link to='/login'>
              <BiSolidLogInCircle className="text-white text-2xl"></BiSolidLogInCircle>
            </Link>
            
          </div>
        </div>
        {/* top nav end */}
      </div>
    </Container>
  );
};

export default NavBar;
