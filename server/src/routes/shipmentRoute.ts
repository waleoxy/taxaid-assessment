import express, { Router } from "express";
import shipmentController from "../controller/shipmentController";

const router = Router();

router.route("/").get(shipmentController.getAllShipmentsController);
router.route("/").post(shipmentController.createShipmentsController);
router.route("/:id").get(shipmentController.getShipmentDetailController);
router.route("/:id").put(shipmentController.updateShipmentController);
router.route("/:id").delete(shipmentController.deleteShipmentController);
export default router;
