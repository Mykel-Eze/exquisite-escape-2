import { axiosInstance } from "../axios.config";

export const tourApiFactory = {
  $_availability_search(data: any) {
    return axiosInstance.post("/activities/check-availability", data);
  },
  $_get_tour_full_details(data: any) {
    return axiosInstance.post("/activities/booking-detail", data);
  },
  $_E_pre_confirm_tour_booking(data: any) {
    return axiosInstance.post("/activities/precomfirm-booking", data);
  },
  $_E_confirm_tour_booking(data: any) {
    return axiosInstance.post("/activities/book-activities", data);
  },
  $_E_re_confirm_tour_booking(data: any) {
    return axiosInstance.post("/activities/reconfirm-booking", data);
  },
  $_G_tour_booking_list(data: any) {
    return axiosInstance.post("/activities/booking-list", data);
  },
  $_H_tour_booking_detail(data: any) {
    return axiosInstance.post("/activities/booking-detail", data);
  },
  $_H_tour_booking_modify_add(data: any) {
    return axiosInstance.post("/activities/add-activities", data);
  },
  $_I_tour_booking_modify(data: any) {
    return axiosInstance.post("/activities/update-booking", data);
  },
  $_I_tour_booking_add(data: any) {
    return axiosInstance.post("/activities/add-activities", data);
  },
  $_I_tour_booking_remove(data: any) {
    return axiosInstance.post("/activities/remove-activities", data);
  },
  $_J_booking_cancel(data: any){
    return axiosInstance.post('/activities/cancel-booking', data)
  },
  $_get_tour_countries_list(){
    return axiosInstance.get("/activities/countries/en");
  },
  $_get_tour_destinations(){
    return axiosInstance.get("/activities/destination/en/AL");
  }
};
