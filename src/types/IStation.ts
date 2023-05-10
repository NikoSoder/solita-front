export interface IStation {
  fid: number;
  id: string;
  nimi: string;
  namn: string;
  name: string;
  osoite: string;
  stad: string;
  operaattor: string;
  kapasiteet: string;
  x: string;
  y: string;
}

export interface IStationStats {
  departureCount: number;
  returnCount: number;
}
