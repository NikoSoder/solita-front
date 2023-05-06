import React from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { IStation } from "../types/IStation";
import { ITrip } from "../types/ITrip";
import Table from "./Table";
import Select from "./Select";
import Station from "./Station";
import Pagination from "./Pagination";
import apiService from "../services/api-service";

interface ChildPropsHome {
  trips: ITrip[];
  setTrips: Dispatch<React.SetStateAction<ITrip[]>>;
  stations: IStation[];
  setStations: Dispatch<React.SetStateAction<IStation[]>>;
  totalPageCount: number;
}

const Home = ({
  trips,
  setTrips,
  stations,
  setStations,
  totalPageCount,
}: ChildPropsHome) => {
  const [selected, setSelected] = useState(stations[0]);
  const [page, setPage] = useState(0);

  const goNextPage = async () => {
    const nextPage = page + 1;
    const pageResponse = await apiService.getPage(nextPage);
    setPage(nextPage);
    setTrips(pageResponse.trips);
  };
  const goPreviousPage = async () => {
    const previousPage = page - 1;
    const pageResponse = await apiService.getPage(previousPage);
    setPage(previousPage);
    setTrips(pageResponse.trips);
  };
  const goFirstPage = async () => {
    const pageResponse = await apiService.getPage(0);
    setTrips(pageResponse.trips);
    setPage(0);
  };
  const goLastPage = async () => {
    const pageResponse = await apiService.getPage(totalPageCount);
    setTrips(pageResponse.trips);
    setPage(totalPageCount);
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {/* trips view */}
      <div className="max-w-xl">
        <div className="flex flex-col gap-2 bg-white p-4 dark:bg-slate-700 sm:items-center">
          <div>
            <h3 className="text-2xl tracking-wide dark:text-slate-100">
              Browse journeys
            </h3>
          </div>
          <div className="flex gap-1">
            <Pagination
              onNextPage={goNextPage}
              onPreviousPage={goPreviousPage}
              onGoFirstPage={goFirstPage}
              onGoLastPage={goLastPage}
              totalPageCount={totalPageCount}
              page={page}
            />
          </div>
        </div>
        {loading ? <Loading /> : <Table trips={trips} page={page} />}
      </div>
      {/* stations view */}
      <div className="flex flex-grow flex-col gap-5 rounded-lg">
        <div>
          <Select
            stations={stations}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div>
          <Station selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default Home;
