import useDebounce from "@/hooks/useDebounce";
import { getCity } from "@/services/getCity";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import spinner from "@/assets/icons/spinner.svg";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

const SearchSection = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const navigate = useNavigate();

  const { isPending, data, error } = useQuery({
    queryKey: ["city", debouncedSearch],
    queryFn: (): Promise<CityInfo> => getCity(debouncedSearch),
    retry: 0,
    enabled: !!debouncedSearch,
  });

  const handleClick = () => {
    navigate(`/details/?lon=${data?.coord.lon}&lat=${data?.coord.lat}`);
  };

  return (
    <div className="">
      <div className="relative">
        <input
          type="text"
          value={search}
          className=" outline-none h-14 w-full px-5 rounded-lg text-white bg-input-gray"
          onChange={(e) => setSearch(e.target.value)}
        />
        {isPending && debouncedSearch && (
          <img
            src={spinner}
            width={26}
            height={26}
            className="absolute right-4 top-4 animate-spin"
          />
        )}
      </div>
      {error && <Error message={error.message} className="mt-2" />}
      {data && (
        <div
          className="mt-2 bg-gray-500 p-4 rounded-md hover:opacity-80 transition-all cursor-pointer"
          onClick={handleClick}
        >
          <p className="text-gray-100 text-left ">
            {data.name} - {data.sys.country}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchSection;
