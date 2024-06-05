import propTypes from "prop-types";
import arrow from "../../../assets/asset 15.svg";

const Accordion = ({ heading, detail, index, showAccordion }) => {
  return (
    <div className="accordion" onClick={() => showAccordion(index)}>
      <h2>{heading}</h2>
      <div className="detail-box">
        <p>{detail}</p>
        <div>
          Learn more <img src={arrow} alt="Right Arrow Icon" />
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  heading: propTypes.string.isRequired,
  detail: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  showAccordion: propTypes.func.isRequired,
};

export default Accordion;
