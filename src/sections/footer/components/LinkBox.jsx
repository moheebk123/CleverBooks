import propTypes from "prop-types";

const LinkBox = ({ data }) => {
  return (
    <div className="link-box">
      <div className="link-heading">{data.heading}</div>
      {data.link.map((link, index) => (
        <p key={index} className="link">{link}</p>
      ))}
    </div>
  );
};

LinkBox.propTypes = {
  data: propTypes.shape().isRequired,
};

export default LinkBox;
