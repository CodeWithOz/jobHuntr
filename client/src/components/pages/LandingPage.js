import React from 'react';
import Button from '../Button';

export const landingPageConfig = {
  cta1: 'you apply',
  cta2: 'we track'
};

const LandingPage = () => {
  return (
    <section className="landing-page">
      <section className="cta-container first-cta">
        <div className="text">
          <p className="cta cta-1">{landingPageConfig.cta1}</p>
          <p className="cta cta-2">{landingPageConfig.cta2}</p>
          <Button type="login" />
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
