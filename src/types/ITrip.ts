export interface ITrip {
  id: number;
  departure: string;
  return: string;
  departure_station_id: string;
  departure_station_name: string;
  return_station_id: string;
  return_station_name: string;
  covered_distance: string;
  duration: number;
}
