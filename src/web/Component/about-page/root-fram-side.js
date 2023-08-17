import IMAGES from "../../Images/image";

function RootFrameSide() {
  return (
    <>
      <div className="root-frame">
        <div className="frame-img">
          <img src={IMAGES.Frame} width="550" height="394" />
        </div>
        <div className="frame-para">
          <h1>About The Company</h1>
          <div className="color4"></div>
          <h3>
            Secure <span>IT Solution</span> For A More Secure Environment
          </h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </>
  );
}

export default RootFrameSide;
