import { axiosInstance } from "./axios.config";

export const paymentApiFactory = {
  $_save_card_details(data: any) {
    return axiosInstance.post("/save-card-token", data);
  },
  $_get_saved_cards() {
    return axiosInstance.get("/get-added-cards");
  },
  $_charge_card(data: any) {
    return axiosInstance.post("/charge", data);
  }
};
