import { AxiosResponse } from "axios";
import { useLoaderData } from "react-router-dom";

const ShipmentDetails = () => {
  const loadedData = useLoaderData();
  const { data } = loadedData as AxiosResponse;

  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="text-sky-800 text-3xl font-bold leading-10 text-left py-6 ">
        Shipment Details
      </h3>
      <div className="flex w-full gap-x-12 items-start text-sky-800 ">
        <div className="min-w-[350px] h-60 border border-sky-500">
          {" "}
          <img
            src=""
            alt="Item pix"
            className="h-full w-full p-6 bg-teal-200"
          />
        </div>
        <div className=" flex flex-col capitalize">
          {" "}
          <p className="capitalize">
            <strong>Name: {data.name}</strong>
          </p>
          <p className="capitalize">
            <strong>Orign: {data.origin}</strong>
          </p>
          <p className="capitalize">
            <strong>Detination: {data.destination}</strong>
          </p>
          <p className="capitalize">
            <strong>Status: {data.status}</strong>
          </p>
          <p className="capitalize">
            <strong>Timestamp: {data.timestamp}</strong>
          </p>
          <p className="">
            <strong>
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Omnis hic ipsa expedita sit delectus, modi exercitationem
              itaque consectetur voluptates veniam illo dolorem consequatur
              natus esse illum a repellendus doloribus enim.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
