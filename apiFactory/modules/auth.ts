import { axiosInstance } from '../axios.config'

export const authApiFactory = {
  $_login(data: any) {
    return axiosInstance.post('/user/signin', data);
  },
  $_signup(data: any) {
     return axiosInstance.post('/users/register', data);
  },
  $_logout(){
    return axiosInstance.get('/users/logout');
  },
  $_current_user(){
    return axiosInstance.get('/users/currentuser');
  },
  $_reset_password(data: any) {
    return axiosInstance.post('/users/forgot-password', data);
 },
 $_new_password(data: any, reset_token: string) {
  return axiosInstance.post(`/users/reset-password/${reset_token}`, data);
},
$_google_oauth(code: string){
  return axiosInstance.get(`/sessions/oauth/google?code=${code}`);
},
$_activate_account(token: string){
  return axiosInstance.get(`/activate/${token}`);
},
$_check_reset_token_validity(token: string){
  return axiosInstance.get(`/verify/${token}`);
}
};
