import { axiosInstance } from "./axios.config";

export const usersApiFactory = {
  $_get_users_list() {
    return axiosInstance.get("/users");
  }
};
