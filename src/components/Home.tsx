import { useState, useEffect } from "react";
import { IStation, IStationStats } from "../types/IStation";
import Station from "./Station";
import apiService from "../services/api-service";
import { Loading } from "./Loading";
import { IMostPopularStation } from "../types/IFacts";
import PopularStations from "./PopularStations";
import Map from "./Map";
import { Trips } from "./Trips";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import StationList from "./StationList";

interface ChildPropsHome {
  mostPopularStations: IMostPopularStation[];
}

const Home = ({ mostPopularStations }: ChildPropsHome) => {
  const [stationLoading, setStationLoading] = useState(false);
  const [stationStats, setStationStats] = useState<IStationStats>({
    departureCount: 0,
    returnCount: 0,
  });

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       setStationLoading(true);
  //       const response = await apiService.getStats(selected.id);
  //       setStationStats({
  //         departureCount: response.departureCount,
  //         returnCount: response.returnCount,
  //       });
  //       setStationLoading(false);
  //     } catch (error) {
  //       throw new Error("Invalid station id");
  //     }
  //   };
  //   getStats();
  // }, [selected]);

  // const handleStationClick = (station: IStation) => {
  //   // avoid spam by returning if station is being fetched already
  //   if (stationLoading) {
  //     return;
  //   }
  //   setSelected(station);
  // };

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
          <StationList />
          {/* <Station
            selected={selected}
            stationStats={stationStats}
            stationLoading={stationLoading}
          /> */}
        </div>
        {/* <Map selected={selected} />
        <PopularStations
          mostPopularStations={mostPopularStations}
          handleStationClick={handleStationClick}
          stations={stations}
          stationLoading={stationLoading}
        /> */}
      </div>
    </div>
  );
};

export default Home;
