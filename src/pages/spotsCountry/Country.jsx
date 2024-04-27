import { useLoaderData, useParams } from "react-router-dom";
import TouristsSpots from "../../components/TouristsSpots";

const Country = () => {
  const spots = useLoaderData();
  const { country } = useParams();
  console.log(spots);
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center">
        {country}
      </h2>
      <TouristsSpots spots={spots}></TouristsSpots>
    </div>
  );
};

export default Country;
