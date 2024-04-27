import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth/AuthProvider";
import TouristsSpots from "../../components/TouristsSpots";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";

const MySpot = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/spots/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
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
      }
    });
  };

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center">
        My Tourists Spot
      </h2>
      {loading && <Loading></Loading>}
      <TouristsSpots
        spots={spots}
        admin={true}
        handleDelete={handleDelete}
      ></TouristsSpots>
    </div>
  );
};

export default MySpot;
