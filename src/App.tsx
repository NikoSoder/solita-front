import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ITrip } from "./types/ITrip";
import { IStation } from "./types/IStation";
import apiService from "./services/api-service";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import { Loading } from "./components/Loading";
import Navbar from "./components/Navbar";

const App = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const [stations, setStations] = useState<IStation[]>([]);
  const [page, setPage] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [selected, setSelected] = useState<IStation | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tripsResponse = await apiService.getTrips();
        const stationsResponse = await apiService.getStations();
        setTrips(tripsResponse.trips);
        setTotalPageCount(tripsResponse.totalPageCount);
        stationsResponse.sort((a, b) => a.name.localeCompare(b.name));
        setSelected(stationsResponse[0]);
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
      {!trips.length || !stations.length || !selected ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/solita-front" element={<LandingPage />} />
          <Route
            path="/solita-front/home"
            element={
              <div className="bg-[url('/src/assets/light.png')] dark:bg-[url('/src/assets/dark.png')]">
                <Navbar />
                <Home
                  trips={trips}
                  setTrips={setTrips}
                  stations={stations}
                  page={page}
                  setPage={setPage}
                  totalPageCount={totalPageCount}
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>
            }
          />
        </Routes>
      )}
    </Router>
  );
};

export default App;
