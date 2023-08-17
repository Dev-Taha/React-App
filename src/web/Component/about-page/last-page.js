import IMAGES from "../../Images/image";

function LastPageAbout() {
  return (
    <>
      <div className="last-page">
        <div className="get-started">
          <p>Ready to get started?</p>
          <button>Get started</button>
        </div>

        <div className="information">
          <div className="ele-para">
            <div className="para">
              <p>Subscribe to our newsletter</p>
            </div>

            <div className="email">
              <div className="input">
                <input
                  className="in"
                  type="email"
                  required
                  placeholder="Email address"
                />
              </div>
              <div className="ele-button">
                <button>
                  <img src={IMAGES.arrow} width="20" height="21" />
                </button>
              </div>
            </div>
          </div>

          <div className="home">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Latest News</li>
            </ul>
          </div>
          <div className="help">
            <ul>
              <li>Help</li>
              <li>EAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="country">
            <ul>
              <li>
                <img src={IMAGES.location} />
                28 Division St, New York, NY 10002, USA
              </li>
              <li>
                <img src={IMAGES.email} /> Email: Startnext@Gmail.Com
              </li>
              <li>
                <img src={IMAGES.call} />
                Phone: + (321) 984 754
              </li>
            </ul>
          </div>
        </div>

        <div className="footer">
          <div className="terms">
            <p>Terms & Conditions</p>
          </div>

          <div className="privacy">
            <p>Privacy Policy</p>
          </div>
          <div className="rights">
            <p>&copy; 2023 All rights reserved</p>
          </div>

          <div className="media">
            <a href="facebook.com">
              <img src={IMAGES.facebook} />{" "}
            </a>
            <a href="twitter.com">
              <img src={IMAGES.twitter} />{" "}
            </a>
            <a href="instagrame.com">
              <img src={IMAGES.instagram} />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LastPageAbout;
