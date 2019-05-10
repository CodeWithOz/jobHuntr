import React from 'react';
import PropTypes from 'prop-types';
import LinkBtn from './LinkBtn';

const NavBtn = ({ text, isLink, to }) => {
  return (
    <li className="navbtn-item">
      {isLink ? (
        <LinkBtn className="navbtn" to={to}>
          {text}
        </LinkBtn>
      ) : (
        <button className="navbtn">{text}</button>
      )}
    </li>
  );
};

NavBtn.propTypes = {
  text: PropTypes.string,
  isLink: PropTypes.bool,
  to: PropTypes.string
};

export default NavBtn;
