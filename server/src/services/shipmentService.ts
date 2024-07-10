import { IShipment } from "../interfaces/shipment.interface";
import Shipment from "../models/shipment";
import { IShipmentModel } from "../models/shipment";
import { ShipmentNotFoundError } from "../utils/shipmentNotFound";

async function getAllShipmentService(): Promise<IShipmentModel[] | undefined> {
  try {
    const allShipments = await Shipment.find();
    if (allShipments) return allShipments;
    throw new ShipmentNotFoundError("No Item in the list");
  } catch (error) {
    throw error;
  }
}

async function getShipmentDetailService(id: string): Promise<IShipmentModel> {
  try {
    const shipment = await Shipment.findById({ _id: id });
    if (shipment) return shipment;
    throw new ShipmentNotFoundError("No Item in the list");
  } catch (error) {
    throw error;
  }
}

async function createShipmentService(body: IShipment): Promise<IShipmentModel> {
  try {
    const shipment = new Shipment(body);
    await shipment.save();
    return shipment;
  } catch (error) {
    throw error;
  }
}

async function updateShipmentService(
  id: string,
  body: IShipment
): Promise<IShipmentModel> {
  try {
    const shipment = await Shipment.findByIdAndUpdate({ _id: id }, { ...body });
    if (shipment) return shipment;
    throw new Error("No Item found");
  } catch (error) {
    throw error;
  }
}

async function deleteShipmentService(id: string) {
  try {
    const shipment = await Shipment.findByIdAndDelete({ _id: id });
    if (shipment) return "Shipment deleted successfully";
    throw new ShipmentNotFoundError("The shipment does not exist in the list");
  } catch (error) {
    throw error;
  }
}

export {
  getAllShipmentService,
  createShipmentService,
  deleteShipmentService,
  getShipmentDetailService,
  updateShipmentService,
};
