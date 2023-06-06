import { IMostPopularStation } from "../types/IFacts";
import { Loading } from "./Loading";

type ChildPropsPopularStations = {
  mostPopularStations: IMostPopularStation[];
};

const PopularStations = ({
  mostPopularStations,
}: ChildPropsPopularStations) => {
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
            <tr
              className="bg-gray-100 tracking-wide text-black
              dark:bg-slate-500 dark:text-slate-100"
            >
              <th className="font-semibold">Rank</th>
              <th className="font-semibold">Station name</th>
              <th className="font-semibold">Journeys</th>
            </tr>
          </thead>
          <tbody>
            {mostPopularStations.map((station, index) => (
              <tr
                key={station.station_id}
                className="border-b bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <td>{index + 1}</td>
                <td>{station.station_name}</td>
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
