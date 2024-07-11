import express, { Express, Request, Response } from "express";
import cors from "cors";

import { config } from "./config";
import mongoose from "mongoose";
import shipmentRouter from "./routes/shipmentRoute";
import path from "path";

const PORT = config.PORT;

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

app.use("/api/shipments", shipmentRouter);

const bootupServer = async () => {
  try {
    await mongoose.connect(config.MONGO_URL, {
      w: "majority",
      retryWrites: true,
      authMechanism: "DEFAULT",
    });
    console.log("MongoDb connection successful");

    app.get("/*", function (req: Request, res: Response) {
      res.sendFile(path.join(__dirname, "build", "index.html"));
    });

    app.get("/", (req: Request, res: Response) => {
      res.status(200).json({ message: "Server is up and running" });
    });

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

bootupServer();
