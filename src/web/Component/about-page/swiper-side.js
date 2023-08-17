import IMAGES from "../../Images/image";

function SwiperSection() {
  return (
    <>
      <div className="swiper mySwiper">
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
          <div className="swiper-slide">
            <div className="person1">
              <img src="../img/gentaleman.png" />
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
              <img src="../img/girlwithhear.png" />
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
          <div className="swiper-slide">
            <div className="person1">
              <img src="../img/gentaleman.png" />
              <h1>Person Name</h1>
              <ul>
                <li>UI/UX Designer</li>
              </ul>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}

export default SwiperSection;
