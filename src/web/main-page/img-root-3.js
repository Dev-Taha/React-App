import IMAGES from "../../Images/image";

function ImgRoot_Three() {
  return (
    <>
      <div className="ele-img3">
        <img src={IMAGES.man} width="232" height="178" />
        <p>Software</p>
        <ul>
          <li>Setting Up CRM</li>
          <li>Software recommendation </li>
          <li>for a specific business type</li>
        </ul>
        <a href="google.com" className="href">
          Learn more{" "}
        </a>
      </div>
    </>
  );
}

export default ImgRoot_Three;
