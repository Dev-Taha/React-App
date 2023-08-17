function RootImg() {
  return (
    <>
      <div className="img-root">
        <div className="ele-img1">
          <img src="../img/micro.png" />
          <p className="para">Digital Marketing</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <ul>
            <li>Wordpress Development</li>
            <li>Ecommerce</li>
            <li>Website Hosting</li>
            <li>UI Design</li>
          </ul>
          <a className="href" href="google.com">
            Learn more{" "}
          </a>
        </div>

        <div className="ele-img2">
          <img src="../img/screen.png" />
          <p className="para">Website Development & Design</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <ul>
            <li className="color">Word Press Development</li>
            <li>E-commerce</li>
            <li>Website Hosting</li>
          </ul>
          <a className="href" href="google.com">
            Learn more{" "}
          </a>
        </div>

        <div className="ele-img3">
          <img src="../img/man.png" width="232" height="178" />
          <p className="para">Software</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <ul>
            <li>Setting Up CRM</li>
            <li>Software recommendation for a specific business type</li>
          </ul>
          <a href="google.com" className="href">
            Learn more 
          </a>
        </div>

        <div className="ele-img4">
          <img src="../img/manage.png" width="232" height="178" />
          <p className="para">Graphic Design & Branding</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <ul>
            <li>Brand Guidelines</li>
            <li>Brand Identity</li>
            <li>Color Pallet</li>
            <li>Social Media Designs</li>
            <li>Printable</li>
          </ul>
          <a href="google.com" className="href">
            Learn more
          </a>
        </div>
      </div>
    </>
  );
}

export default RootImg;