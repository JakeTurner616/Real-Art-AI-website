import React from 'react';
import styles from './Features.module.css'; // Import the CSS module

const Features = () => (
  <div className={styles.features}>
    <h2>Features</h2>
    <ul>
      <li>Txt2img</li>
      <li>Img2img</li>
      <li>Upscale</li>
      {/* Add more features as needed */}
    </ul>
  </div>
);

export default Features;