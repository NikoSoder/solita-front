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
      <table data-testid="most-popular-stations" className="w-full table-auto">
        <thead>
          <tr
            className="bg-gray-100 tracking-wide text-black dark:bg-slate-500
             dark:text-slate-100"
          >
            <th className="font-semibold">Rank</th>
            <th className="font-semibold">Station name</th>
            <th className="font-semibold">Number of journeys</th>
          </tr>
        </thead>
        <tbody>
          {mostPopularStations.map((station, index) => (
            <tr
              key={station.station_id}
              className="text-slate-700 odd:bg-white even:bg-slate-100 dark:text-slate-300 dark:odd:bg-slate-700 dark:even:bg-slate-800"
            >
              <td className="dark:text-slate-100">{index + 1}</td>
              <td>{station.station_name}</td>
              <td>{station.num_journeys}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PopularStations;
