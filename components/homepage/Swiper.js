import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "react-device-detect";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Mousewheel, Pagination } from "swiper";
// install Swiper modules
// SwiperCore.use([Mousewheel, Pagination]);

const SwiperSection = ({ slides }) => {
  return (
    !isMobile && (
      <Swiper
        modules={[MouseWheel, Pagination]}
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
    )
  );
};

export default SwiperSection;
