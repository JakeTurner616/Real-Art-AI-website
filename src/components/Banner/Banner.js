import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Banner.module.css';

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  const navigate = useNavigate();

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

  const handleHeadingClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.banner}>
      {/* The heading is now only clickable, not focusable via keyboard navigation */}
      <h1 onClick={handleHeadingClick} style={{cursor: 'pointer'}}>
        Real Art AI
      </h1>
      <div
        ref={iconRef}
        className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(!isMenuOpen)}
        tabIndex="0"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        role="button"
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
        <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.activeMenuItem}` : styles.menuItem}>Contact</NavLink>
        <NavLink to="/privacy" className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.activeMenuItem}` : styles.menuItem}>Privacy Policy</NavLink>
      </div>
    </div>
  );
};

export default Banner;