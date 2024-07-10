import {
  createBrowserRouter,
  LoaderFunction,
  LoaderFunctionArgs,
} from "react-router-dom";
import RootLayoot from "./layout/root";
import ErrorPage from "./pages/error";
import ShipmentHome from "./pages/shipment-home";
import shipmentService from "./services";
import ShipmentDetails from "./pages/shipment-details";
import Login from "./pages/login";
import ShipmentLayout from "./layout/shipmentLayout";
import ShipmentEdit from "./pages/shipment-edit";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/shipments",
    element: <ShipmentLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ShipmentHome />,
        loader: async () => await shipmentService.getAllShipments(),
      },

      {
        path: ":id",
        element: <ShipmentDetails />,
        loader: async ({
          params,
        }: LoaderFunctionArgs<{ id: string }>): Promise<
          LoaderFunction<{ id: string }> | undefined
        > => {
          const id = params.id;
          console.log("idid", id);

          if (id) {
            return await shipmentService.getShipmentDetail(id);
          }
          throw new Error("Invalid");
        },
      },
      {
        path: "edit/:id",
        element: <ShipmentEdit />,
        loader: async ({
          params,
        }: LoaderFunctionArgs<{ id: string }>): Promise<
          LoaderFunction<{ id: string }> | undefined
        > => {
          const id = params.id;
          console.log("idid", id);

          if (id) {
            return await shipmentService.getShipmentDetail(id);
          }
          throw new Error("Invalid");
        },
      },
    ],
  },
]);
