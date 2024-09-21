import { useState } from "react";
import Station from "./Station";
import apiService from "../services/api-service";
import { LoadingSkeleton } from "./Loading";
import PopularStations from "./PopularStations";
import Map from "./Map";
import { Trips } from "./Trips";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import StationList from "./StationList";
import { PeakTimes } from "./PeakTimes";

const Home = () => {
  const [activeStationId, setActiveStationId] = useState("204"); // TODO: fix hardcoded id

  const { isPending, isError, error, data, isFetching } = useQuery({
    queryKey: ["activeStation", activeStationId],
    queryFn: () => apiService.getStats(activeStationId),
    placeholderData: keepPreviousData,
    staleTime: 60 * 60 * 1000, // 60 minutes
  });

  function checkSelectedStationStatus() {
    if (isPending) {
      return (
        <div className="flex-1 grow">
          <LoadingSkeleton height="231" />
        </div>
      );
    }
    if (isError) {
      return <div className="text-center">Error: {error.message}</div>;
    }
    return <Station station={data} isFetching={isFetching} />;
  }

  const handleStationClick = (stationId: string) => {
    if (activeStationId === stationId) return;
    if (isFetching) return;

    setActiveStationId(stationId);
  };

  return (
    <div className="container mx-auto flex flex-col gap-6 p-3 pb-10 pt-20 lg:flex-row">
      {/* trips view table */}
      <div className="flex flex-col gap-4 lg:w-2/3">
        <div>
          <h2 className="text-xl tracking-wide dark:text-slate-100">
            Hourly Departures by Day
          </h2>
        </div>
        <PeakTimes activeStationId={activeStationId} />
        {/* <Trips /> */}
        {isPending ? (
          <LoadingSkeleton height="327" />
        ) : isError ? (
          <div className="text-center">Error: {error.message}</div>
        ) : (
          <Map selected={data.station} />
        )}
      </div>
      {/* stations view */}
      <div className="flex grow flex-col gap-4">
        <div>
          <h2 className="text-xl tracking-wide dark:text-slate-100">
            Stations
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          <StationList handleStationClick={handleStationClick} />
          {checkSelectedStationStatus()}
        </div>
        <PopularStations handleStationClick={handleStationClick} />
      </div>
    </div>
  );
};

export default Home;
