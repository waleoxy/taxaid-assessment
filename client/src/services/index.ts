import axios, { AxiosResponse, isAxiosError, Axios, AxiosError } from "axios";

export const axiosInstance: Axios = axios.create({
  baseURL: "http://localhost:8080/api/",
});

const shipmentService = {
  async getAllShipments() {
    try {
      const { data }: AxiosResponse = await axiosInstance.get("shipments");
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (isAxiosError(error)) {
          throw new Error(error.response?.data.message);
        }
      }
    }
  },

  async getShipmentDetail(id: string) {
    try {
      const { data }: AxiosResponse = await axiosInstance.get(
        `shipments/${id}`
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (isAxiosError(error)) {
          throw new Error(error.response?.data.message);
        }
      }
    }
  },

  async createShipment(body: Record<string, unknown>) {
    try {
      const { data }: AxiosResponse = await axiosInstance.post(
        "shipments",
        body
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (isAxiosError(error)) {
          throw new Error(error.response?.data.message);
        }
      }
    }
  },

  async updateShipment(id: string, body: Record<string, unknown>) {
    try {
      const { data }: AxiosResponse = await axiosInstance.put(
        `shipments/${id}`,
        body
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (isAxiosError(error)) {
          throw new Error(error.response?.data.message);
        }
      }
    }
  },

  async deleteShipment(id: string) {
    try {
      const { data }: AxiosResponse = await axiosInstance.delete(
        `shipments/${id}`
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (isAxiosError(error)) {
          throw new Error(error.response?.data.message);
        }
      }
    }
  },
};

export default shipmentService;
