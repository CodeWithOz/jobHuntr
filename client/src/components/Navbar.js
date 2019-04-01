import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from './MenuIcon';
import NavBtn from './NavBtn';

const navbarConfig = {
  btns: [{ type: 'login' }, { type: 'home' }]
};

const Navbar = ({ logo, title, navMenuShown }) => {
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
        <section className="btn-container">
          <ul className={`btn-list${navMenuShown ? ' shown' : ''}`}>
            {navbarConfig.btns.map((btn, index) => (
              <NavBtn type={btn.type} key={index} />
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

export default Navbar;
