import React from 'react';

const footerConfig = {
  huntrPlug: 'Modeled after ',
  huntrUrl: 'https://huntr.co',
  githubPlug: 'You can improve jobHuntr at ',
  githubUrl: 'https://github.com/CodeWithOz/jobHuntr',
  linkedinPlug: 'Made by ',
  linkedinUrl: 'https://www.linkedin.com/in/uchechukwu-ozoemena/'
};

const Footer = () => {
  return (
    <div>
      <hr />
      <p>
        {footerConfig.linkedinPlug}
        <a href={footerConfig.linkedinUrl}>Uchechukwu Ozoemena</a>.
      </p>
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
