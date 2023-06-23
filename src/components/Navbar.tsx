import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  useEffect(() => {
    document.documentElement.classList.contains("dark")
      ? setIsLightTheme(false)
      : setIsLightTheme(true);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsLightTheme(!isLightTheme);
  };
  return (
    <nav className="container fixed left-0 right-0 top-0 z-30 mx-auto flex items-center justify-between bg-slate-50/60 px-2 py-3 backdrop-blur dark:bg-slate-900/80">
      <div className="flex">
        <GlobeAltIcon className="h-8 w-8 text-neutral-800 dark:text-blue-200" />
        <Link to="/" className="text-2xl text-neutral-800 dark:text-blue-200">
          City Bike Helsinki
        </Link>
      </div>
      <div>
        {isLightTheme ? (
          <button
            data-testid="sunIcon"
            onClick={toggleTheme}
            className="rounded-full p-1 hover:bg-slate-200"
          >
            <SunIcon className="main-animation h-6 w-6 text-neutral-800" />
          </button>
        ) : (
          <button
            data-testid="moonIcon"
            onClick={toggleTheme}
            className="rounded-full p-1 hover:bg-gray-700"
          >
            <MoonIcon className="main-animation h-6 w-6 dark:text-blue-200" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
