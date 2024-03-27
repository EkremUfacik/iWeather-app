export const weatherImages = {
  Clouds: {
    bg_day: "/src/assets/cloudy-day.png",
    bg_night: "/src/assets/cloudy-night.png",
    icon_day: "/src/assets/icons/cloudy-day.svg",
    icon_night: "/src/assets/icons/cloudy-night.svg",
  },
  Rain: {
    bg_day: "/src/assets/rain-day.png",
    bg_night: "/src/assets/rain-night.png",
    icon_day: "/src/assets/icons/rain-day.svg",
    icon_night: "/src/assets/icons/rain-night.svg",
  },
  Clear: {
    bg_day: "/src/assets/clear-day.png",
    bg_night: "/src/assets/clear-night.png",
    icon_day: "/src/assets/icons/clear-day.svg",
    icon_night: "/src/assets/icons/clear-night.svg",
  },
  Snow: {
    bg_day: "/src/assets/snow-day.png",
    bg_night: "/src/assets/snow-night.png",
    icon_day: "/src/assets/icons/snow-day.svg",
    icon_night: "/src/assets/icons/snow-night.svg",
  },
  Storm: {
    bg_day: "/src/assets/storm-day.png",
    bg_night: "/src/assets/storm-night.png",
    icon_day: "/src/assets/icons/storm-day.svg",
    icon_night: "/src/assets/icons/storm-night.svg",
  },
};

export type WeatherImagesKeys = keyof typeof weatherImages;
