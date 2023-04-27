import React from "react";
import { Dispatch } from "react";
import { Station } from "../types/IStation";
import { Trip } from "../types/ITrip";

interface ChildPropsHome {
  trips: Trip[];
  setTrips: Dispatch<React.SetStateAction<Trip[]>>;
  stations: Station[];
  setStations: Dispatch<React.SetStateAction<Station[]>>;
}

const Home = ({ trips, setTrips, stations, setStations }: ChildPropsHome) => {
  return (
    <div>
      {trips.map((trip) => (
        <div key={trip.id}>{trip.departureStationName}</div>
      ))}
    </div>
  );
};

export default Home;
