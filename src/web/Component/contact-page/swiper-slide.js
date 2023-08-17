function SwiperSlide() {
  return (
    <>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="../img/mao.png" />
          </div>
          <div className="swiper-slide">
            <img src="../img/maps229.png" />
          </div>
          <div className="swiper-slide">
            <img src="../img/mao.png" />
          </div>
          <div className="swiper-slide">
            <img src="../img/map227.png" />
          </div>
          <div className="swiper-slide">
            <img src="../img/maps229.png" />
          </div>
          <div className="swiper-slide">
            <img src="../img/maps22.png" />
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
        <div className="autoplay-progress">
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default SwiperSlide;