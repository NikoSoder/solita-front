import { ITrip } from "../types/ITrip";
import { convertSecondsToMinutes } from "../utils/secondsToMinutes";
import { convertMetersToKm } from "../utils/metersToKm";

type ChildPropsTable = {
  trips: ITrip[];
};

const Table = ({ trips }: ChildPropsTable) => {
  return (
    <div className="max-h-[700px] overflow-x-auto">
      <table
        data-testid="journeys-table"
        className="w-full table-auto lg:table-fixed"
      >
        <thead className="sticky top-0 z-10">
          <tr className="bg-gray-100 tracking-wide text-black dark:bg-slate-500 dark:text-slate-100">
            <th className="font-semibold">Departure</th>
            <th className="font-semibold">Return</th>
            <th className="font-semibold">Distance</th>
            <th className="font-semibold">Duration</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr
              key={trip.id}
              className="border-b bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <td>{trip.departure_station_name}</td>
              <td>{trip.return_station_name}</td>
              {/* change meters to km and then round to 2 decimals */}
              <td>{convertMetersToKm(trip.covered_distance)} km</td>
              {/* change seconds to minutes */}
              <td>{convertSecondsToMinutes(trip.duration)} m</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
