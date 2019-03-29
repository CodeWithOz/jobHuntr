import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type }) => {
  return <div>{type}</div>;
};

Button.propTypes = {
  type: PropTypes.string
};

export default Button;
