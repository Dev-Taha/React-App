function SwiperSlide() {
  return (
    <>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../img/mao.png" />
          </div>
          <div class="swiper-slide">
            <img src="../img/maps229.png" />
          </div>
          <div class="swiper-slide">
            <img src="../img/mao.png" />
          </div>
          <div class="swiper-slide">
            <img src="../img/map227.png" />
          </div>
          <div class="swiper-slide">
            <img src="../img/maps229.png" />
          </div>
          <div class="swiper-slide">
            <img src="../img/maps22.png" />
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        <div class="autoplay-progress">
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