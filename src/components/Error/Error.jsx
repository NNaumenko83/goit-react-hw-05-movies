import PropTypes from 'prop-types';
const Error = ({ errorMessage }) => {
  return (
    <h1>
      Ooops!
      {errorMessage}
    </h1>
  );
};

export default Error;

Error.propTypes = {
  errorMessage: PropTypes.any,
};
