import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import apiService from "./services/api-service";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { IMostPopularStation } from "./types/IFacts";
import { checkUserTheme } from "./utils/theme";
import Footer from "./components/Footer";

const App = () => {
  const [mostPopularStations, setMostPopularStations] = useState<
    IMostPopularStation[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        checkUserTheme();
        const mostPopularStationsResponse =
          await apiService.getInterestingFacts();
        // setStations(stationsResponse);
        setMostPopularStations(mostPopularStationsResponse.busiestStations);
      } catch (error) {
        throw new Error("Failed to fetch journeys and stations");
      }
    };

    fetchData();
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home mostPopularStations={mostPopularStations} />
            </>
          }
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
