import { useInfiniteQuery } from "@tanstack/react-query";
import apiService from "../services/api-service";
import React from "react";
import { Loading } from "./Loading";

interface ChildPropsStationList {}

const StationList = ({}: ChildPropsStationList) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isPending,
  } = useInfiniteQuery({
    queryKey: ["stations"],
    queryFn: apiService.getStations,
    staleTime: 60 * 60 * 1000, // 60 minutes
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.data.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex-1 grow">
      <div className="flex max-h-72 max-w-sm grow flex-col overflow-y-auto rounded bg-white shadow-md dark:border dark:border-slate-500 dark:bg-slate-800">
        <ul className="flex flex-col text-slate-700 dark:text-slate-300">
          {data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.data.map((station) => (
                <li
                  // onClick={() => handleStationClick(station)}
                  className="cursor-pointer px-6 py-2 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-700"
                  key={station.id}
                >
                  {station.nimi}
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
        <button
          className="relative w-full px-3 py-2 font-medium text-blue-600 dark:bg-slate-800 dark:text-slate-300"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
    </div>
  );
};

export default StationList;
