import React from 'react';
import PropTypes from 'prop-types';

const LinkBtn = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

LinkBtn.propTypes = {
  className: PropTypes.string
};

export default LinkBtn;
