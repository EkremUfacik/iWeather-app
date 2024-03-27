const NextDaysInfo = ({ data }: { data: EditedCityWeatherInfo }) => {
  return (
    <div className="text-white flex justify-center items-center text-center bg-gray-800 rounded-xl p-4">
      {data.nextDays.map((day, index) => (
        <div key={index} className="w-full">
          <p className="text-heading-xs">{day.date.slice(0, 3)}</p>
          <div>
            <img src={day.icon} alt="" className="w-full h-20 object-cover" />
          </div>
          <div className="text-heading-xs">
            <p className="text-gray-100">{day.temp_max}ºc</p>
            <p className="text-gray-400">{day.temp_min}ºc</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NextDaysInfo;
