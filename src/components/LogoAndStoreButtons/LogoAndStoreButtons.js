import React from 'react';
import styles from './LogoAndStoreButtons.module.css'; // Importing CSS module

const AppDownload = () => {
  return (
    <div className={styles['app-download-container']}>
      <div className={styles['logo-container']}>
        <img src="/img/logo.png" alt="App Logo" className={styles['app-logo']} />
      </div>
      <div className={styles['name-tagline-container']}>
        <h1 className={styles['app-name']}>Real Art AI</h1>
        <p className={styles['app-tagline']}>Create stunning digital art</p>
      </div>
      <div className={styles['download-buttons']}>
        <a href="https://play.google.com/store/apps/details?id=org.serverboi.RealArtAI" className={styles['button-link']}>
          <img src="/img/GPLAY.png" alt="Get it on Google Play" className={styles['store-badge']} />
        </a>
        <a href="https://apps.apple.com/us/app/real-art-ai/id6449267914" className={styles['button-link']}>
          <img src="/img/IOS.png" alt="Download on the App Store" className={styles['store-badge']} />
        </a>
      </div>
    </div>
  );
}

export default AppDownload;