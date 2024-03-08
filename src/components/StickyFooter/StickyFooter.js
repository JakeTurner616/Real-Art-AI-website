import React from 'react';
import styles from './StickyFooter.module.css'; // Import CSS module for styling
import { Link } from 'react-router-dom';

const StickyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles["sticky-footer"]}>
      <div className={styles.content}>
        <p>
          <Link to="https://serverboi.org" className={styles.termsLink}>
            &copy; {currentYear} serverboi.org
          </Link>{" "}
          |{" "}
          <Link
            to="https://github.com/JakeTurner616/Real-Art-AI"
            className={styles.termsLink}
          >
            Source Code
          </Link>{" "}
          |{" "}
          <Link to="/contact" className={styles.termsLink}>
            Contact
          </Link>{" "}
          |{" "}
          <Link to="/privacy" className={styles.termsLink}>
            Privacy Policy
          </Link>{" "}
        </p>
      </div>
    </footer>
  );
};

export default StickyFooter;