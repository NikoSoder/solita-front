import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import apiService from "../services/api-service";
import Table from "./Table";
import Pagination from "./Pagination";
import { LoadingSkeleton } from "./Loading";

export function Trips() {
  const [page, setPage] = useState(0);

  const { isPending, isError, error, data, isPlaceholderData } = useQuery({
    queryKey: ["trips", page],
    queryFn: () => apiService.getPage(page),
    placeholderData: keepPreviousData,
    staleTime: 60 * 60 * 1000, // 60 minutes
  });

  function checkTripPageStatus() {
    if (isPending) {
      return <LoadingSkeleton height="700" />;
    }
    if (isError) {
      return <div className="text-center">Error: {error.message}</div>;
    }
    return <Table trips={data.trips} />;
  }

  return (
    <div className="drop-shadow-lg dark:text-slate-100">
      {/* pagination */}
      <div
        className="relative flex flex-col gap-2 rounded-t-lg bg-white p-4
          dark:bg-slate-700 sm:items-center"
      >
        <div>
          <h3 className="text-xl tracking-wide dark:text-slate-100">
            Browse journeys
          </h3>
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          isPlaceholderData={isPlaceholderData}
        />
      </div>
      {/* trips data */}
      {checkTripPageStatus()}
    </div>
  );
}
