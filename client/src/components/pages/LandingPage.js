import React from 'react';
import Button from '../Button';

const LandingPage = () => {
  return (
    <section>
      <Button type="login" />
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
