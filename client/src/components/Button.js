import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type }) => {
  return <button>{type}</button>;
};

Button.propTypes = {
  type: PropTypes.string
};

export default Button;
