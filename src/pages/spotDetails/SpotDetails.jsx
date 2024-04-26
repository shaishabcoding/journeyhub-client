import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const spot = useLoaderData();
  const {
    _id,
    cost,
    season,
    time,
    image,
    country,
    title,
    location,
    description,
    visitors,
    name,
  } = spot;

  return (
    <div className="m-4 mt-8">
      <h2 className="text-xl font-bold md:text-4xl text-center md:my-8 my-4">
        View Details
      </h2>
      <div
        key={_id}
        className="rounded-lg overflow-hidden flex flex-col lg:flex-row border border-gray-100 shadow-sm"
      >
        <img src={image} className="flex-1 aspect-video object-cover" />
        <div className="p-3 flex-1 pb-5 bg-white grow flex flex-col">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="flex flex-col gap-2 mt-3">
            <p>{description}</p>
            <p>
              <b>Country : </b>
              {country}
            </p>
            <p>
              <b>Location : </b> {location}
            </p>
            <p>
              <b>Cost :</b> ${cost} per day
            </p>
            <p>
              <b>Seasonality : </b> {season}
            </p>
            <p>
              <b>Time : </b> {time} {time % 2 ? "day" : "days"}
            </p>
            <p>
              <b>Visitors : </b>
              {visitors.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p>
              <b>Author : </b>
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
