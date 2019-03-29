import React from 'react';
import Button from '../Button';

export const landingPageConfig = {
  cta1: 'you apply',
  cta2: 'we track'
};

const LandingPage = () => {
  return (
    <section>
      <Button type="login" />
      <p>{landingPageConfig.cta1}</p>
      <p>{landingPageConfig.cta2}</p>
      <figure>
        <img
          className="preview-img"
          src="https://via.placeholder.com/150/3d3479/ff3569.png?text=Preview"
          alt="preview"
        />
      </figure>
    </section>
  );
};

export default LandingPage;
