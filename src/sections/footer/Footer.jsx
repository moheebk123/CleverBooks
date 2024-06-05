import "./style.css";
import LinkBox from "./components/LinkBox";
import logo from "../../assets/asset 33.svg";
import goTop from "../../assets/asset 34.svg";
import twitter from "../../assets/asset 23.svg";
import facebook from "../../assets/asset 24.svg";
import instagram from "../../assets/asset 25.svg";
import linkedin from "../../assets/asset 26.svg";

const Footer = () => {
  const links = [
    {
      heading: "Explore",
      link: ["Product", "Pricing", "Customer Stories", "Career"],
    },
    {
      heading: "Learn",
      link: ["About us", "Blog"],
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="logo-link-container">
          <div className="logo-container">
            <div className="logo-box">
              <img src={logo} alt="Brand Logo" />
              <h1>CleverBooks</h1>
            </div>
            <div className="about">
              CleverBooks is an AI-powered supply chain software that provides
              companies tools for demand forecasting, inventory planning and
              more. This helps them have the right amount of stock, optimize
              space and fulfil every order.
            </div>
          </div>
          <div className="link-container">
            {links.map((linkData, index) => {
              return <LinkBox key={index} data={linkData} />;
            })}
            <div className="link-box">
              <div className="link-heading">Contact CleverBooks</div>
              <p className="link">sales@getcrest.ai</p>
              <p>
                Registered Office:
                <br />
                1507, Incubex, 11th cross road, 19th Main Road, Bengaluru,
                India. 560102
              </p>
              <p>
                Corporate Office:
                <br />
                291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR
                Layout, Bengaluru, India. 560102
              </p>
              <div className="social-links">
                <img src={twitter} alt="Twitter" />
                <img src={facebook} alt="Facebook" />
                <img src={instagram} alt="Instagram" />
                <img src={linkedin} alt="LinkedIn" />
              </div>
            </div>
          </div>
        </div>

        <div className="go-top">
          <a href="#hero">
            <img src={goTop} alt="Go to Top" />
          </a>
        </div>

        <div className="copyright">
          <div className="copyright-link-box">
            <div>Copyright 2024 CleverBooks</div>
            <div className="link">Terms of Services</div>
            <div className="link">Privacy Policy</div>
          </div>
          <div>Conifer Innovations Private Limited</div>
          <div>CIN: U72900KA2022PTC163144</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
