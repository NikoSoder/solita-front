import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Trip } from "./types/ITrip";
import { Station } from "./types/IStation";
import apiService from "./services/api-service";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [stations, setStations] = useState<Station[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tripsResponse = await apiService.getTrips();
        setTrips(tripsResponse);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }

      try {
        const stationsResponse = await apiService.getStations();
        setStations(stationsResponse);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen bg-slate-50 dark:bg-gray-900">
      <Router>
        <Navbar />
        <div className="container mx-auto p-3">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  trips={trips}
                  setTrips={setTrips}
                  stations={stations}
                  setStations={setStations}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
