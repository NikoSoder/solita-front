import { IStation, IStationStats } from "../types/IStation";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";

type ChildPropsStation = {
  selected: IStation;
  stationStats: IStationStats;
};

const Station = ({ selected, stationStats }: ChildPropsStation) => {
  return (
    <div className="max-w-sm grow rounded border border-transparent bg-white p-6 text-slate-600 shadow-md dark:border dark:border-slate-500 dark:bg-slate-800 dark:text-slate-300">
      <div className="mb-6 border-b dark:border-slate-700">
        <h2 className="text-lg text-slate-900 dark:text-slate-200">
          {selected.name}
        </h2>
      </div>
      <div className="-ml-1 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-slate-200 p-1 dark:bg-slate-400">
            <MapPinIcon className="h-4 w-4 text-slate-700 dark:text-slate-900" />
          </div>
          <p> {selected.osoite} </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-green-200 p-1 dark:bg-green-400">
            <CheckIcon className="h-4 w-4 text-green-900" />
          </div>
          <p>Journeys started</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-200">
            {stationStats.departureCount}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-green-200 p-1 dark:bg-green-400">
            <CheckIcon className="h-4 w-4 text-green-900" />
          </div>
          <p>Journeys ended</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-200">
            {stationStats.returnCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Station;
