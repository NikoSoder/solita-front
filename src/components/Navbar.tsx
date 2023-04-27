import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white p-5 shadow dark:bg-slate-800 dark:text-gray-300">
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
