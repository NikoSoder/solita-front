import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    document.documentElement.classList.contains("dark")
      ? setTheme(false)
      : setTheme(true);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme(!theme);
  };
  return (
    <nav
      className="flex items-center justify-between bg-center px-2 py-2
    dark:text-gray-300 sm:px-10"
    >
      <div className="flex">
        <GlobeAltIcon className="h-8 w-8 text-sky-700" />
        <Link
          to="/solita-front"
          className="bg-gradient-to-r from-sky-700 to-teal-800 bg-clip-text
          text-2xl tracking-wide text-transparent dark:to-teal-600"
        >
          City Bike Helsinki
        </Link>
      </div>

      <div>
        {theme ? (
          <button
            data-testid="sunIcon"
            onClick={toggleTheme}
            className="rounded-full p-1 hover:bg-slate-200"
          >
            <SunIcon className="main-animation h-6 w-6" />
          </button>
        ) : (
          <button
            data-testid="moonIcon"
            onClick={toggleTheme}
            className="rounded-full p-1 hover:bg-gray-700"
          >
            <MoonIcon className="main-animation h-6 w-6" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
