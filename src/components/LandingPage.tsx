import { Link } from "react-router-dom";
import sitePicture from "../assets/site.png";
const LandingPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-center">
        <h1 className="mb-1 text-5xl font-bold tracking-wide text-blue-900">
          Helsinki city bike app
        </h1>
        <p className="text-lg text-blue-900">
          (Solita Dev Academy pre-assignment)
        </p>
      </div>
      <div className="flex justify-center">
        <div className="max-w-4xl border-l-2 border-l-slate-200 text-center leading-loose">
          <p className="text-slate-700">
            <b className="tracking-wider">I am delighted</b> to have received an
            exciting project offer from Solita Dev Academy to develop a user
            interface and backend service for a city bike app focused on
            displaying data from journeys in the Helsinki Capital area. This
            opportunity provided by Solita Dev Academy allows me to showcase my
            skills and creativity.
          </p>
        </div>
      </div>
      <div className="text-center">
        <Link
          className="rounded bg-blue-600 px-6 py-4 text-sm text-white drop-shadow-xl
         hover:bg-blue-500"
          to="/home"
        >
          GET STARTED
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="max-w-2xl">
          <img src={sitePicture} alt="Picture of the site" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
