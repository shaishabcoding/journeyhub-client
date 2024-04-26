import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth/AuthProvider";
import TouristsSpots from "../../components/TouristsSpots";

const MySpot = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/spots/${user.email}`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);

  console.log(spots);
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center">
        My Tourists Spot
      </h2>
      <TouristsSpots spots={spots} admin={true}></TouristsSpots>
    </div>
  );
};

export default MySpot;
