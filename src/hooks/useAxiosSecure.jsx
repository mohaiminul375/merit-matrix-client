import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://merit-matrix-server.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
