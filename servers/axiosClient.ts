import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create();

axiosClient.interceptors.request.use(
 (config) => {
   const token = Cookies.get('token');
   if (token) {
     config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
 },
 (error) => {
   return Promise.reject(error);
 }
);

export default axiosClient;