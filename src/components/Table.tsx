import { Trip } from "../types/ITrip";
import { convertSecondsToMinutes } from "../utils/secondsToMinutes";

type ChildPropsTable = {
  trips: Trip[];
};

const Table = ({ trips }: ChildPropsTable) => {
  return (
    <table className="table-auto bg-white dark:bg-slate-800 dark:shadow-2xl">
      <thead>
        <tr className="bg-sky-800 tracking-wide text-slate-100 dark:bg-sky-700 dark:text-slate-100">
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
            className="border-b border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-400"
          >
            <td>{trip.departureStationName}</td>
            <td>{trip.returnStationName}</td>
            {/* change meters to km and then round to 2 decimals */}
            <td>{Math.round((trip.coveredDistance / 1000) * 100) / 100}</td>
            {/* change seconds to minutes */}
            <td>{convertSecondsToMinutes(trip.duration)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;