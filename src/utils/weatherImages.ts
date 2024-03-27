import bgCloudsDay from "@/assets/cloudy-day.png";
import bgCloudsNight from "@/assets/cloudy-night.png";
import iconCloudsDay from "@/assets/icons/cloudy-day.svg";
import iconCloudsNight from "@/assets/icons/cloudy-night.svg";

import bgRainDay from "@/assets/rain-day.png";
import bgRainNight from "@/assets/rain-night.png";
import iconRainDay from "@/assets/icons/rain-day.svg";
import iconRainNight from "@/assets/icons/rain-night.svg";

import bgClearDay from "@/assets/clear-day.png";
import bgClearNight from "@/assets/clear-night.png";
import iconClearDay from "@/assets/icons/clear-day.svg";
import iconClearNight from "@/assets/icons/clear-night.svg";

import bgSnowDay from "@/assets/snow-day.png";
import bgSnowNight from "@/assets/snow-night.png";
import iconSnowDay from "@/assets/icons/snow-day.svg";
import iconSnowNight from "@/assets/icons/snow-night.svg";

import bgStormDay from "@/assets/storm-day.png";
import bgStormNight from "@/assets/storm-night.png";
import iconStormDay from "@/assets/icons/storm-day.svg";
import iconStormNight from "@/assets/icons/storm-night.svg";

export const weatherImages = {
  Clouds: {
    bg_day: bgCloudsDay,
    bg_night: bgCloudsNight,
    icon_day: iconCloudsDay,
    icon_night: iconCloudsNight,
  },
  Rain: {
    bg_day: bgRainDay,
    bg_night: bgRainNight,
    icon_day: iconRainDay,
    icon_night: iconRainNight,
  },
  Clear: {
    bg_day: bgClearDay,
    bg_night: bgClearNight,
    icon_day: iconClearDay,
    icon_night: iconClearNight,
  },
  Snow: {
    bg_day: bgSnowDay,
    bg_night: bgSnowNight,
    icon_day: iconSnowDay,
    icon_night: iconSnowNight,
  },
  Storm: {
    bg_day: bgStormDay,
    bg_night: bgStormNight,
    icon_day: iconStormDay,
    icon_night: iconStormNight,
  },
};

export type WeatherImagesKeys = keyof typeof weatherImages;
