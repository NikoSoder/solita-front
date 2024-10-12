import { useQuery } from "@tanstack/react-query";
import apiService from "../services/api-service";
import { LoadingSkeleton } from "./Loading";

type ChildPropsPopularStations = {
  handleStationClick: (stationId: string) => void;
};

const PopularStations = ({ handleStationClick }: ChildPropsPopularStations) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["mostPopularStations"],
    queryFn: apiService.getInterestingFacts,
  });

  if (isPending) {
    return <LoadingSkeleton height="401" />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="drop-shadow-lg">
      <div className="rounded-t-lg bg-white p-4 dark:bg-slate-700">
        <h2 className="text-xl tracking-wide dark:text-slate-100">
          Busiest stations
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table
          data-testid="most-popular-stations"
          className="w-full table-auto"
        >
          <thead>
            <tr className="bg-gray-100 tracking-wide text-black dark:bg-slate-500 dark:text-slate-100">
              <th className="font-semibold">Rank</th>
              <th className="font-semibold">Station name</th>
              <th className="font-semibold">Journeys</th>
            </tr>
          </thead>
          <tbody>
            {data.busiestStations.map((station, index) => (
              <tr
                onClick={() => handleStationClick(station.station_id)}
                key={station.station_id}
                className="group cursor-pointer border-b bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <td>{index + 1}</td>
                <td className="group-hover:underline">
                  {station.station_name}
                </td>
                <td>{station.num_journeys}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularStations;
