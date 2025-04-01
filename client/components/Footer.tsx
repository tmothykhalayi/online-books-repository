// components/Footer.tsx

import {
  "compilerOptions": {
    // other options
    "esModuleInterop": true
  }
} from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; 2025 Online Bookstore. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
