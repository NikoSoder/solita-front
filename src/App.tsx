import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { checkUserTheme } from "./utils/theme";
import Footer from "./components/Footer";

const App = () => {
  checkUserTheme();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
