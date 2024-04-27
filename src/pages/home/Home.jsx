import { Link, useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import TouristsSpots from "../../components/TouristsSpots";
import Countries from "./components/Countries";
import Faq from "./components/Faq";

const Home = () => {
  const spots = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center dark:text-white">
          Popular Tourists Spot
        </h2>
        <TouristsSpots spots={spots.slice(0, 6)}></TouristsSpots>
        <Link to="/spots/all" className="w-fit mx-auto block my-4">
          <button className="btn btn-primary dark:bg-gray-600 dark:text-white dark:border-gray-400">
            View all
          </button>
        </Link>
      </div>
      <div>
        <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center dark:text-white">
          Countries
        </h2>
        <Countries></Countries>
      </div>
      <div>
        <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center dark:text-white">
          FAQ
        </h2>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
