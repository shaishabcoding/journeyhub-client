import { Link, useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import TouristsSpots from "../../components/TouristsSpots";
import Countries from "./components/Countries";
import Faq from "./components/Faq";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import NewsLetter from "./components/NewsLetter";

const Home = () => {
  const spots = useLoaderData();
  return (
    <div>
      <Zoom>
        <Banner></Banner>
      </Zoom>
      <div>
        <Bounce>
          <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center dark:text-white">
            Popular Tourists Spot
          </h2>
        </Bounce>
        <TouristsSpots spots={spots.slice(0, 6)}></TouristsSpots>
        <Bounce>
          <Link to="/spots/all" className="w-fit mx-auto block my-4">
            <button className="btn btn-primary dark:bg-gray-600 dark:text-white dark:border-gray-400">
              View all
            </button>
          </Link>
        </Bounce>
      </div>
      <div>
        <Bounce>
          <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center dark:text-white">
            Countries
          </h2>
        </Bounce>
        <Countries></Countries>
      </div>
      <div>
        <Bounce>
          <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center dark:text-white">
            FAQ
          </h2>
        </Bounce>
        <Faq></Faq>
        <Fade>
          <NewsLetter></NewsLetter>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
