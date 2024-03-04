// ImageComparison.js
import React, { useState } from 'react';

const ImageComparison = ({ beforeImageUrl, afterImageUrl }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (event) => {
    setSliderPosition(event.target.value);
  };

  return (
    <div className={styles.imageComparison}>
      <div className={styles.imageContainer}>
        <img className={styles.beforeImage} src={beforeImageUrl} alt="Before" />
        <div className={styles.afterImageContainer}>
          <img className={styles.afterImage} src={afterImageUrl} alt="After" />
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className={styles.slider}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;