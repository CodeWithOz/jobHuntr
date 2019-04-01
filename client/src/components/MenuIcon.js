import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleNavMenu } from '../actions';

export const MenuIcon = ({ handleClick, navMenuShown }) => {
  return (
    <button className="menu-icon" onClick={handleClick} href>
      <i className={`fas ${navMenuShown ? 'fa-times' : 'fa-bars'}`} />
      <p>
        <strong>menu</strong>
      </p>
    </button>
  );
};

MenuIcon.propTypes = {
  handleClick: PropTypes.func,
  navMenuShown: PropTypes.bool
};

const mapStateToProps = ({ navMenuShown }) => {
  return { navMenuShown };
};

export default connect(
  mapStateToProps,
  { handleClick: toggleNavMenu }
)(MenuIcon);
