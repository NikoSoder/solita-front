import { ITrip } from "../types/ITrip";
export const mockTrips: ITrip[] = [
  {
    id: 1,
    departure: "test 1 departure",
    return: "test 1 return",
    departure_station_id: "10",
    departure_station_name: "test departune name",
    return_station_id: "34",
    return_station_name: "test return name",
    covered_distance: "11",
    duration: 11,
  },
  {
    id: 2,
    departure: "test 2 departure",
    return: "test 2 return",
    departure_station_id: "33",
    departure_station_name: "test departune name",
    return_station_id: "65",
    return_station_name: "test return name",
    covered_distance: "403",
    duration: 344,
  },
];
