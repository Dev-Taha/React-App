import "../../css/style.css";
import ALL from "./ALL";
import Asked from "./Asked";
import Facts from "./Facts";
import Happy from "./Happy";
import Header from "./Header";
import ImageFact from "./ImageFact";
import LastPage from "./LastPage";
import Projects from "./Projects";
import RootReact from "./RootReact";
import Service from "./Service";
import StrategyRoot from "./StrategyRoot";
import SwiperSide from "./Swiper";
import ImgProjects from "./img-projects";
import ImgRoot from "./img-root";
import Nav from "./nav";
import Strategy from "./strategy";

function indexPage() {
  return (
    <>
      <Header />
      <Nav />
      <Service />
      <ImgRoot />
      <Projects />
      <ImgProjects />
      <Strategy />
      <StrategyRoot />
      <ALL />
      <Happy />
      <SwiperSide />
      <Asked />
      <RootReact />
      <Facts />
      <ImageFact />
      <LastPage />
    </>
  );
}

export default indexPage;
