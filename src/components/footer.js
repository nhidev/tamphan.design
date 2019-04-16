import React from 'react';
import './../styles/footer.scss';

const Footer = () => {
  return (
    <footer>
    <div className="content-grid">
      <h4>THANKS FOR VISITING</h4>
      <p>© {new Date().getFullYear()} TamPhan.</p>
    </div>
  </footer>

  );
};

export default Footer;