import { AxiosResponse } from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import * as z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import shipmentService from "../services";

const formSchema = z.object({
  name: z.string().min(3, { message: "Must be 3 or more characters" }),
  origin: z.string().min(3, { message: "Must be 3 or more characters" }),
  destination: z.string().min(3, { message: "Must be 3 or more characters" }),
  status: z.string().min(3, { message: "Must be 3 or more characters" }),
});

const ShipmentEdit = () => {
  const loadedData = useLoaderData();
  const { data } = loadedData as AxiosResponse;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data.name,
      origin: data.origin,
      destination: data.destination,
      status: data.status,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    values: z.infer<typeof formSchema>
  ): Promise<void> => {
    try {
      await shipmentService.updateShipment(data._id, values);
      navigate("/shipments");
    } catch (error) {}
  };

  return (
    <div className="w-full">
      <div className=" bg-black-100 p-10 rounded-2xl w-[500px] overflow-y-auto mt-20 bg-sky-200">
        <h3 className="text-3xl font-bold text-center text-sky-700 mb-2.5">
          Edit Shipment
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-4 w-full"
        >
          <label className="flex flex-col">
            <span className="text-sky-950 font-medium mb-2">Item Name</span>
            <input
              {...register("name")}
              className="bg-tertiary py-3 px-4 placeholder:text-sky-700 text-sky-900 rounded-lg outline-none border-none font-medium"
            />
            {errors.name?.message && (
              <p className="text-red-400">{errors.name?.message}</p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-sky-950 font-medium mb-2">Origin</span>
            <input
              {...register("origin")}
              className="bg-tertiary py-3 px-4 placeholder:text-sky-700 text-sky-900 rounded-lg outline-none border-none font-medium"
            />
            {errors.origin?.message && (
              <p className="text-red-400">{errors.origin?.message}</p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-sky-950 font-medium mb-2">Destination</span>
            <input
              {...register("destination")}
              className="bg-tertiary py-3 px-4 placeholder:text-sky-700 text-sky-900 rounded-lg outline-none border-none font-medium"
            />
            {errors.destination?.message && (
              <p className="text-red-400">{errors.destination?.message}</p>
            )}
          </label>
          <div className="flex items-center justify-between">
            {" "}
            <label className="flex flex-col">
              <span className="text-sky-950 font-medium mb-2">Status</span>
              <select
                {...register("status")}
                className="bg-tertiary py-3 px-4 placeholder:text-sky-700 text-sky-900 rounded-lg outline-none border-none font-medium min-w-[200px]"
              >
                <option value="received">Received</option>
                <option value="pending">Pending</option>
                <option value="delivered">Delivered</option>
              </select>
            </label>
            <button
              type="submit"
              className="bg-tertiary py-2 px-8 outline-none w-fit text-white bg-sky-700 font-semibold shadow-md shadow-primary rounded-xl mt-7"
            >
              {isSubmitting ? "Editing..." : "Edit"}
            </button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default ShipmentEdit;
