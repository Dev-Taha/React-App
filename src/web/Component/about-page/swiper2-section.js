import IMAGES from "../../Images/image";

function SwiperTow(params) {
  return (
    <>
      <div className="swiper mySwiper2">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="person1">
              <img src={IMAGES.girlwithhear} />
              <h1>Person Name</h1>
              <ul>
                <li>Digital Marketing</li>
              </ul>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              </p>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="person1">
              <img src="../img/girl-persone.png" />
              <h1>Person Name</h1>
              <ul>
                <li>UI/UX Designer</li>
              </ul>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="person1">
              <img src="../img/hey-man.png" />
              <h1>Person Name</h1>
              <ul>
                <li>Digital Marketing</li>
              </ul>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination2"></div>
      </div>
    </>
  );
}

export default SwiperTow;
