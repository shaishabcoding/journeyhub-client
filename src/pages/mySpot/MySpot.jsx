import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth/AuthProvider";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const MySpot = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://journey-hub-server.vercel.app/spots/${user.email}`)
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
        fetch(`https://journey-hub-server.vercel.app/spot/${id}`, {
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
      <Bounce>
        <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center dark:text-white">
          My Tourists Spot
        </h2>
      </Bounce>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="overflow-x-auto mx-4 lg:mx-0">
          <table className="table table-xs md:table-md table-pin-rows table-pin-cols table-zebra">
            <thead>
              <tr>
                <th></th>
                <td>Spot Name</td>
                <td>Country</td>
                <td>Location</td>
                <td>Season</td>
                <td>Cost</td>
                <td>Visitors</td>
              </tr>
            </thead>
            <tbody>
              {spots.map((spot, idx) => {
                const { _id, cost, season, country, title, visitors } = spot;
                return (
                  <tr key={_id}>
                    <th>{idx + 1}</th>
                    <td>{title}</td>
                    <td>{country}</td>
                    <td>
                      {visitors
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </td>
                    <td>{season}</td>
                    <td>${cost}</td>
                    <td>{visitors}</td>
                    <td>
                      <Link className="grid w-full" to={`/spot/update/${_id}`}>
                        <button className="btn btn-xs btn-info md:btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400">
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-xs btn-error md:btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400"
                        onClick={handleDelete(_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MySpot;
