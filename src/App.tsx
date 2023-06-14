import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import { ITrip } from "./types/ITrip";
import { IStation } from "./types/IStation";
import apiService from "./services/api-service";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { IMostPopularStation } from "./types/IFacts";
import { Loading } from "./components/Loading";
import { checkUserTheme } from "./utils/theme";

const App = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const [stations, setStations] = useState<IStation[]>([]);
  const [page, setPage] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [selected, setSelected] = useState<IStation | null>(null);
  const [mostPopularStations, setMostPopularStations] = useState<
    IMostPopularStation[]
  >([]);
  const [selectedPageLimit, setSelectedPageLimit] = useState("10");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        checkUserTheme();
        const stationsResponse = await apiService.getStations();
        stationsResponse.sort((a, b) => a.name.localeCompare(b.name));
        setSelected(stationsResponse[0]);
        const tripsResponse = await apiService.getPage();
        const mostPopularStationsResponse =
          await apiService.getInterestingFacts();
        setTrips(tripsResponse.trips);
        setTotalPageCount(tripsResponse.totalPageCount);
        setStations(stationsResponse);
        setMostPopularStations(mostPopularStationsResponse.busiestStations);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };

    fetchData();
  }, []);

  const handlePageLimitChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLoading(true);
    setSelectedPageLimit(event.target.value);
    const pageResponse = await apiService.getPage(0, event.target.value);
    setTrips(pageResponse.trips);
    setPage(0);
    setTotalPageCount(pageResponse.totalPageCount);
    setLoading(false);
  };

  if (!selected) {
    return <Loading />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <div className="min-h-screen from-slate-800 to-slate-900 dark:bg-gradient-to-t">
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
                mostPopularStations={mostPopularStations}
                handlePageLimitChange={handlePageLimitChange}
                selectedPageLimit={selectedPageLimit}
                loading={loading}
                setLoading={setLoading}
              />
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
