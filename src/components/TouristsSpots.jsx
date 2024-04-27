import PropTypes from "prop-types";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const TouristsSpots = ({ spots, admin = false, handleDelete = () => {} }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
      {spots.length < 1 ? (
        <p className="text-lg dark:text-white">
          No spot found 😫
          <Link
            to="/spots/new"
            className="btn btn-sm btn-info ml-2 dark:bg-gray-700 dark:text-white dark:border-gray-400"
          >
            Add new spot
          </Link>
        </p>
      ) : (
        spots.map((spot) => {
          const { _id, image, country, title, cost, description } = spot;
          return (
            <Zoom key={_id}>
              <div className="rounded-lg h-full overflow-hidden flex flex-col border dark:border-gray-400 border-gray-100 shadow-sm">
                <div className="relative border-b border-gray-400">
                  <img src={image} className="w-full aspect-video" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <p className="bg-green-200 rounded-md px-2 text-sm border border-gray-400">
                      {country}
                    </p>
                    <p className="bg-pink-200 rounded-md px-2 text-sm border border-gray-400">
                      Cost ${cost}
                    </p>
                  </div>
                </div>
                <div className="p-3 pb-5 bg-white dark:bg-gray-600 dark:text-white grow flex flex-col">
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="my-3 grow dark:text-gray-300 text-gray-600">
                    {description.slice(0, 150)}...
                  </p>
                  <div className="grid gap-3">
                    <Link className="grid w-full" to={`/spot/${_id}`}>
                      <button className="btn btn-accent btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400">
                        View Details
                      </button>
                    </Link>
                    {admin && (
                      <>
                        <Link
                          className="grid w-full"
                          to={`/spot/update/${_id}`}
                        >
                          <button className="btn btn-info btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400">
                            Update
                          </button>
                        </Link>
                        <button
                          className="btn btn-error btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400"
                          onClick={handleDelete(_id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Zoom>
          );
        })
      )}
    </div>
  );
};
TouristsSpots.propTypes = {
  spots: PropTypes.array.isRequired,
  admin: PropTypes.bool,
  handleDelete: PropTypes.func,
};
export default TouristsSpots;
