import IMAGES from "../../Images/image";

function Nav() {
  return (
    <>
      <nav>
        <div className="root_side">
          <div className="el_side1">
            <section>
              Secure <span>IT Solutions</span> for A more Secure Environment
            </section>
            <article>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </article>
            <button className="btn">Get Started</button>
          </div>
          <div className="el_side2">
            <aside>
              <img src={IMAGES.aside} width="547" height="477" />
            </aside>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
