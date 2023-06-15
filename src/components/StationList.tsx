import { useState } from "react";
import { IStation } from "../types/IStation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface ChildPropsStationList {
  stations: IStation[];
  handleStationClick: (station: IStation) => void;
}

const StationList = ({
  stations,
  handleStationClick,
}: ChildPropsStationList) => {
  const [visibleItems, setVisibleItems] = useState(15);
  const [query, setQuery] = useState("");

  const filteredStations = stations.filter((station) => {
    if (query === "") {
      return station;
    } else {
      return station.name.toLowerCase().includes(query);
    }
  });

  return (
    <div className="flex-1 grow">
      <div className="relative mb-3 max-w-sm">
        <MagnifyingGlassIcon className="absolute left-2 top-2 h-6 w-6 text-slate-400" />
        <input
          type="text"
          placeholder="Search stations"
          className="w-full rounded px-10 py-2 shadow-md outline-none dark:border dark:border-slate-500 dark:bg-slate-800 dark:text-slate-300"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <div className="flex max-h-72 max-w-sm grow flex-col overflow-y-auto rounded bg-white shadow-md dark:border dark:border-slate-500 dark:bg-slate-800">
        {filteredStations.length === 0 && query !== "" ? (
          <div className="bg-sky-600 px-6 py-2 text-white dark:bg-sky-700">
            Nothing found
          </div>
        ) : (
          <ul className="flex flex-col text-slate-700 dark:text-slate-300">
            {filteredStations.slice(0, visibleItems).map((station) => (
              <li
                onClick={() => handleStationClick(station)}
                className="cursor-pointer px-6 py-2 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-700"
                key={station.fid}
              >
                {station.name}
              </li>
            ))}
          </ul>
        )}
        {visibleItems < filteredStations.length && (
          <button
            className="relative w-full px-3 py-2 font-medium text-blue-600 dark:bg-slate-800 dark:text-slate-300"
            onClick={() => setVisibleItems((prev) => prev + 15)}
          >
            Load More
            <span className="absolute bottom-2 right-6 font-normal text-slate-400 dark:text-slate-400">
              {visibleItems} / {filteredStations.length}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default StationList;
