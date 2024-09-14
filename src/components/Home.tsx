import { useState } from "react";
import Station from "./Station";
import apiService from "../services/api-service";
import { Loading } from "./Loading";
import PopularStations from "./PopularStations";
import Map from "./Map";
import { Trips } from "./Trips";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import StationList from "./StationList";

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
      return <Loading />;
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
      <Trips />
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
        {isPending ? (
          <Loading />
        ) : isError ? (
          <div className="text-center">Error: {error.message}</div>
        ) : (
          <Map selected={data.station} />
        )}
        <PopularStations handleStationClick={handleStationClick} />
      </div>
    </div>
  );
};

export default Home;
