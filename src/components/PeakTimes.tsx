import { keepPreviousData, useQuery } from "@tanstack/react-query";
import apiService from "../services/api-service";
import { useState } from "react";
import { LoadingSkeleton, LoadingSmall } from "./Loading";
import { daysOfTheWeek } from "../utils/daysOfTheWeek";
import { ClockIcon } from "@heroicons/react/24/outline";

const CHART_MAX_HEIGHT = 120;
type ChildPropsPeakTimes = {
  activeStationId: string;
};

export function PeakTimes({ activeStationId }: ChildPropsPeakTimes) {
  const [weekDayIndex, setWeekDayIndex] = useState<string>(
    daysOfTheWeek[0].dowIndex
  );
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["peakTimes", { activeStationId, weekDayIndex }],
    queryFn: () => apiService.getPeakTimes(activeStationId, weekDayIndex),
    placeholderData: keepPreviousData,
    staleTime: 60 * 60 * 1000, // 60 minutes
  });

  if (isPending) {
    return <LoadingSkeleton height="342" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const maxDeparturesToday = Math.max(...data.map((d) => Number(d.departures)));

  return (
    <div className="relative rounded bg-white p-6 text-slate-600 shadow-md dark:border dark:border-slate-500 dark:bg-slate-800 dark:text-slate-300">
      {/* days of the week */}
      <div className="mb-10 flex justify-around gap-4">
        {daysOfTheWeek.map((day) => (
          <button
            key={day.day}
            onClick={() => setWeekDayIndex(day.dowIndex)}
            className={`${
              weekDayIndex === day.dowIndex
                ? "underline underline-offset-8"
                : ""
            }`}
          >
            <p className="block sm:hidden">{day.day.charAt(0)}</p>
            <p className="hidden sm:block">{day.day}</p>
          </button>
        ))}
      </div>
      {/* loading state */}
      {isFetching ? (
        <div className="absolute right-2 top-2">
          <LoadingSmall />
        </div>
      ) : null}
      {/* chart */}
      <div className="flex items-end justify-between gap-10 overflow-x-auto py-2">
        {data.map((hour) => (
          <div
            key={hour.hour_of_day}
            className="flex flex-col items-center gap-2"
          >
            <p>{hour.departures}</p>
            <p
              style={{
                height: `${
                  (Number(hour.departures) / maxDeparturesToday) *
                  CHART_MAX_HEIGHT
                }px`,
              }}
              className={`w-4 rounded-md ${
                Number(hour.departures) === maxDeparturesToday
                  ? "bg-sky-500 dark:bg-slate-300"
                  : "bg-sky-200 dark:bg-slate-500"
              }`}
            ></p>
            <p>{hour.hour_of_day}</p>
            <ClockIcon className="h-5 w-5 text-slate-400 dark:text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
