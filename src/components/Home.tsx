import React from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { IStation, IStationStats } from "../types/IStation";
import { ITrip } from "../types/ITrip";
import Table from "./Table";
import Station from "./Station";
import Pagination from "./Pagination";
import apiService from "../services/api-service";
import { Loading } from "./Loading";
import { useEffect } from "react";
import { IMostPopularStation } from "../types/IFacts";
import PopularStations from "./PopularStations";
import PageLimit from "./PageLimit";
import Map from "./Map";
import StationList from "./StationList";

interface ChildPropsHome {
  trips: ITrip[];
  setTrips: Dispatch<React.SetStateAction<ITrip[]>>;
  stations: IStation[];
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  totalPageCount: number;
  selected: IStation;
  setSelected: Dispatch<React.SetStateAction<IStation | null>>;
  mostPopularStations: IMostPopularStation[];
  handlePageLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedPageLimit: string;
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({
  trips,
  setTrips,
  stations,
  page,
  setPage,
  totalPageCount,
  selected,
  setSelected,
  mostPopularStations,
  handlePageLimitChange,
  selectedPageLimit,
  loading,
  setLoading,
}: ChildPropsHome) => {
  const [stationLoading, setStationLoading] = useState(false);
  const [stationStats, setStationStats] = useState<IStationStats>({
    departureCount: 0,
    returnCount: 0,
  });

  useEffect(() => {
    const getStats = async () => {
      try {
        setStationLoading(true);
        const response = await apiService.getStats(selected.id);
        setStationStats({
          departureCount: response.departureCount,
          returnCount: response.returnCount,
        });
        setStationLoading(false);
      } catch (error) {
        throw new Error("Invalid station id");
      }
    };
    getStats();
  }, [selected]);

  const goToPage = async (pageNumber: number) => {
    try {
      setLoading(true);
      const pageResponse = await apiService.getPage(
        pageNumber,
        selectedPageLimit
      );
      setTrips(pageResponse.trips);
      setPage(pageNumber);
      setLoading(false);
    } catch (error) {
      throw new Error("Invalid page number");
    }
  };

  const handleStationClick = (station: IStation) => {
    // avoid spam by returning if station is being fetched already
    if (stationLoading) {
      return;
    }
    setSelected(station);
  };

  if (!trips.length || !stations.length) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto flex flex-col gap-6 p-3 pb-10 pt-20 lg:flex-row">
      {/* trips view */}
      <div className="drop-shadow-lg lg:w-2/3">
        <div
          className="relative flex flex-col gap-2 rounded-t-lg bg-white p-4
          dark:bg-slate-700 sm:items-center"
        >
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
              loading={loading}
            />
          </div>
          <PageLimit
            handlePageLimitChange={handlePageLimitChange}
            selectedPageLimit={selectedPageLimit}
            loading={loading}
          />
        </div>
        {loading ? <Loading /> : <Table trips={trips} />}
      </div>
      {/* stations view */}
      <div className="flex grow flex-col gap-4">
        <div>
          <h2 className="text-xl tracking-wide dark:text-slate-100">
            Stations
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          <StationList
            stations={stations}
            handleStationClick={handleStationClick}
          />
          <Station
            selected={selected}
            stationStats={stationStats}
            stationLoading={stationLoading}
          />
        </div>
        <Map selected={selected} />
        <PopularStations
          mostPopularStations={mostPopularStations}
          handleStationClick={handleStationClick}
          stations={stations}
          stationLoading={stationLoading}
        />
      </div>
    </div>
  );
};

export default Home;
