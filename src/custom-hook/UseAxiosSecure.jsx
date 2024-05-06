import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://car-doceor.vercel.app",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status == 401 || error.response?.status === 403) {
        // console.log("user loged out");
      }
    }
  );
  return axiosSecure;
};

export default UseAxiosSecure;
