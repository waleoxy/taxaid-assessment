import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || "";

const MONGO_URL: string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.wmdiwcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 8080;

export const config = {
  MONGO_URL,
  PORT,
};
