import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import MaxWidthWrapper from "../components/max-width-wrapper";

const RootLayoot = () => {
  return (
    <div className="w-full h-screen bg-no-repeat bg-[url('/logistiks.jpg')]">
      {" "}
      <Navbar />
      <MaxWidthWrapper className="h-full flex items-center ">
        <Outlet />
      </MaxWidthWrapper>
    </div>
  );
};

export default RootLayoot;
