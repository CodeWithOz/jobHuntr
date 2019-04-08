import React from 'react';

const footerConfig = {
  huntrPlug: 'Modeled after ',
  huntrUrl: 'https://huntr.co'
};

const Footer = () => {
  return (
    <div>
      <hr />
      <p>
        {footerConfig.huntrPlug}
        <a href={footerConfig.huntrUrl}>huntr.co</a>.
      </p>
    </div>
  );
};

export default Footer;
