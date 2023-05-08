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
    <nav className="flex items-center justify-around bg-white p-5 shadow dark:bg-slate-800 dark:text-gray-300">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {theme ? (
          <SunIcon
            onClick={toggleTheme}
            className="main-animation h-6 w-6 cursor-pointer"
          />
        ) : (
          <MoonIcon
            onClick={toggleTheme}
            className="main-animation h-6 w-6 cursor-pointer"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
