import axios from "axios";
import { ISelectedStation, IStation, StationData } from "../types/IStation";
import { IPageResponse } from "../types/ITrip";
import { IFacts } from "../types/IFacts";
import { IPeakTimes } from "../types/IPeakTimes";

const baseUrl = import.meta.env.VITE_API_URL;

const getStations = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<StationData> => {
  const response = await axios.get(`${baseUrl}stations?page=${pageParam}`);
  return response.data;
};

const getTrip = async (id: string): Promise<IStation> => {
  const response = await axios.get(`${baseUrl}trips/${id}`);
  return response.data;
};

const getStats = async (id: string): Promise<ISelectedStation> => {
  const response = await axios.get(`${baseUrl}trips/stats/${id}`);
  return response.data;
};

const getPage = async (page?: number): Promise<IPageResponse> => {
  const response = await axios.get(`${baseUrl}trips?page=${page}`);
  return response.data;
};

const getInterestingFacts = async (): Promise<IFacts> => {
  const response = await axios.get(baseUrl + "statistics");
  return response.data;
};

const getPeakTimes = async (
  stationId: string,
  weekDay: number
): Promise<IPeakTimes[]> => {
  console.log("here");
  const response = await axios.get(
    `${baseUrl}statistics/peaktime/station/${stationId}/weekday/${weekDay}`
  );
  return response.data;
};

export default {
  getStations,
  getTrip,
  getPage,
  getStats,
  getInterestingFacts,
  getPeakTimes,
};
