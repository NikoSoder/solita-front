import axios from "axios";
import { IStation, IStationStats } from "../types/IStation";
import { IPageResponse } from "../types/ITrip";
import { IFacts } from "../types/IFacts";

const baseUrl = import.meta.env.VITE_API_URL;

const getStations = async (): Promise<IStation[]> => {
  const response = await axios.get(baseUrl + "stations");
  return response.data;
};

const getTrip = async (id: string): Promise<IStation> => {
  const response = await axios.get(`${baseUrl}trips/${id}`);
  return response.data;
};

const getStats = async (id: string): Promise<IStationStats> => {
  const response = await axios.get(`${baseUrl}trips/stats/${id}`);
  return response.data;
};

const getPage = async (page: number): Promise<IPageResponse> => {
  const response = await axios.get(`${baseUrl}trips/${page}`);
  return response.data;
};

const getInterestingFacts = async (): Promise<IFacts> => {
  const response = await axios.get(baseUrl + "statistics");
  return response.data;
};

export default {
  getStations,
  getTrip,
  getPage,
  getStats,
  getInterestingFacts,
};
