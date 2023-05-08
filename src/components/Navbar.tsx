import { Link } from "react-router-dom";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme(!theme);
  };
  return (
    <nav className="flex items-center justify-around bg-white bg-[url('/src/assets/light.png')] bg-center p-2 dark:bg-slate-800 dark:bg-[url('/src/assets/dark.png')] dark:text-gray-300">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {theme ? (
          <button
            onClick={toggleTheme}
            className="rounded-full p-1 hover:bg-slate-200"
          >
            <SunIcon className="main-animation h-6 w-6" />
          </button>
        ) : (
          <button
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
