import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleNavMenu } from '../actions';

export const MenuIcon = ({ handleClick }) => {
  return (
    <button className="menu-icon" onClick={handleClick} href>
      <i className="fas fa-bars" />
      <p>
        <strong>menu</strong>
      </p>
    </button>
  );
};

MenuIcon.propTypes = {
  handleClick: PropTypes.func
};

export default connect(
  null,
  { handleClick: toggleNavMenu }
)(MenuIcon);
