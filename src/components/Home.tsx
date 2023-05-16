import React from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { IStation, IStationStats } from "../types/IStation";
import { ITrip } from "../types/ITrip";
import Table from "./Table";
import Select from "./Select";
import Station from "./Station";
import Pagination from "./Pagination";
import apiService from "../services/api-service";
import { Loading } from "./Loading";
import { useEffect } from "react";
import SkeletonLoading from "./SkeletonLoading";

interface ChildPropsHome {
  trips: ITrip[];
  setTrips: Dispatch<React.SetStateAction<ITrip[]>>;
  stations: IStation[];
  totalPageCount: number;
}

const Home = ({
  trips,
  setTrips,
  stations,
  totalPageCount,
}: ChildPropsHome) => {
  const [selected, setSelected] = useState(stations[0]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const [stationStats, setStationStats] = useState<IStationStats>({
    departureCount: 0,
    returnCount: 0,
  });

  useEffect(() => {
    const getStats = async () => {
      setSkeletonLoading(true);
      const response = await apiService.getStats(selected.id);
      setStationStats({
        departureCount: response.departureCount,
        returnCount: response.returnCount,
      });
      setSkeletonLoading(false);
    };
    getStats();
  }, [selected]);

  const goToPage = async (pageNumber: number) => {
    setLoading(true);
    const pageResponse = await apiService.getPage(pageNumber);
    setTrips(pageResponse.trips);
    setPage(pageNumber);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {/* trips view */}
      <div className="drop-shadow-lg lg:w-3/4 xl:w-1/2">
        <div className="flex flex-col gap-2 rounded-t-lg bg-white p-4 dark:bg-slate-700 sm:items-center">
          <div>
            <h3 className="text-xl tracking-wide dark:text-slate-100">
              Browse journeys
            </h3>
          </div>
          <div className="flex gap-1">
            <Pagination
              goToPage={goToPage}
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
        {skeletonLoading ? (
          <SkeletonLoading />
        ) : (
          <Station selected={selected} stationStats={stationStats} />
        )}
      </div>
    </div>
  );
};

export default Home;
