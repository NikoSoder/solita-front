import axios from "axios";
import { Trip } from "../types/ITrip";
import { Station } from "../types/IStation";
const baseUrl = "http://localhost:3001/api/";

const getTrips = async (): Promise<Trip[]> => {
  const response = await axios.get(baseUrl + "trips");
  return response.data;
};

const getStations = async (): Promise<Station[]> => {
  const response = await axios.get(baseUrl + "stations");
  return response.data;
};

export default { getTrips, getStations };
