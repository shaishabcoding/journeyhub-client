import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth/AuthProvider";
import TouristsSpots from "../../components/TouristsSpots";
import Swal from "sweetalert2";

const MySpot = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/spots/${user.email}`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, [user]);

  const handleDelete = (id) => () => {
    fetch(`http://localhost:5000/spot/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Delete successfully!",
            icon: "success",
            confirmButtonText: "Done",
          });
          const newSpots = spots.filter((spot) => spot._id !== id);
          setSpots(newSpots);
        }
      });
  };

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center">
        My Tourists Spot
      </h2>
      <TouristsSpots
        spots={spots}
        admin={true}
        handleDelete={handleDelete}
      ></TouristsSpots>
    </div>
  );
};

export default MySpot;
