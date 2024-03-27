import axios from "axios";
import { axiosWithId } from "./axiosInstance";
import { formatDate, getDay } from "@/utils/dateFuncs";
import { WeatherImagesKeys, weatherImages } from "@/utils/weatherImages";

export const getCityWeather = async (coordinat: Coordinat) => {
  try {
    const { data }: { data: CityWeatherInfo } = await axiosWithId.get(
      `/forecast?lat=${coordinat.lat}&lon=${coordinat.lon}`
    );

    const { main, pop, weather, wind } = data.list[0];

    const dates = data.list.filter((item) => item.dt_txt.includes("06:00:00"));

    const nextDays = dates.map((item) => {
      return {
        temp_min: Math.floor(item.main.temp_min),
        temp_max: Math.ceil(item.main.temp_max),
        main: item.weather[0].main,
        description: item.weather[0].description,
        date: getDay(item.dt_txt),
        icon: weatherImages[item.weather[0].main as WeatherImagesKeys].icon_day,
      };
    });

    const todayWeather = {
      temp: Math.round(main.temp),
      temp_min: Math.floor(main.temp_min),
      temp_max: Math.ceil(main.temp_max),
      temp_kf: Math.round(main.temp_kf),
      feels_like: Math.round(main.feels_like),
      humidity: main.humidity,
      wind_speed: wind.speed,
      pop: Math.ceil(pop * 100),
      main: weather[0].main,
      description: weather[0].description,
      date: formatDate(data.list[0].dt_txt),
      images: weatherImages[weather[0].main as WeatherImagesKeys],
    };

    return {
      name: data.city.name,
      coord: data.city.coord,
      country: data.city.country,
      weather: todayWeather,
      nextDays,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      console.error(error);
    }
  }
};
