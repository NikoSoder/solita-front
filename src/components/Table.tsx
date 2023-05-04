import { ITrip } from "../types/ITrip";
import { convertSecondsToMinutes } from "../utils/secondsToMinutes";
import { convertMetersToKm } from "../utils/metersToKm";

type ChildPropsTable = {
  trips: ITrip[];
};

const Table = ({ trips }: ChildPropsTable) => {
  return (
    <table className="table-auto dark:shadow-2xl">
      <thead>
        <tr className="bg-slate-100 tracking-wide text-black dark:bg-slate-800 dark:text-slate-100">
          <th>Departure</th>
          <th>Return</th>
          <th>Distance (km)</th>
          <th>Duration (min)</th>
        </tr>
      </thead>
      <tbody>
        {trips.map((trip) => (
          <tr
            key={trip.id}
            className="text-slate-700 odd:bg-white even:bg-slate-100 dark:text-slate-300 dark:odd:bg-slate-700 dark:even:bg-slate-800"
          >
            <td>{trip.departure_station_name}</td>
            <td>{trip.return_station_name}</td>
            {/* change meters to km and then round to 2 decimals */}
            <td>{convertMetersToKm(trip.covered_distance)}</td>
            {/* change seconds to minutes */}
            <td>{convertSecondsToMinutes(trip.duration)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
