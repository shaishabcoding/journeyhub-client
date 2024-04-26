import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co/4JK0V44/banner1.jpg",
      title: "Explore Destinations",
      description:
        "Discover your next adventure! Explore diverse destinations and find the perfect getaway tailored to your interests.",
      button: "View Destinations",
    },
    {
      image: "https://i.ibb.co/k2BVGFk/banner2.jpg",
      title: "Sustainable Tourism",
      description:
        "Travel responsibly with our sustainable tourism options. Support local communities and preserve nature for future generations.",
      button: "Learn More",
    },
    {
      image: "https://i.ibb.co/GHvYzDr/banner3.jpg",
      title: "Plan Your Trip",
      description:
        "Plan your dream vacation with ease! Our comprehensive tools and resources help you create an unforgettable travel experience.",
      button: "Start Planning",
    },
  ];

  return (
    <div className="p-4 lg:px-0">
      <Swiper
        className="md:aspect-video bg-gray-200 rounded-lg text-white"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            style={{ backgroundImage: `url(${slide.image})` }}
            key={idx}
            className=" bg-cover bg-center"
          >
            <div className="flex items-center justify-center flex-col h-full bg-black/30 gap-4 md:gap-6 px-6 md:px-20 py-10 text-center">
              <h4 className="text-xl md:text-4xl font-bold">{slide.title}</h4>
              <p className="">{slide.description}</p>
              <button className="btn btn-sm md:btn-md">{slide.button}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
