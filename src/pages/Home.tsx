import SearchSection from "@/components/SearchSection";
import logo from "@/assets/icons/iWeather-logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currCoords, setCurrCoords] = useState({ lat: 0, lon: 0 });

  const getCurrentLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrCoords({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="relative max-w-[320px] mx-auto min-h-screen flex flex-col items-center justify-center text-center gap-8 px-4">
      <div className="absolute top-12">
        <img src={logo} alt="" width={186} height={32} />
      </div>
      <div className="space-y-1">
        <h1 className="text-heading-md text-gray-100">
          Welcome to <span className="text-blue-light">TypeWeather</span>
        </h1>
        <p className="text-sm text-gray-200">
          Choose a location to see the weather forecast
        </p>
      </div>
      <div className="w-full">
        <SearchSection />
      </div>
      {currCoords.lat && currCoords.lon ? (
        <Link
          to={`/details/?lon=${currCoords?.lon}&lat=${currCoords?.lat}`}
          className="text-blue-light text-sm hover:underline"
        >
          Go to current location weather
        </Link>
      ) : null}
    </div>
  );
};

export default Home;
