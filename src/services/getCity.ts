import axios from "axios";
import { axiosWithId } from "./axiosInstance";

export const getCity = async (city: string) => {
  try {
    const { data } = await axiosWithId.get(`/weather?q=${city}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      console.error(error);
    }
  }
};
