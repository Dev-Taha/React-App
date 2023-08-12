import "../../css/style-contact.css";
import HappySection from "../about-page/happy-section";
import Header from "../main-page/Header";
import LastPage from "../main-page/LastPage";
import Badge from "./badge";
import ContactForm from "./contact-form";
import Map from "./map";
import RootContact from "./root-contact";
import RootFrame from "./root-frame";
import SwiperSlide from "./swiper-slide";

function ContactPage() {
  return (
    <>
      <Header />
      <RootContact />
      <RootFrame />
      <HappySection />
      <ContactForm />
      <Map />
      <Badge />
      <SwiperSlide />
      <LastPage />
    </>
  );
}

export default ContactPage;
