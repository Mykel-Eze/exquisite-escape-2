import { axiosInstance } from "./axios.config";

export const orderApiFactory = {
  $_create_order(data: any) {
    return axiosInstance.post("/order/create-order", data);
  }
};
