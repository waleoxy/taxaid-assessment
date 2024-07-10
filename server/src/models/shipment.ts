import { Schema, Document, model } from "mongoose";
import { IShipment } from "../interfaces/shipment.interface";

export interface IShipmentModel extends IShipment, Document {}

const ShipmentSchema = new Schema({
  name: { type: String, required: true },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  timestamp: { type: Date, default: Date.now() },
});

const shipmentModel = model<IShipmentModel>("Shipment", ShipmentSchema);

export default shipmentModel;
