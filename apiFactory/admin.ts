import { axiosInstance } from "./axios.config";

export const adminApiFactory = {
  $_get_users_list() {
    return axiosInstance.get("/users");
  },
  $_revoke_session() {
    return axiosInstance.delete("/user/session");
  }
};
