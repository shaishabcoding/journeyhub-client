import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import TouristsSpots from "./components/TouristsSpots";

const Home = () => {
  const spots = useLoaderData();
  console.log(spots);
  return (
    <div>
      <Banner></Banner>
      <TouristsSpots {...{ spots }}></TouristsSpots>
      <h2>This is home</h2>
    </div>
  );
};

export default Home;
