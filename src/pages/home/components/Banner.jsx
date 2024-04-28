import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://journey-hub-server.vercel.app/slides")
      .then((res) => res.json())
      .then((data) => {
        setSlides(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading></Loading>}
      {slides.length > 0 && (
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
                className="bg-cover bg-center"
              >
                <div className="flex items-center justify-center flex-col h-full bg-black/30 gap-4 md:gap-6 px-6 md:px-20 py-10 text-center">
                  <h4 className="text-xl md:text-4xl font-bold">
                    {slide.title}
                  </h4>
                  <p>{slide.description}</p>
                  <button className="btn btn-sm md:btn-md dark:bg-gray-500 dark:text-white dark:border-gray-400">
                    {slide.button}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Banner;
