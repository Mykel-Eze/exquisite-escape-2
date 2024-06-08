import { axiosInstance } from "../axios.config";

export const flightsApiFactory = {
  $_search_flight(data: any) {
    return axiosInstance.post("/flight/get/search-offer", data);
  },
  $_search_flight_by_price(data: any) {
    return axiosInstance.post("/flight/search-offer-price", data);
  },
  $_create_flight_order(data: any) {
    return axiosInstance.post("/booking/flight-orders", data);
  },
  $_get_flight_order_mgt(orderId: any) {
    return axiosInstance.get(`/flight/get-order-info/${orderId}`);
  },
  $_get_flight_seat_map_display(orderId: any) {
    return axiosInstance.get(`/flight/flight-seatmap/${orderId}`);
  },
  $_create_branded_fare_upsell(data: any) {
    return axiosInstance.post("/shopping/flight-offers/upselling", data);
  },
  $_get_flight_recommendation() {
    return axiosInstance.get("/flight/recommendation");
  },
  $_get_flight_by_availability(data: any) {
    return axiosInstance.post("/shopping/availability/flight-availabilities", data);
  },
  $_get_cheapest_flight_by_date(data: any) {
    return axiosInstance.post("/flight/flight-cheapest-date-search", data);
  },
  $_get_flight_inspiration(data: any) {
    return axiosInstance.post("/flight/flight-inspiration", data);
  },
  $_get_nearest_airport(data: any) {
    return axiosInstance.post("/flight/airport-nearby", data);
  },
};
