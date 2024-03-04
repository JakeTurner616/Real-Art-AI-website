import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Banner.module.css';

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          iconRef.current && !iconRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.banner}>
      <h1>Real Art AI</h1>
      <div
        ref={iconRef}
        className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${styles.menu} ${isMenuOpen ? styles.show : ''}`}
        ref={menuRef}
      >
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.activeMenuItem}` : styles.menuItem}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.activeMenuItem}` : styles.menuItem}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.activeMenuItem}` : styles.menuItem}>Contact</NavLink>
        <NavLink to="/terms-of-service" className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.activeMenuItem}` : styles.menuItem}>Terms of Service</NavLink>
      </div>
    </div>
  );
};

export default Banner;