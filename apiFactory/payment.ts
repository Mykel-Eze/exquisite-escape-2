import { axiosInstance } from "./axios.config";

export const transferApiFactory = {
  $_check_availability(data: any) {
    return axiosInstance.post("/transfer/check-availability", data);
  },
  $_booking_details(data: any) {
    return axiosInstance.post("/transfer/check-availability", data);
  },
  $_fetch_bookings(data: any) {
    return axiosInstance.post("/transfer/booking-list", data);
  },
  $_cancel_booking(data: any) {
    return axiosInstance.post("/transfer/check-availability", data);
  },
  $_book_transfer(data: any) {
    return axiosInstance.post("/transfer/book-transfer", data);
  },
  $_check_availability_route(data: any) {
    return axiosInstance.post("/transfer/check-availability/route", data);
  },
  $_get_countries(data: any) {
    return axiosInstance.post("/transfer/get-countries", data);
  },
  $_get_routes(data: any) {
    return axiosInstance.post("/transfer/get-routes", data);
  },
  $_get_terminus(data: any) {
    return axiosInstance.post("/transfer/get-terminals", data);
  },
};
