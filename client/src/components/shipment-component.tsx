import { Trash } from "lucide-react";
import { Link } from "react-router-dom";
import shipmentService from "../services";

const ShipmentComponent = ({
  id,
  name,
  origin,
  destination,
  timestamp,
  status = "received",
}: {
  id: string;
  name: string;
  origin: string;
  destination: string;
  timestamp?: number;
  status: string;
}) => {
  const deleteShipment = async () => {
    await shipmentService.deleteShipment(id);
    window.location.reload();
  };

  return (
    <div className="grid grid-cols-12 w-full px-4 text-sky-900 py-3 border border-sky-500 shadow-lg transition-all">
      <h3 className="col-span-2">{name}</h3>
      <h3 className="col-span-2">{origin}</h3>
      <h3 className="col-span-2">{destination}</h3>
      <h3
        className={
          `${status}` === "received"
            ? "text-blue-600 col-span-2 capitalize"
            : `${status}` === "pending"
            ? "text-red-600 col-span-2 capitalize"
            : "text-green-600 col-span-2 capitalize"
        }
      >
        {status}
      </h3>
      <h3 className="col-span-2">{timestamp}</h3>
      <div className="flex items-center col-span-2 justify-end  gap-2">
        <Link
          className="  text-sky-900  hover:text-sky-400 hover:underline cursor-pointer"
          to={`/shipments/${id}`}
        >
          View
        </Link>
        <Link
          className="  text-sky-900  hover:text-sky-400 hover:underline cursor-pointer"
          to={`/shipments/edit/${id}`}
        >
          Edit
        </Link>
        <Trash
          className="h-5 w-5  text-red-600 hover:text-red-400 hover:underline cursor-pointer"
          onClick={deleteShipment}
        />
      </div>
    </div>
  );
};

export default ShipmentComponent;
