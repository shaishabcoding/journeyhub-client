import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TouristsSpots = ({ spots, admin = false }) => {
  const [allSpots, setAllSpots] = useState([]);
  useEffect(() => {
    setAllSpots(spots);
  }, [spots]);
  const handleDelete = (id) => () => {
    fetch(`http://localhost:5000/spot/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Delete successfully!",
            icon: "success",
            confirmButtonText: "Done",
          });
          const newSpots = allSpots.filter((spot) => spot._id !== id);
          setAllSpots(newSpots);
        }
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
      {allSpots.map((spot) => {
        const { _id, image, country, title, location, description } = spot;
        return (
          <div
            key={_id}
            className="rounded-lg overflow-hidden flex flex-col border border-gray-100 shadow-sm"
          >
            <div className="relative border-b border-gray-400">
              <img src={image} className="w-full aspect-video" />
              <div className="absolute top-3 right-3 flex gap-2">
                <p className="bg-green-200 rounded-md px-2 text-sm border border-gray-400">
                  {country}
                </p>
                <p className="bg-pink-200 rounded-md px-2 text-sm border border-gray-400">
                  {location}
                </p>
              </div>
            </div>
            <div className="p-3 pb-5 bg-white grow flex flex-col">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="my-3 grow">{description.slice(0, 150)}...</p>
              <div className="grid gap-3">
                <Link className="grid w-full" to={`/spot/${_id}`}>
                  <button className="btn btn-accent btn-sm">
                    View Details
                  </button>
                </Link>
                {admin && (
                  <>
                    <button className="btn btn-info btn-sm">Update</button>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={handleDelete(_id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
TouristsSpots.propTypes = {
  spots: PropTypes.array.isRequired,
  admin: PropTypes.bool,
};
export default TouristsSpots;
