import { Request, Response } from "express";
import {
  createShipmentService,
  deleteShipmentService,
  getAllShipmentService,
  getShipmentDetailService,
  updateShipmentService,
} from "../services/shipmentService";
import { IShipment } from "../interfaces/shipment.interface";

async function getAllShipmentsController(req: Request, res: Response) {
  try {
    let allShipments = await getAllShipmentService();
    res.status(200).json({
      message: "All shipments",
      status: 200,
      data: allShipments,
    });
  } catch (error) {
    res.status(500).json({ message: "Unsuccefull", error });
  }
}

async function getShipmentDetailController(req: Request, res: Response) {
  let id = req.params.id;
  try {
    let shipment = await getShipmentDetailService(id);
    res.status(200).json({
      message: "Shipment details",
      status: 200,
      data: shipment,
    });
  } catch (error) {
    res.status(500).json({ message: "Unsuccefull", error });
  }
}

async function createShipmentsController(req: Request, res: Response) {
  let shipment = req.body;
  try {
    let createdShipment = await createShipmentService(shipment);
    res.status(201).json({
      message: "Shipment created",
      status: 201,
      data: createdShipment,
    });
  } catch (error) {
    res.status(500).json({ message: "Unsuccefull", error });
  }
}

async function updateShipmentController(req: Request, res: Response) {
  let shipment = req.body;
  let id = req.params.id;
  try {
    let updatedShipment = await updateShipmentService(id, shipment);
    res.status(201).json({
      message: "Shipment updated",
      status: 201,
      data: updatedShipment,
    });
  } catch (error) {
    res.status(500).json({ message: "Unsuccefull update", error });
  }
}

async function deleteShipmentController(req: Request, res: Response) {
  let id = req.params.id;
  try {
    await deleteShipmentService(id);
    res.status(200).json({ message: "Shipment deleted", status: 204 });
  } catch (error) {
    res.status(500).json({ message: "Unsuccefull deletion", error });
  }
}

export default {
  getAllShipmentsController,
  createShipmentsController,
  updateShipmentController,
  deleteShipmentController,
  getShipmentDetailController,
};
