import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "react-device-detect";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
// import Swiper core and required modules
import { Mousewheel, Pagination } from "swiper";

const SwiperSection = ({ slides }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Mousewheel, Pagination]}
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSection;
