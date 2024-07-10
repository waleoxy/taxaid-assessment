import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import MaxWidthWrapper from "../components/max-width-wrapper";
import ShipmentCreate from "../modals";

const ShipmentLayout = () => {
  return (
    <div className="w-full flex flex-col h-screen">
      {" "}
      <Navbar />
      <div className="overflow-x-auto">
        {" "}
        <MaxWidthWrapper className="relative h-full flex flex-col ">
          <Outlet />
          <div className="w-full flex justify-center items-center">
            <ShipmentCreate />
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default ShipmentLayout;
