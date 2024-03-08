import React from 'react';
import styles from './LogoAndStoreButtons.module.css';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider from react-helmet-async

const AppDownload = () => {
  return (
    <HelmetProvider> {/* Wrap everything with HelmetProvider */}
      <div>
        <Helmet>
          <title>Real Art AI</title>
          <meta name="description" content="Real Art AI - Create stunning digital art for free on IOS or Android devices." />
        </Helmet> 
        <div className={styles['app-download-container']}>
          <div className={styles['logo-container']}>
            <img src="/img/logo.png" alt="App Logo that depicts A profile of a human head with an intricate brain pattern to symbolize the complexity and interconnected pathways of neural networks." className={styles['app-logo']} />
          </div>
          <div className={styles['name-tagline-container']}>
            <h1 className={styles['app-name']}>Real Art AI</h1>
            <p className={styles['app-tagline']}>Create stunning digital art</p>
          </div>
          <div className={styles['download-buttons']}>
            <a href="https://play.google.com/store/apps/details?id=org.serverboi.RealArtAI" className={styles['button-link']} aria-label="Download Real Art AI from Google Play">
              <img src="/img/GPLAY.png" alt="Get it on Google Play" className={styles['store-badge']} />
            </a>
            <a href="https://apps.apple.com/us/app/real-art-ai/id6449267914" className={styles['button-link']} aria-label="Download Real Art AI from the App Store">
              <img src="/img/IOS.png" alt="Download on the App Store" className={styles['store-badge']} />
            </a>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default AppDownload;