export interface IFacts {
  busiestStations: IMostPopularStation[];
}

export interface IMostPopularStation {
  station_id: string;
  station_name: string;
  num_journeys: string;
}
