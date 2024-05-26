import { axiosInstance } from "./axios.config";

export const dashboardApiFactory = {
  getDashboardSummary() {
    return axiosInstance.get('/user/dashboard-summary');
  },
};
