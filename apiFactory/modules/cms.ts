import { axiosInstance } from "../axios.config";

export const hotelApiFactory = {
  $_get_blogs(data: any) {
    return axiosInstance.post("/blogs", data);
  },
  $_get_services(data: any) {
    return axiosInstance.post("/services", data);
  },
  $_get_footers(data: any) {
    return axiosInstance.post("/footer", data);
  },
  $_get_blogs_by_id(data: any) {
    return axiosInstance.post("", data);
  },
  $_get_all_blogs(data: any) {
    return axiosInstance.post("", data);
  },
  $_get_subscribers(data: any) {
    return axiosInstance.post("", data);
  },
  $_get_subscriber_by_id(data: any) {
    return axiosInstance.post("", data);
  },
  $_get_help_center_nav(data: any) {
    return axiosInstance.post("", data);
  },
  $_get_help_centre_article_by_id(data: any) {
    return axiosInstance.post("", data);
  },
};
