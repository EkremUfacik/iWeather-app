import { useSearchParams } from "react-router-dom";
import { getCityWeather } from "@/services/getCityWeather";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import DayWeatherInfo from "@/components/DayWeatherInfo";
import NextDaysInfo from "@/components/NextDaysInfo";
import CityHeadInfo from "@/components/CityHeadInfo";

const Details = () => {
  const [searchParams] = useSearchParams();
  const lon = searchParams.get("lon") as string;
  const lat = searchParams.get("lat") as string;
  const { isPending, data, error } = useQuery({
    queryKey: ["cityWeather", { lon, lat }],
    queryFn: () => getCityWeather({ lon, lat }),
    retry: 0,
    enabled: !!lon && !!lat,
  });

  if (!lon || !lat) return <Error message="missing coordinate info" />;

  if (isPending) return <Loading />;

  if (error) return <Error message={error.message} />;

  if (!data) return <Error message="No data found" />;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg space-y-2 px-4 py-2">
        <CityHeadInfo data={data} />

        <DayWeatherInfo data={data} />

        <NextDaysInfo data={data} />
      </div>
    </div>
  );
};

export default Details;
