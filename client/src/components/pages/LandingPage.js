import React from 'react';
import Button from '../Button';

export const landingPageConfig = {
  cta1: {
    text1: 'you apply',
    text2: 'we track',
    demoText: 'or click here to use a live demo'
  },
  cta2: {
    heading: 'structure your search',
    paragraph: `Those endless spreadsheets? Gone. Stay on top
      of everyting, from your thoughts about the job, to the
      company's details, job description, you name it. Your job
      hunt, in one place.`,
    cta: 'use a demo'
  }
};

const LandingPage = () => {
  const { cta1, cta2 } = landingPageConfig;

  return (
    <section className="landing-page">
      <section className="cta-container first-cta">
        <div className="text">
          <div className="centered-wrapper">
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
        </div>
        <div className="image">
          <figure>
            <img
              className="preview-img"
              src="https://via.placeholder.com/600x300/3d3479/ff3569.png"
              alt="preview"
            />
          </figure>
          <figure>
            <img
              className="preview-img"
              src="https://via.placeholder.com/600x300/f5a623/3d3479.png"
              alt="preview"
            />
          </figure>
        </div>
      </section>
      <section>
        <h2>{cta2.heading}</h2>
        <p>{cta2.paragraph}</p>
        <p>{cta2.cta}</p>
      </section>
    </section>
  );
};

export default LandingPage;
