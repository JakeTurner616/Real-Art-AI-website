import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'; // Assuming you'll create a CSS module for styling

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.madeWith}>
        </div>
        
        

        <p> <Link to="https://serverboi.org" className={styles.termsLink}>&copy; {currentYear} serverboi.org</Link> | <Link to="https://github.com/JakeTurner616/Real-Art-AI" className={styles.termsLink}>Source Code</Link> | <Link to="/contact" className={styles.termsLink}>Contact</Link> | <Link to="/terms-of-service" className={styles.termsLink}>Terms of Service</Link> </p>
      </div>
    </footer>
  );
};

export default Footer;