import React from 'react';
import PropTypes from 'prop-types';
import LinkBtn from './LinkBtn';

const NavBtn = ({ text, isLink }) => {
  return (
    <li className="navbtn-item">
      {isLink ? (
        <LinkBtn className="navbtn">{text}</LinkBtn>
      ) : (
        <button className="navbtn">{text}</button>
      )}
    </li>
  );
};

NavBtn.propTypes = {
  text: PropTypes.string,
  isLink: PropTypes.bool
};

export default NavBtn;
