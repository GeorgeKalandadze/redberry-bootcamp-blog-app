import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.API_BASE_URL}/api`,
  headers: {
    Authorization: `Bearer ${import.meta.env.BEARER_TOKEN}`,
  },
});

export default axiosClient;
