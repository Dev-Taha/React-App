import IMAGES from "../../Images/image";

function ImgRoot_Foure() {
  return (
    <>
      <div className="ele-img4">
        <img src={IMAGES.manage} width="232" height="178" />
        <p>Graphic Design & Branding</p>
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
    </>
  );
}

export default ImgRoot_Foure;
