import IMAGES from "../../Images/image";

function ImgRoot_Tow(params) {
  return (
    <>
      <div className="ele-img2">
        <img src={IMAGES.screen} />
        <p>Website Development & Design</p>
        <ul>
          <li className="color">Word Press Development</li>
          <li>E-commerce</li>
          <li>Website Hosting</li>
          <li>UI Design</li>
          <li>Copyright</li>
          <li>Speed Optimization</li>
        </ul>
        <a className="href" href="google.com">
          Learn more{" "}
        </a>
      </div>
    </>
  );
}

export default ImgRoot_Tow;
