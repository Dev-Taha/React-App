import "../../css/style-about.css";
import Header from "../main-page/Header";
import LastPage from "../main-page/LastPage";
import AllSide from "./all-side";
import AwsomeSide from "./awesome-side";
import HappySection from "./happy-section";
import RootFrameSide from "./root-fram-side";
import SwiperSection from "./swiper-side";
import SwiperTow from "./swiper2-section";

function AboutPage() {
  return (
    <>
      <Header />
      <RootFrameSide />
      <AwsomeSide />
      <SwiperSection />
      <HappySection />
      <SwiperTow />
      <AllSide />
      <LastPage />
    </>
  );
}

export default AboutPage;
