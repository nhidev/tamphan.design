import React from 'react';
import './../styles/footer.scss';

const Footer = () => {
  return (
    <footer>
    <div className="content-grid">
      <h3>THANKS FOR VISITING</h3>
      <p>© {new Date().getFullYear()} TamPhan.</p>
    </div>
  </footer>

  );
};

export default Footer;