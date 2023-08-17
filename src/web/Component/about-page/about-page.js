import "../../css/style-about.css";
import Header from "../main-page/Header";
import NavSide from "./Nav-Side";
import AllSide from "./all-side";
import AwsomeSide from "./awesome-side";
import HappySection from "./happy-section";
import RootFrameSide from "./root-fram-side";
import SwiperSide from "../main-page/Swiper";
import SwiperSlide2 from "./swiper-slide";
import LastPageAbout from "./last-page";

function AboutPage() {
  return (
    <>
      <Header />
      <NavSide />
      <RootFrameSide />
      <AwsomeSide />
      <SwiperSlide2 />
      <HappySection />
      <SwiperSide />
      <AllSide />
      <LastPageAbout />
    </>
  );
}

export default AboutPage;
