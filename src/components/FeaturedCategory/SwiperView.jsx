import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperView = ({ data, prevRef, nextRef }) => {
  return (
    <Swiper
      spaceBetween={30}
    //   loop={true}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onSwiper={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      modules={[Pagination, Navigation]}
      breakpoints={{
        375: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
        1280: { slidesPerView: 8, spaceBetween: 40 },
      }}
      className="mySwiper"
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx} className="flex flex-col items-center mt-8">
          <div className="flex flex-col items-center">
            <Image
              width={200}
              height={200}
              src={item.image}
              alt={item.title}
              className="w-40 h-40 rounded-full object-cover"
            />
            <p className="text-center mt-2 text-lg font-medium">
              {item.title}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperView;
