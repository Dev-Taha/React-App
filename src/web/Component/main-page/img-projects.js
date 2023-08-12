import IMAGES from "../../Images/image";

function ImgProjects() {
  return (
    <>
      <div className="img-projects">
        <div className="img-projects1">
          <img src={IMAGES.brand} />
          <p>Project Name</p>
          <ul>
            <li>UI UX</li>
          </ul>
        </div>

        <div className="img-projects2">
          <img src={IMAGES.career} />
          <p>Project Name</p>
          <ul>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div className="img-projects3">
          <img src={IMAGES.noon} />
          <p>Project Name</p>
          <ul>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div className="img-projects4">
          <img src={IMAGES.phone} />
          <p>Project Name</p>
          <ul>
            <li>Digital Marketing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ImgProjects;
