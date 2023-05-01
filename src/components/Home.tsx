import React from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { Station } from "../types/IStation";
import { Trip } from "../types/ITrip";
import Table from "./Table";
import Select from "./Select";

interface ChildPropsHome {
  trips: Trip[];
  setTrips: Dispatch<React.SetStateAction<Trip[]>>;
  stations: Station[];
  setStations: Dispatch<React.SetStateAction<Station[]>>;
}

const Home = ({ trips, setTrips, stations, setStations }: ChildPropsHome) => {
  const [selected, setSelected] = useState(stations[0]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="overflow-x-auto shadow-xl">
        <Table trips={trips} />
      </div>
      <div>
        <Select
          stations={stations}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};

export default Home;
