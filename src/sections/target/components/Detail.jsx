import propTypes from "prop-types";

const Detail = ({ imgUrl, heading, detail }) => {
  return (
    <div className="target">
      <img src={imgUrl} alt="Target Icon" />
      <h3>{heading}</h3>
      <p>{detail}</p>
    </div>
  );
};

Detail.propTypes = {
  imgUrl: propTypes.string.isRequired,
  heading: propTypes.string.isRequired,
  detail: propTypes.string.isRequired,
};

export default Detail;
