import arrow from "../../assets/asset 9.svg";
import purpose from "../../assets/asset 27.svg";
import domain from "../../assets/asset 28.png";
import focus from "../../assets/asset 29.svg";
import easyUse from "../../assets/asset 30.svg";
import Feature from "./components/Feature";
import Arrow from "./components/Arrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Features = () => {
  const features = [
    {
      imgUrl: purpose,
      heading: "Purpose-built & ever-improving tech",
      detail:
        "Our demand forecasting engine has been meticulously-built, while our ML engine constantly trains on years of data and is ever-evolving.",
    },
    {
      imgUrl: domain,
      heading: "Deep domain expertise",
      detail:
        "Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.",
    },
    {
      imgUrl: focus,
      heading: "A focus on KPIs that matter",
      detail:
        "Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.",
    },
    {
      imgUrl: easyUse,
      heading: "Ease of use, for everyone",
      detail:
        "With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    lazyLoad: true,
    nextArrow: <Arrow imgUrl={arrow} className="next-arrow" />,
    prevArrow: <Arrow imgUrl={arrow} className="prev-arrow" />,
  };

  return (
    <div className="features-section">
      <div className="container">
        <h1>Get CleverBooks and get...</h1>
        <Slider {...settings}>
          {features.map((feature, index) => {
            return (
              <Feature
                key={index}
                imgUrl={feature.imgUrl}
                heading={feature.heading}
                detail={feature.detail}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Features;
