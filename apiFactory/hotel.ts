import { axiosInstance } from "./axios.config";

export const hotelApiFactory = {
  $_create_rate(data: any) {
    return axiosInstance.post("/hotel-api/1.0/checkrates", data);
  },
  $_get_hotel_availability(data: any) {
    return axiosInstance.post("/hotel/check-availability", data);
  },
  $_hotel_booking(data: any){
    return axiosInstance.post('/hotel-api/1.0/bookings', data)
  },
  $_hotel_post_booking_detail(booking_reference: string, data: any){
    return axiosInstance.post(`/hotel-api/1.0/bookings/${booking_reference}`, data)
  },
  $_booking_list(data: any){
    return axiosInstance.get('/hotel/booking-list', data)
  },
  $_booking_cancellation(booking_reference: string, data: any, params: any){
    return axiosInstance.get(`/hotel-api/1.0/bookings/${booking_reference}?${params}`, data)
  },
  $_get_booking_change(){
    return axiosInstance.get("/hotel/check-availability");
  },
  $_get_hotel_types(data: any){
    return axiosInstance.post("/hotel/types", data);
  },
  $_get_hotel_countries_list(data: any){
    return axiosInstance.post("/hotel/countries", data);
  },
  $_get_hotel_destination_list(data: any){
    return axiosInstance.post("/hotel/destination", data);
  }
};
