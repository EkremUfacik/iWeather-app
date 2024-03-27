import { isDayTime } from "@/utils/dateFuncs";
import { Link } from "react-router-dom";
import leftArrow from "@/assets/icons/left-arrow.svg";

const CityHeadInfo = ({ data }: { data: EditedCityWeatherInfo }) => {
  const bgImage = isDayTime()
    ? data.weather.images.bg_day
    : data.weather.images.bg_night;

  const icon = isDayTime()
    ? data.weather.images.icon_day
    : data.weather.images.icon_night;
  return (
    <div
      className="h-[300px] bg-center bg-cover flex flex-col justify-between px-8 rounded-xl relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Link
        to="/"
        className=" text-white absolute top-1 left-2 hover:left-1.5 transition-all "
      >
        <img src={leftArrow} alt="" className="w-8" />
      </Link>
      <div className="mt-10">
        <h2 className="text-gray-100 text-heading-md ">
          {data.name}, {data.country}
        </h2>
        <p className="text-gray-100 text-sm">{data.weather.date}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-white">
          <p className="text-heading-xl">{data.weather.temp}ºc</p>
          <p className="text-heading-sm">
            {data.weather.temp_min}ºc / {data.weather.temp_max}ºc
          </p>
          <p className="text-sm capitalize">{data.weather.description}</p>
        </div>
        <div>
          <img src={icon} alt="icon" width={140} height={140} className="" />
        </div>
      </div>
    </div>
  );
};

export default CityHeadInfo;
