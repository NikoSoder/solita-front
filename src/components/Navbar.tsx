import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [theme, setTheme] = useState(true);
  //
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme(!theme);
  };
  return (
    <nav
      className="relative flex items-center justify-between bg-center px-2 py-2
    dark:text-gray-300 sm:px-10"
    >
      <GlobeAltIcon className="absolute left-3 top-0 h-8 w-8 text-sky-700" />
      <div>
        <h1
          className="logo-font ms-8 bg-gradient-to-r from-sky-700 to-teal-800 bg-clip-text 
        text-xl tracking-wider text-transparent dark:to-teal-600 sm:ms-0 sm:text-2xl"
        >
          City Bike Helsinki
        </h1>
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
