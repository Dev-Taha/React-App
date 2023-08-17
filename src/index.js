import React from "react";
import ReactDOM from "react-dom/client";
import IndexPage from "../src/web/Component/main-page/index-page";
import AboutPage from "./web/Component/about-page/about-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AboutPage />
    {/* <IndexPage /> */}
  </React.StrictMode>
);
