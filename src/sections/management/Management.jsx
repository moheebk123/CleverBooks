import "./style.css";
import image1 from "../../assets/asset 16.webp";
import image2 from "../../assets/asset 17.webp";
import image3 from "../../assets/asset 18.webp";
import image4 from "../../assets/asset 19.webp";
import image5 from "../../assets/asset 20.webp";
import image6 from "../../assets/asset 21.webp";
import image7 from "../../assets/asset 22.png";
import { useState } from "react";
import Accordion from "./components/Accordion";

const Management = () => {
  const [curIndex, setCurIndex] = useState(0);

  const managementData = [
    {
      heading: "Accurate Demand Forecasting",
      detail:
        "Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.",
    },
    {
      heading: "HELIX: Workflow Automation",
      detail:
        "Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird's eye view of your supply chain, and help you do things a spreadsheet never can.",
    },
    {
      heading: "Automated Purchase Planning",
      detail:
        "Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.",
    },
    {
      heading: "Automated Distribution Planning",
      detail:
        "Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.",
    },
    {
      heading: "Easy Integration",
      detail:
        "From all online store solutions to cloud ERPs, Crest integrates seamlessly with your current tech and ops stack. What's more? Connecting them to Crest will give you actionable insights.",
    },
    {
      heading: "Custom Dashboards",
      detail:
        "Create customized dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.",
    },
    {
      heading: "Consensus Planning",
      detail:
        "Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualize the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning.",
    },
  ];

  const showAccordion = (index) => {
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach((accordion) => accordion.classList.remove("active"));
    accordions[index].classList.add("active");
    setCurIndex(index)
  };

  const managementImg = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ];

  return (
    <div className="management-section">
      <h1>Things your spreadsheet wishes it could do</h1>
      <div className="management">
        <div className="content">
          {managementData.map((management, index) => {
            return (
              <Accordion
                key={index + 1}
                heading={management.heading}
                detail={management.detail}
                index={index}
                showAccordion={showAccordion}
              />
            );
          })}
        </div>
        <div className="image">
          <img
            src={managementImg[curIndex]}
            alt={managementData[curIndex].heading}
          />
        </div>
      </div>
      <button>
        <p>View All Features</p>
      </button>
    </div>
  );
};

export default Management;
