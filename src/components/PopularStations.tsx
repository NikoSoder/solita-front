import { IMostPopularStation } from "../types/IFacts";
import { Loading } from "./Loading";
import { IStation } from "../types/IStation";

type ChildPropsPopularStations = {
  mostPopularStations: IMostPopularStation[];
  handleStationClick: (station: IStation) => void;
  stations: IStation[];
  stationLoading: boolean;
};

const PopularStations = ({
  mostPopularStations,
  handleStationClick,
  stations,
  stationLoading,
}: ChildPropsPopularStations) => {
  const searchStation = (popularStation: IMostPopularStation) => {
    if (stationLoading) {
      return;
    }
    // I need to find station from stations array because
    // mostPopularStations type doesn't have coordinates values
    const station = stations.find(
      (station) => station.id === popularStation.station_id
    );
    if (!station) {
      return;
    }
    // after finding station we can pass it to handleStationClick function
    handleStationClick(station);
  };

  if (!mostPopularStations.length) {
    return <Loading />;
  }

  return (
    <div className="drop-shadow-lg">
      <div className="rounded-t-lg bg-white p-4 dark:bg-slate-700">
        <h2 className="text-xl tracking-wide dark:text-slate-100">
          Most busiest stations
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
            {mostPopularStations.map((station, index) => (
              <tr
                onClick={() => searchStation(station)}
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
