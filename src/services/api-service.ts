import axios from "axios";
import { Trip } from "../types/ITrip";
import { Station } from "../types/IStation";
const baseUrl = "http://localhost:3000/api/";

const getTrips = async (): Promise<Trip[]> => {
  const response = await axios.get(baseUrl + "trips");
  return response.data;
};

const getStations = async (): Promise<Station[]> => {
  const response = await axios.get(baseUrl + "stations");
  return response.data;
};

const getTrip = async (id: string): Promise<Station> => {
  const response = await axios.get(`${baseUrl}trips/${id}`);
  return response.data;
};

const getStation = async (id: string): Promise<Station> => {
  const response = await axios.get(`${baseUrl}stations/${id}`);
  return response.data;
};

export default { getTrips, getStations, getTrip, getStation };
