import axios from "axios";

const appId = import.meta.env.VITE_API_KEY;

export const axiosWithId = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    appid: appId,
  },
});
