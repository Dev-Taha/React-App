import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import IMAGES from "../../Images/image";

function SwiperSlide2() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="person1">
            <img src={IMAGES.gentaleman} />
            <h1>Person Name</h1>
            <ul>
              <li>UI/UX Designer</li>
            </ul>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="person1">
            <img src={IMAGES.girlpersone} />
            <h1>Person Name</h1>
            <ul>
              <li>UI/UX Designer</li>
            </ul>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="person1">
            <img src={IMAGES.heyman} />
            <h1>Person Name</h1>
            <ul>
              <li>Digital Marketing</li>
            </ul>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperSlide2;
