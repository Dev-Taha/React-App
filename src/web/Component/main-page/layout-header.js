import { Outlet, Link } from "react-router-dom";
import IMAGES from "../../Images/image";

function LayOutHeader() {
  return (
    <>
      <header>
        <div className="root">
          <img src={IMAGES.logo} width="72" height="52" />
          <div className="element1">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/latest-news">Latest News</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <button className="ele-support">Support</button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default LayOutHeader;
