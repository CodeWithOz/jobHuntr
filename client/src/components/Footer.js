import React from 'react';

const footerConfig = {
  statements: [
    {
      plug: 'Made by ',
      url: 'https://www.linkedin.com/in/uchechukwu-ozoemena/',
      linkText: 'Uchechukwu Ozoemena'
    },
    {
      plug: 'Modeled after ',
      url: 'https://huntr.co',
      linkText: 'huntr.co'
    },
    {
      plug: 'You can improve jobHuntr at ',
      url: 'https://github.com/CodeWithOz/jobHuntr',
      linkText: 'the GitHub repo'
    }
  ]
};

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
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
