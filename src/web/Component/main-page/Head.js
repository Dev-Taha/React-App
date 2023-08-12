import AboutPage from "../about-page/about-page";
import ContactPage from "../contact-page/contact-page";
import ServicePage from "../service-page/service-page";
import indexPage from "./index-page";
import LatestPage from "../latest-page/lates-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOutHeader from "./layout-header";
import ReactDOM from "react-dom/client";

function Head() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOutHeader />}>
          <Route path="home" element={indexPage} />
          <Route path="about" element={AboutPage} />
          <Route path="services" element={ServicePage} />
          <Route path="contact-us" element={ContactPage} />
          <Route path="latest-news" element={LatestPage} />
          {/* <Route
              path="*"
              element={
                <>
                  <h1>Fucking error</h1>
                </>
              }
            /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Head;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Head />);
