const TouristsSpots = () => {
  const touristSpots = [
    {
      country: "Bangladesh",
      image: "https://i.ibb.co/rcBLQy0/Sundarban.jpg",
      tourist_spot: "Sundarban",
      title: "Sundarban",
      description:
        "Explore the world’s largest mangrove forest and spot the Royal Bengal tiger.",
    },
    {
      country: "Bangladesh",
      image: "https://i.ibb.co/Bwn2nbD/Cox-s-Bazar.jpg",
      tourist_spot: "Cox’s Bazar",
      title: "Cox’s Bazar",
      description:
        "Enjoy the longest natural sea beach in the world with its golden sands.",
    },
    {
      country: "Thailand",
      image: "https://i.ibb.co/0X59Xm5/Bangkok.jpg",
      tourist_spot: "Bangkok",
      title: "Bangkok",
      description:
        "Experience vibrant street life, cultural landmarks, and delicious Thai cuisine.",
    },
    {
      country: "Thailand",
      image: "https://i.ibb.co/PzCXbL5/chiang-mai.jpg",
      tourist_spot: "Chiang Mai",
      title: "Chiang Mai",
      description:
        "Discover ancient temples, local markets, and beautiful natural landscapes.",
    },
    {
      country: "Indonesia",
      image: "https://i.ibb.co/sFF2j90/Indonesia.jpg",
      tourist_spot: "Bali",
      title: "Bali",
      description:
        "Relax on stunning beaches, visit ancient temples, and explore lush landscapes.",
    },
    {
      country: "Indonesia",
      image: "https://i.ibb.co/Q96N5zw/borobudur-temple.jpg",
      tourist_spot: "Borobudur Temple",
      title: "Borobudur Temple",
      description:
        "Visit the world’s largest Buddhist temple and marvel at its intricate architecture.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
      {touristSpots.map((spot, idx) => (
        <div
          key={idx}
          className="rounded-lg overflow-hidden border border-gray-100 drop-shadow-sm"
        >
          <div className="relative border-b border-gray-400">
            <img src={spot.image} className="w-full aspect-video" />
            <div className="absolute top-3 right-3 flex gap-2">
              <p className="bg-green-200 rounded-md px-2 text-sm border border-gray-400">
                {spot.country}
              </p>
              <p className="bg-pink-200 rounded-md px-2 text-sm border border-gray-400">
                {spot.tourist_spot}
              </p>
            </div>
          </div>
          <div className="p-3 pb-5 bg-white">
            <h2 className="text-2xl font-semibold">{spot.title}</h2>
            <p className="my-3">{spot.description.slice(0, 50)}...</p>
            <button className="btn btn-accent btn-sm">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristsSpots;
