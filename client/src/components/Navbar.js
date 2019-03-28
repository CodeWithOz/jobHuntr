import React from 'react';
import PropTypes from 'prop-types';
import NavBtn from './NavBtn';

const navbarConfig = {
  btns: [{ type: 'login' }, { type: 'home' }]
};

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
        <section className="btn-container">
          {navbarConfig.btns.map((btn, index) => (
            <NavBtn type={btn.type} key={index} />
          ))}
        </section>
      </nav>
    </header>
  );
};

Navbar.defaultProps = { logo: 'img/job-huntr-icon.png' };

Navbar.propTypes = { logo: PropTypes.string, title: PropTypes.string };

export default Navbar;
