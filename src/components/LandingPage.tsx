import { Link } from "react-router-dom";
import bike from "../assets/bike.svg";
const LandingPage = () => {
  return (
    <div className="landing-animation container mx-auto flex flex-col gap-10 px-3 py-10">
      <div className="text-center">
        <h1 className="mb-1 text-5xl font-bold tracking-wide text-blue-900 dark:text-blue-200">
          Helsinki city bike
        </h1>
        <p className="text-lg text-blue-900 dark:text-blue-200">
          (Solita Dev Academy pre-assignment)
        </p>
      </div>
      <div className="flex justify-center">
        <div className="max-w-4xl border-l-2 border-l-slate-200 pl-2 text-center leading-loose dark:border-l-slate-700">
          <p className="text-slate-700 dark:text-slate-300">
            I am happy to have received an exciting project offer from Solita
            Dev Academy to develop a user interface and backend service for a
            city bike app focused on displaying data from journeys in the
            Helsinki Capital area. This opportunity provided by Solita Dev
            Academy allowed me to showcase my skills and creativity.
          </p>
        </div>
      </div>
      <div className="text-center">
        <Link
          className="rounded bg-blue-600 px-6 py-4 text-sm text-white drop-shadow-xl hover:bg-blue-500"
          to="/home"
        >
          GET STARTED
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="max-w-md">
          <img className="w-full" src={bike} alt="Bike picture" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
