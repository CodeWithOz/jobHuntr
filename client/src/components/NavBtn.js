import React from 'react';
import PropTypes from 'prop-types';

const NavBtn = ({ type }) => {
  return (
    <li className="navbtn-item">
      <button className="navbtn">{type}</button>
    </li>
  );
};

NavBtn.propTypes = {
  type: PropTypes.string
};

export default NavBtn;
