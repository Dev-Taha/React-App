import IMAGES from "../../Images/image";

function StrategyRoot() {
  return (
    <>
      <div className="strategy-root">
        <div className="ele-strategy1">
          <p className="num1">1</p>
          <img src={IMAGES.num1} width="254" height="379" />
        </div>

        <div className="ele-strategy2">
          <p className="num2">2</p>
          <img src={IMAGES.num2} width="254" height="379" />
        </div>

        <div className="ele-strategy3">
          <p className="num3">3</p>
          <img src={IMAGES.num3} width="254" height="379" />
        </div>

        <div className="ele-strategy4">
          <p className="num4">4</p>
          <img src={IMAGES.num4} width="254" height="379" />
        </div>
      </div>
    </>
  );
}

export default StrategyRoot;