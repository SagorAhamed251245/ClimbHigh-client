import React from "react";
import Container from "../../../components/Container/Container";

const NavBar = () => {
  return (
    <Container>
      <div className="w-full" >
        {/* top nav start */}
        <div className="h-16 flex relative">
          <div className="bg-white h-16 w-4/5"></div>
          <div className="bg-white opacity-10 w-1/5"></div>
        </div>
        {/* top nav end */}
        {/* bottom nav */}
        <div className="h-16 flex ">
          <div className="w-4/5 bg-[#602101]"></div>
          <div className="bg-white w-1/5">hi</div>
        </div>
        {/* bottom nav end */}
      </div>
    </Container>
  );
};

export default NavBar;
