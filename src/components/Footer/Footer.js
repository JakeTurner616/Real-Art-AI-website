import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'; // Assuming you'll create a CSS module for styling

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {currentYear} Serverboi.org | Developed by Jakob Turner | Real Art AI</p>
        <Link to="/terms-of-service" className={styles.termsLink}>Terms of Service</Link>
        <div className={styles.rssFeed}>
          <a href="/rss-feed" aria-label="Subscribe to our RSS feed">Subscribe to RSS Feed</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;