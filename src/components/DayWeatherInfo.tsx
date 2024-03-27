import thermometer from "@/assets/icons/thermometer.svg";
import pop from "@/assets/icons/cloud-rain-light.svg";
import wind from "@/assets/icons/wind-light.svg";
import air from "@/assets/icons/drop-light.svg";
import uv from "@/assets/icons/sun-dim-light.svg";

const DayWeatherInfo = ({ data }: { data: EditedCityWeatherInfo }) => {
  const dayWeatherInfo = [
    {
      icon: thermometer,
      title: "Thermal sensation",
      value: `${data?.weather.feels_like}ºc`,
    },
    {
      icon: pop,
      title: "Probability of rain",
      value: `${data?.weather.pop}%`,
    },
    {
      icon: wind,
      title: "Wind speed",
      value: `${data?.weather.wind_speed} km/h`,
    },
    {
      icon: air,
      title: "Air humidity",
      value: `${data?.weather.humidity}%`,
    },
    {
      icon: uv,
      title: "UV index",
      value: `${data?.weather.temp_kf}`,
    },
  ];
  return (
    <div className="bg-gray-800 p-2 divide-y divide-gray-700 rounded-xl">
      {dayWeatherInfo.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between text-white p-2.5"
        >
          <div className="flex items-center gap-4">
            <img src={item.icon} alt="" width={24} height={24} />
            <p className="text-gray-200 text-heading-xs">{item.title}</p>
          </div>
          <p className="text-gray-100 text-heading-sm">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DayWeatherInfo;
