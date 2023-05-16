import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ITrip } from "./types/ITrip";
import { IStation } from "./types/IStation";
import apiService from "./services/api-service";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Loading } from "./components/Loading";

const App = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const [stations, setStations] = useState<IStation[]>([]);
  const [totalPageCount, setTotalPageCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tripsResponse = await apiService.getTrips();
        const stationsResponse = await apiService.getStations();
        setTrips(tripsResponse.trips);
        setTotalPageCount(tripsResponse.totalPageCount);
        stationsResponse.sort((a, b) => a.name.localeCompare(b.name));
        setStations(stationsResponse);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-3 py-10">
        {!trips.length || !stations.length ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  trips={trips}
                  setTrips={setTrips}
                  stations={stations}
                  setStations={setStations}
                  totalPageCount={totalPageCount}
                />
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
