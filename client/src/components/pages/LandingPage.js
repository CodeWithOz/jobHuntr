import React from 'react';
import Button from '../Button';

export const landingPageConfig = {
  cta1: {
    text1: 'you apply',
    text2: 'we track',
    demoText: 'or click here to use a live demo'
  }
};

const LandingPage = () => {
  const { cta1 } = landingPageConfig;

  return (
    <section className="landing-page">
      <section className="cta-container first-cta">
        <div className="text">
          <p className="cta cta-1">{cta1.text1}</p>
          <p className="cta cta-2">{cta1.text2}</p>
          <div className="action">
            <Button type="login" />
          </div>
          <div className="action">
            <a href="#fake-link" className="demo-text">
              {cta1.demoText}
            </a>
          </div>
        </div>
        <div className="image">
          <figure>
            <img
              className="preview-img"
              src="https://via.placeholder.com/150/3d3479/ff3569.png?text=Preview"
              alt="preview"
            />
          </figure>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
