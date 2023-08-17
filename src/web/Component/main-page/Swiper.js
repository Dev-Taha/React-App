import IMAGES from "../../Images/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation, Pagination } from "swiper/modules";

function SwiperSide() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              className="img-edit"
              src={IMAGES.girl_light}
              style={{ width: "50%" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              className="img-edit"
              src={IMAGES.man_dark}
              style={{ width: "50%" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              className="img-edit"
              src={IMAGES.glass_dark}
              style={{ width: "50%" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperSide;
