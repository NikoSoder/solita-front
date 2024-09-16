import { keepPreviousData, useQuery } from "@tanstack/react-query";
import apiService from "../services/api-service";
import { useState } from "react";
import { LoadingSkeleton } from "./Loading";

type ChildPropsPeakTimes = {
  activeStationId: string;
};

enum DayOfTheWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export function PeakTimes({ activeStationId }: ChildPropsPeakTimes) {
  const [weekDay, setWeekDay] = useState<DayOfTheWeek>(DayOfTheWeek.Monday);
  const { isPending, isError, error, data, isFetching } = useQuery({
    queryKey: ["peakTimes", { activeStationId, weekDay }],
    queryFn: () => apiService.getPeakTimes(activeStationId, weekDay),
    placeholderData: keepPreviousData,
    staleTime: 60 * 60 * 1000, // 60 minutes
  });

  if (isPending) {
    return <LoadingSkeleton height="288" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="overflow-x-auto rounded bg-white p-6 text-slate-600 shadow-md dark:border dark:border-slate-500 dark:bg-slate-800 dark:text-slate-300">
      <div className="flex items-end justify-between gap-10">
        {data.map((hour) => (
          <div className="flex flex-col items-center gap-2">
            <p
              style={{ height: `${hour.departures}px` }}
              className="w-full rounded-md bg-slate-500"
            ></p>
            <p>{hour.departures}</p>
            <p>{hour.hour_of_day}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
