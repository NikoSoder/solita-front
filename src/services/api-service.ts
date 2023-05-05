import axios from "axios";
import { ITrip } from "../types/ITrip";
import { IStation } from "../types/IStation";
import { IPageResponse } from "../types/ITrip";
const baseUrl = "http://localhost:3000/api/";

const getTrips = async (): Promise<IPageResponse> => {
  const response = await axios.get(baseUrl + "trips");
  return response.data;
};

const getStations = async (): Promise<IStation[]> => {
  const response = await axios.get(baseUrl + "stations");
  return response.data;
};

const getTrip = async (id: string): Promise<IStation> => {
  const response = await axios.get(`${baseUrl}trips/${id}`);
  return response.data;
};

const getStation = async (id: string): Promise<IStation> => {
  const response = await axios.get(`${baseUrl}stations/${id}`);
  return response.data;
};

const getPage = async (page: number): Promise<IPageResponse> => {
  const response = await axios.get(`${baseUrl}trips/${page}`);
  return response.data;
};

export default { getTrips, getStations, getTrip, getStation, getPage };
