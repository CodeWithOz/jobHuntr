import React from 'react';

const footerConfig = {
  huntrPlug: 'Modeled after ',
  huntrUrl: 'https://huntr.co',
  githubPlug: 'Improve jobHuntr at ',
  githubUrl: 'https://github.com/CodeWithOz/jobHuntr'
};

const Footer = () => {
  return (
    <div>
      <hr />
      <p>
        {footerConfig.huntrPlug}
        <a href={footerConfig.huntrUrl}>huntr.co</a>.
      </p>
      <p>
        {footerConfig.githubPlug}
        <a href={footerConfig.githubUrl}>the GitHub repo</a>.
      </p>
    </div>
  );
};

export default Footer;
