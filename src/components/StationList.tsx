import { useState, Dispatch } from "react";
import { IStation } from "../types/IStation";

interface ChildPropsStationList {
  stations: IStation[];
  setSelected: Dispatch<React.SetStateAction<IStation | null>>;
}

const StationList = ({ stations, setSelected }: ChildPropsStationList) => {
  const [visibleItems, setVisibleItems] = useState(10);

  return (
    <div className="flex h-72 max-w-sm grow flex-col overflow-auto rounded bg-white shadow-md dark:border dark:border-slate-500 dark:bg-slate-800">
      <ul className="flex flex-col text-slate-700 dark:text-slate-300">
        {stations.slice(0, visibleItems).map((station) => (
          <li
            onClick={() => setSelected(station)}
            className="cursor-pointer px-6 py-2 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-700"
            key={station.fid}
          >
            {station.name}
          </li>
        ))}
      </ul>
      {visibleItems < stations.length && (
        <button
          className="bg-gray-200 px-3 py-2 text-black dark:bg-slate-500 dark:text-white"
          onClick={() => setVisibleItems((prev) => prev + 10)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default StationList;
