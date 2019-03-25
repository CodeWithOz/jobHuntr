import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header>
      <nav>
        <section className="logo-container">
          <div className="logo-border">
            <figure>
              <img className="logo" src="img/job-huntr-icon.png" alt="logo" />
            </figure>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
