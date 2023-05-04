import React from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { IStation } from "../types/IStation";
import { ITrip } from "../types/ITrip";
import Table from "./Table";
import Select from "./Select";
import Station from "./Station";
import Pagination from "./Pagination";

interface ChildPropsHome {
  trips: ITrip[];
  setTrips: Dispatch<React.SetStateAction<ITrip[]>>;
  stations: IStation[];
  setStations: Dispatch<React.SetStateAction<IStation[]>>;
}

const Home = ({ trips, setTrips, stations, setStations }: ChildPropsHome) => {
  const [selected, setSelected] = useState(stations[0]);
  const [page, setPage] = useState(1);

  const goNextPage = () => {
    setPage(page + 1);
    console.log(page);
  };
  const goPreviousPage = () => {
    setPage(page - 1);
    console.log(page);
  };
  const goFirstPage = () => {
    setPage(1);
    console.log(page);
  };
  const goLastPage = () => {
    setPage(354);
    console.log(page);
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {/* trips view */}
      <div className="max-w-xl">
        <div className="flex flex-col items-center justify-between gap-2 bg-white p-4 dark:bg-slate-700 sm:flex-row">
          <div>
            <h3 className="text-2xl tracking-wide dark:text-slate-100">
              Browse journeys
            </h3>
          </div>
          <div className="flex gap-2">
            <Pagination
              onNextPage={goNextPage}
              onPreviousPage={goPreviousPage}
              onGoFirstPage={goFirstPage}
              onGoLastPage={goLastPage}
              page={page}
            />
          </div>
        </div>
        <Table trips={trips} />
      </div>
      {/* stations view */}
      <div className="flex flex-grow flex-col gap-5 rounded-lg p-6">
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
