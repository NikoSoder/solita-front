import { Trip } from "../types/ITrip";
type ChildPropsTable = {
  trips: Trip[];
};
// TODO: change covered distance to km and duration to minutes **************
const Table = ({ trips }: ChildPropsTable) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto bg-white shadow-2xl dark:bg-slate-800">
        <thead>
          <tr className="bg-slate-200 dark:bg-slate-700 dark:text-slate-300">
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
              <td>{Math.round(trip.duration / 60)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
