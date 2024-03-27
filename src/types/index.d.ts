type Coordinat = {
  lat: string;
  lon: string;
};

type CityInfo = {
  coord: Coordinat;
  name: string;
  sys: {
    country: string;
  };
};

type CityDayWeather = {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    temp_kf: number;
    feels_like: number;
  };
  pop: number;
  weather: [
    {
      description: string;
      main: string;
    }
  ];
  wind: {
    speed: number;
  };
};

type CityWeatherInfo = {
  city: {
    name: string;
    coord: Coordinat;
    country: string;
  };
  list: CityDayWeather[];
};

type EditedCityWeatherInfo = {
  name: string;
  country: string;
  weather: {
    date: string;
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    temp_kf: number;
    feels_like: number;
    pop: number;
    description: string;
    wind_speed: number;
    images: {
      bg_day: string;
      bg_night: string;
      icon_day: string;
      icon_night: string;
    };
  };
  nextDays: {
    date: string;
    icon: string;
    temp_max: number;
    temp_min: number;
  }[];
};
