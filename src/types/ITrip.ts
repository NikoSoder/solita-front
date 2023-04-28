export interface Trip {
  id: string;
  departure: string;
  return: string;
  departureStationId: string;
  departureStationName: string;
  returnStationId: string;
  returnStationName: string;
  coveredDistance: number;
  duration: number;
}
