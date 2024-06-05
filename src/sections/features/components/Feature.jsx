import propTypes from "prop-types";

const Feature = ({ imgUrl, heading, detail }) => {
  return (
    <div className="feature">
      <div className="image">
        <img src={imgUrl} alt="Feature Icon" />
      </div>
      <div className="content">
        <h2>{heading}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
};

Feature.propTypes = {
  imgUrl: propTypes.string.isRequired,
  heading: propTypes.string.isRequired,
  detail: propTypes.string.isRequired,
};

export default Feature;
