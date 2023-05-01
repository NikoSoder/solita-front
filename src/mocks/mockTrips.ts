import { Trip } from "../types/ITrip";
export const mockTrips: Trip[] = [
  {
    id: "1",
    departure: "test 1 departure",
    return: "test 1 return",
    departureStationId: "10",
    departureStationName: "test departune name",
    returnStationId: "34",
    returnStationName: "test return name",
    coveredDistance: 11,
    duration: 11,
  },
  {
    id: "2",
    departure: "test 2 departure",
    return: "test 2 return",
    departureStationId: "33",
    departureStationName: "test departune name",
    returnStationId: "65",
    returnStationName: "test return name",
    coveredDistance: 403,
    duration: 344,
  },
];
