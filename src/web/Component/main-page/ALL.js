import IMAGES from "../../Images/image";

function ALL() {
  return (
    <>
      <section className="all">
        <div className="company">
          <h1>Company Facts</h1>
          <p>The Service We Offer Is Specifically Designed </p>
          <p>We Are Proud Of Our Design Team</p>
        </div>

        <div className="company-root">
          <div className="ele-company1">
            <img src={IMAGES.hundred} />
            <h1>1000 +</h1>
            <p>Completed Projects</p>
          </div>

          <div className="ele-company2">
            <img src={IMAGES.smile} />
            <h1>50K +</h1>
            <p className="width">Happy Customers</p>
          </div>

          <div className="ele-company3">
            <img src={IMAGES.star} />
            <h1>20 +</h1>
            <p>Awards Won</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ALL;