import { useModal } from "../hook/useModal";
import * as z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import shipmentService from "../api";

const formSchema = z.object({
  name: z.string().min(3, { message: "Must be 3 or more characters" }),
  origin: z.string().min(3, { message: "Must be 3 or more characters" }),
  destination: z.string().min(3, { message: "Must be 3 or more characters" }),
  status: z.string().min(3, { message: "Must be 3 or more characters" }),
});

const ShipmentCreate = () => {
  const { isOpen, setClose } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      origin: "",
      destination: "",
      status: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    values: z.infer<typeof formSchema>
  ): Promise<void> => {
    try {
      const data = await shipmentService.createShipment(values);
      console.log("click", data);
      window.location.assign("/shipments");
    } catch (error) {}
  };

  return (
    <div
      className={
        !isOpen
          ? "hidden"
          : "flex items-start justify-center overflow-hidden flex-col-reverse xl:flex-row backdrop-blur-md bg-black/5 fixed top-16 w-full h-full"
      }
    >
      <div className="relative bg-black-100 px-8 pt-4 pb-0 bg-form rounded-2xl w-full h-auto md:w-[40%] md:h-[520px]  overflow-y-auto mt-20 bg-sky-200">
        <div className="relative w-full mb-6">
          <button
            className="absolute right-0 top-0 bg-sky-700 text-white "
            onClick={() => setClose()}
          >
            X
          </button>
        </div>
        <h3 className="text-3xl font-bold text-center text-sky-700 mb-2.5">
          New Shipment
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-4"
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
              onClick={() => console.log("click")}
              className="bg-tertiary py-2 px-8 outline-none w-fit text-white bg-sky-700 font-semibold shadow-md shadow-primary rounded-xl mt-7"
            >
              {isSubmitting ? "Creating..." : "Create"}
            </button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default ShipmentCreate;
