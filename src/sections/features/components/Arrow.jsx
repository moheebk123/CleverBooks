import propTypes from 'prop-types'

const Arrow = ({ className, imgUrl, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={imgUrl} alt={className} />
    </div>
  );
};

Arrow.propTypes = {
  className: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  onClick: propTypes.func,
}

export default Arrow;
