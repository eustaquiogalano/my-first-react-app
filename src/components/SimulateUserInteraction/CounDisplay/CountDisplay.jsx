// This component is for PropTypes practice

import PropTypes from "prop-types";

export default function CountDisplay(prop) {
  return <h2>{prop.count}</h2>;
}

CountDisplay.propTypes = {
  count: PropTypes.number.isRequired,
};

CountDisplay.defaultProps = {
  count: 10,
};
