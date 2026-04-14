import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 60000,
  timeoutErrorMessage: "Server Timedout...",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});

// Public api 
// protected API 
//React Component  => Service(axios -> intercept) => Internet  =>Dummyjson.com
// LoginForm.tsx
// request interceptor
axiosInstance.interceptors.request.use((config) => {
  // config
  // console.log("i am in req interceptor")
  const token = Cookies.get("auth_key_61");
  if(token) {
    config.headers.Authorization = "Bearer "+token        // to access private API endpoints
  }
  return config
});

// axiosInstance.interceptors.response.use();
axiosInstance.interceptors.response.use(
  (response) =>  response.data,
  (exception) => {
    if(exception.status === 400 || exception.status === 422) {
      // validation error 
      throw exception?.response?.data
    } else {
      throw exception?.resopnse
    }
  }
)

// interceptors 
  // req, 
  // res 
  // Dummy => Internet => Axios Instance (intercept -> response ) => React Component 


export default axiosInstance