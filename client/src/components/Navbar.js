import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuIcon from './MenuIcon';
import NavBtn from './NavBtn';

const navbarConfig = {
  btns: [{ text: 'login', isLink: false }, { text: 'home', isLink: true }]
};

export const Navbar = ({ logo, title, navMenuShown }) => {
  return (
    <header>
      <nav>
        <section className="logo-container">
          <div className="logo-border">
            <figure>
              <img className="logo" src={logo} alt="logo" />
            </figure>
          </div>
          <h1 className="title">{title}</h1>
        </section>
        <section className="menu-container">
          <MenuIcon />
        </section>
        <section className="btn-container">
          <ul className={`btn-list${navMenuShown ? ' shown' : ''}`}>
            {navbarConfig.btns.map((btn, index) => (
              <NavBtn {...btn} key={index} />
            ))}
          </ul>
        </section>
      </nav>
    </header>
  );
};

Navbar.defaultProps = { logo: 'img/job-huntr-icon.png' };

Navbar.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  navMenuShown: PropTypes.bool
};

const mapStateToProps = ({ navMenuShown }) => {
  return { navMenuShown };
};

export default connect(mapStateToProps)(Navbar);
