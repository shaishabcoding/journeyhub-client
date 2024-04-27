import Loading from "../../components/Loading";
import TouristsSpots from "../../components/TouristsSpots";
import { useEffect, useState } from "react";

const AllSpots = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("none");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/spots?sort=" + sort)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      });
  }, [sort]);
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold md:text-4xl my-8 lg:my-16 text-center dark:text-white">
        All Tourists Spot
      </h2>
      <div className="flex items-center justify-center gap-4  mb-8 lg:mb-16 ">
        <select
          data-aos="zoom-in-left"
          data-aos-delay="400"
          onChange={(e) => setSort(e.target.value)}
          className="select bg-green-400 rounded-lg  outline-none text-white dark:bg-gray-700 dark:text-white dark:border-gray-400"
        >
          <option hidden>Sort</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
          <option value="none">Default</option>
        </select>
      </div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <TouristsSpots spots={spots}></TouristsSpots>
      )}
    </div>
  );
};

export default AllSpots;
