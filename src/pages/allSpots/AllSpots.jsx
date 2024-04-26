import { useLoaderData } from "react-router-dom";
import TouristsSpots from "../../components/TouristsSpots";

const AllSpots = () => {
  const spots = useLoaderData();
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center">
        All Tourists Spot
      </h2>
      <TouristsSpots spots={spots}></TouristsSpots>
    </div>
  );
};

export default AllSpots;
