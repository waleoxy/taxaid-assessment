import { AxiosResponse } from "axios";
import { useLoaderData } from "react-router-dom";
import ShipmentComponent from "../components/shipment-component";
import { Key } from "react";
import { useModal } from "../hook/useModal";

const ShipmentHome = () => {
  const loadedData = useLoaderData();
  const { data } = loadedData as AxiosResponse;

  const { setOpen } = useModal();

  return (
    <div className="">
      <h3 className="text-sky-800 text-3xl font-bold leading-10 text-left w-full pt-6">
        All Shipments
      </h3>
      <div className="w-full h-fit pb-6 flex flex-col gap-4 mt-3 bg-sky-100 overflow-hidden shadow-md border-sky-950/10 border-2 rounded-md ">
        <div className="w-full grid grid-cols-12 text-lg font-normal text-sky-950 border bg-sky-300 pl-2 py-4 pr-0 ">
          <h3 className="col-span-2">Items Name</h3>
          <h3 className="col-span-2">Origin</h3>
          <h3 className="col-span-2">Destination</h3>
          <h3 className="col-span-2">Status</h3>
          <h3 className="col-span-2 ">Timestamp</h3>
          <h3 className="col-span-2 "></h3>
        </div>
        {data.length > 0 ? (
          data.map(
            (
              dt: {
                _id: string;
                name: string;
                origin: string;
                destination: string;
                timestamp: number | undefined;
                status: string;
              },
              i: Key | null | undefined
            ) => (
              <ShipmentComponent
                key={i}
                id={dt._id}
                name={dt.name}
                origin={dt.origin}
                destination={dt.destination}
                timestamp={dt.timestamp}
                status={dt.status}
              />
            )
          )
        ) : (
          <>
            <div className="w-screen flex flex-col text-lg font-normal text-sky-900 border items-start border-sky-500 shadow-lg  pl-2 py-4 pr-0 ">
              <p className="w-full">No item in the list. Create shipment!</p>
            </div>{" "}
            <button
              className="border-white w-[50%] mx-auto  bg-sky-700 border text-white hover:text-sky-300 mt-12"
              onClick={setOpen}
            >
              Create New Shipment
            </button>
          </>
        )}
        <button
          className="border-white w-[50%] mx-auto  bg-sky-700 border text-white hover:text-sky-300 mt-8 h-14"
          onClick={setOpen}
        >
          Create New Shipment
        </button>
      </div>
    </div>
  );
};

export default ShipmentHome;
