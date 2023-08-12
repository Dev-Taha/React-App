import "../../css/style-services.css";
import Header from "../main-page/Header";
import LastPage from "../main-page/LastPage";
import RootImg from "./root-img";
import RootService from "./root-service";

function ServicePage() {
  return (
    <>
      <Header />
      <RootService />
      <RootImg />
      <LastPage />
    </>
  );
}
export default ServicePage;
