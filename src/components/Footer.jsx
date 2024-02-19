import React from 'react';

const Footer = () => (
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © 2024 All rights reserved by <a href="https://portfolio.holyentgoldconcept.com" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'none' }}>
  <strong style={{ animation: 'blink 1s infinite' }}>Visit My Portfolio</strong>
</a>
<style>{`
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`}</style>



    </p>
  </div>
);

export default Footer;