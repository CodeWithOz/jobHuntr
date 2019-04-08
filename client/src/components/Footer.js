import React from 'react';

const footerConfig = {
  statements: [
    {
      plug: 'Made by ',
      url: 'https://www.linkedin.com/in/uchechukwu-ozoemena/',
      linkText: 'Uche Ozoemena'
    },
    {
      plug: 'Modeled after ',
      url: 'https://huntr.co',
      linkText: 'huntr.co'
    },
    {
      plug: 'Source code available at the ',
      url: 'https://github.com/CodeWithOz/jobHuntr',
      linkText: 'GitHub repo'
    }
  ]
};

const Footer = () => {
  return (
    <footer className="footer">
      {footerConfig.statements.map((statement, index) => (
        <p className="statement" key={index}>
          {statement.plug}
          <a href={statement.url} className="link">
            {statement.linkText}
          </a>
          .
        </p>
      ))}
    </footer>
  );
};

export default Footer;
