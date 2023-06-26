import Container from "../../../components/Container/Container";
import { Link } from "react-router-dom";

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
              <Link>Climbing  Accessories</Link>
            </div>
          </div>
          <div className="bg-white opacity-10 w-1/5"></div>
        </div>
        {/* top nav end */}
      </div>
    </Container>
  );
};

export default NavBar;
