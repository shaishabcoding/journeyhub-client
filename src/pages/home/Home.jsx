import { Link, useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import TouristsSpots from "../../components/TouristsSpots";
import Countries from "./components/Countries";

const Home = () => {
  const spots = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center">
          Popular Tourists Spot
        </h2>
        <TouristsSpots spots={spots.slice(0, 6)}></TouristsSpots>
        <Link to="/spots/all" className="w-fit mx-auto block my-4">
          <button className="btn btn-primary">View all</button>
        </Link>
      </div>
      <div>
        <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center">
          Countries
        </h2>
        <Countries></Countries>
      </div>
    </div>
  );
};

export default Home;
