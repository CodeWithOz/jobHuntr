import React from 'react';

const NavBtn = ({ type }) => {
  return (
    <li className="navbtn-item">
      <button className="navbtn">{type}</button>
    </li>
  );
};

export default NavBtn;
