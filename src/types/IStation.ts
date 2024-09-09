export interface StationData {
  data: IStation[];
}

export interface IStation {
  id: string;
  nimi: string;
  osoite: string;
  x: string;
  y: string;
}

export interface IStationStats {
  departureCount: number;
  returnCount: number;
}
