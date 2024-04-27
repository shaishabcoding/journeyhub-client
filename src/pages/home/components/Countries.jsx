import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <Loading></Loading>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-0 mb-10">
        {countries.map((country) => {
          const { _id, image, country: name, description } = country;
          return (
            <div
              key={_id}
              className="rounded-lg overflow-hidden flex flex-col border dark:border-gray-400 border-gray-100 shadow-sm"
            >
              <img src={image} className="w-full aspect-video" />
              <div className="p-3 pb-5 bg-white dark:bg-gray-600 dark:text-white grow flex flex-col">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="my-3 grow dark:text-gray-300 text-gray-600">
                  {description}
                </p>
                <div className="grid gap-3">
                  <Link className="grid w-full" to={`spots/country/${name}`}>
                    <button className="btn btn-accent btn-sm dark:bg-gray-700 dark:text-white dark:border-gray-400">
                      View spots
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Countries;
