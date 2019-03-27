import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from './MenuIcon';

const Navbar = ({ logo, title }) => {
  return (
    <header>
      <nav>
        <section className="logo-container">
          <div className="logo-border">
            <figure>
              <img className="logo" src={logo} alt="logo" />
            </figure>
          </div>
          <p className="title">{title}</p>
        </section>
        <section className="menu-container">
          <MenuIcon />
        </section>
        <section className="buttons">
          <div className="btn-container">
            <button className="log-in-btn" type="button">
              Log In
            </button>
          </div>
        </section>
      </nav>
    </header>
  );
};

Navbar.defaultProps = { logo: 'img/job-huntr-icon.png' };

Navbar.propTypes = { logo: PropTypes.string, title: PropTypes.string };

export default Navbar;
