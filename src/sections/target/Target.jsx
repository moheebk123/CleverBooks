import "./style.css";
import what from "../../assets/asset 3.svg";
import when from "../../assets/asset 4.svg";
import how from "../../assets/asset 5.svg";
import where from "../../assets/asset 6.svg";
import Detail from "./components/Detail";

const Target = () => {
  const targets = [
    {
      imgUrl: what,
      heading: "What to order",
      detail:
        "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
    },
    {
      imgUrl: when,
      heading: "When to order",
      detail:
        "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
    },
    {
      imgUrl: how,
      heading: "How much of stock",
      detail:
        "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.",
    },
    {
      imgUrl: where,
      heading: "Where to place",
      detail:
        "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
    },
  ];

  return (
    <div className="target-section">
      <h1>Four key questions answered by Crest</h1>
      <div className="target-box">
        {
          targets.map((target, index) => {
            return <Detail key={index} imgUrl={target.imgUrl} heading={target.heading} detail={target.detail} />
          })
        }
      </div>
    </div>
  );
};

export default Target;
