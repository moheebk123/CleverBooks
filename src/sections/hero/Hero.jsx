import "./style.css";
import background from "../../assets/asset 36.svg";
import heroImage from "../../assets/asset 1.svg";
import buttonImg from "../../assets/asset 0.svg";

const Hero = () => {
  return (
    <div id="hero">
      <img src={background} />
      <div className="container">
        <div className="content">
          <h1>
            Every order <br />
            fulfilled, <span>on time.</span>
          </h1>
          <p>
            Eliminate overstocking and under-stocking with Crest. Built by
            supply-chain experts, it brings the same technology used by large
            global brands to power fast-growing startups. In short, we make
            supply meet demand, and then help you grow both.
          </p>
          <button>
            <p>Get started with CleverBooks</p>
            <img src={buttonImg} alt="Button Image" />
          </button>
        </div>
        <div className="image">
          <img src={heroImage} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
