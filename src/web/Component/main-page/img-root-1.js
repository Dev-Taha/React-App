import IMAGES from "../../Images/image";

function ImgRoot_One() {
  return (
    <>
      <div className="ele-img1">
        <img src={IMAGES.micro_interface} />
        <p>Digital Marketing</p>
        <ul>
          <li>Google Ads</li>
          <li>Facebook Ads</li>
          <li>Instagram Ads</li>
          <li>Search Engine Optimization</li>
          <li>Influencer Marketing</li>
        </ul>
        <a className="href" href="google.com">
          Learn more
        </a>
      </div>
    </>
  );
}

export default ImgRoot_One;
