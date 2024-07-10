import { useLocation, useNavigate } from "react-router-dom";
import MaxWidthWrapper from "./max-width-wrapper";

import { useModal } from "../hook/useModal";

const Navbar = () => {
  const { setOpen } = useModal();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log(pathname);

  return (
    <nav className="h-20 py-4 w-full bg-sky-700 ">
      <MaxWidthWrapper className={""}>
        <div className="h-full flex items-center">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-3xl tracking-tighter font-semibold text-white italic font-sans cursor-pointer">
              Logistiks
              <button className="not-italic pointer-events-none  text-3xl pl-0.5 font-semibold text-sky-900 bg-sky-300 pb-0.5 border-2 pr-2 font-sans leading-9 opacity-75 rounded-md text-center py-0">
                PLUS
              </button>
            </h3>
            <div className="flex space-x-3 ">
              {!pathname.includes("/shipments") && (
                <button
                  className="border-white bg-transparent border text-white hover:text-sky-300"
                  onClick={() => navigate("/shipments")}
                >
                  Demo
                </button>
              )}
              {(pathname === "/shipments" ||
                pathname.includes("/shipments")) && (
                <button
                  className="border-white bg-transparent border text-white hover:text-sky-300"
                  onClick={setOpen}
                >
                  Create New Shipment
                </button>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
