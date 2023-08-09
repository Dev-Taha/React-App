import IMAGES from "../../Images/image";

function Swiper() {
  return (
    <>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={IMAGES.girl_light} />
          </div>
          <div className="swiper-slide">
            <img src={IMAGES.man_dark} />
          </div>
          <div className="swiper-slide">
            <img src={IMAGES.glass_dark} />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}

export default Swiper;
