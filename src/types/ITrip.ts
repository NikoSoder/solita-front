export interface IPageResponse {
  trips: ITrip[];
  totalPageCount: number;
}

export interface ITrip {
  id: number;
  departure_station_name: string;
  return_station_name: string;
  covered_distance: string;
  duration: number;
}
