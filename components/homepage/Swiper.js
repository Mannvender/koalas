import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Mousewheel, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

const SwiperSection = ({ slides }) => {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      //   spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      //   className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSection;
