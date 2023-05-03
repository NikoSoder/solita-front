import React from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { IStation } from "../types/IStation";
import { ITrip } from "../types/ITrip";
import Table from "./Table";
import Select from "./Select";
import Station from "./Station";

interface ChildPropsHome {
  trips: ITrip[];
  setTrips: Dispatch<React.SetStateAction<ITrip[]>>;
  stations: IStation[];
  setStations: Dispatch<React.SetStateAction<IStation[]>>;
}

const Home = ({ trips, setTrips, stations, setStations }: ChildPropsHome) => {
  const [selected, setSelected] = useState(stations[0]);

  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="flex-1 overflow-x-auto">
        <Table trips={trips} />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-5 rounded-lg p-6">
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
    </div>
  );
};

export default Home;
