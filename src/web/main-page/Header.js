import IMAGES from "../../Images/image";

function Header() {
  return (
    <>
      <header>
        <div className="root">
          <img src={IMAGES.logo} width="72" height="52" />
          <div className="element1">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="latest-news.html">Latest News</a>
              </li>
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
              <li>
                <button className="ele-support">Support</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
