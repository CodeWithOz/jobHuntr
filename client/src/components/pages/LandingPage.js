import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const landingPageConfig = {
  demoUrl: '/demo',
  cta1: {
    text1: 'you apply',
    text2: 'we track',
    demoText: 'or click here to use a live demo'
  },
  cta2: {
    heading: 'structure your search',
    paragraphs: [
      'Spreadsheets? Gone.',
      `Stay on top everything, from your thoughts about the
        job to the job description, company details, you
        name it.`,
      'Your job hunt, in one place.'
    ],
    action: 'use a demo'
  }
};

const LandingPage = () => {
  const { cta1, cta2 } = landingPageConfig;

  return (
    <section className="landing-page">
      <section className="cta-container first-cta">
        <div className="text">
          <div className="centered-wrapper">
            <h2 className="cta cta-1">{cta1.text1}</h2>
            <h2 className="cta cta-2">{cta1.text2}</h2>
            <div className="action">
              <Button type="login" />
            </div>
            <div className="action">
              <Link to={landingPageConfig.demoUrl} className="demo-text">
                <span className="underline">{cta1.demoText}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="image">
          <figure>
            <img
              className="preview-img"
              src="https://via.placeholder.com/900x300/3d3479/ff3569.png"
              alt="preview"
            />
          </figure>
          <figure>
            <img
              className="preview-img"
              src="https://via.placeholder.com/900x300/f5a623/3d3479.png"
              alt="preview"
            />
          </figure>
        </div>
      </section>
      <section className="cta-container second-cta">
        <div className="text">
          <div className="centered-wrapper">
            <h2 className="heading">{cta2.heading}</h2>
            {cta2.paragraphs.map((paragraph, index) => (
              <p className="paragraph" key={index}>
                {paragraph}
              </p>
            ))}
            <div className="action">
              <Link to={landingPageConfig.demoUrl}>
                <span className="underline">{cta2.action}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="image">
          <figure>
            <img
              className="preview-img"
              src="https://via.placeholder.com/600x300/ff3569/3d3479.png"
              alt="preview"
            />
          </figure>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
