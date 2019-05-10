import React from 'react';
import PropTypes from 'prop-types';

const NavBtn = ({ text }) => {
  return (
    <li className="navbtn-item">
      <button className="navbtn">{text}</button>
    </li>
  );
};

NavBtn.propTypes = {
  text: PropTypes.string
};

export default NavBtn;
