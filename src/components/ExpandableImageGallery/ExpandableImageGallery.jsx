import React, { useState } from 'react';
import styles from './ExpandableImageGallery.module.css';

const ExpandableImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);

  const navigateImage = (direction) => {
    setImageOpacity(0); // Start by fading out the current image
    setTimeout(() => {
      setSelectedImageIndex((prevIndex) => {
        const newIndex = direction === 'next'
          ? Math.min(prevIndex + 1, images.length - 1)
          : Math.max(prevIndex - 1, 0);
        return newIndex;
      });
      setImageOpacity(1); // Then fade in the new image
    }, 300); // This duration should match the CSS transition duration
  };

  const openGallery = (index) => {
    setImageOpacity(0); // Initiate with opacity 0
    setTimeout(() => {
      setImageOpacity(1); // Then fade in the new image
    }, 10); // A short delay to ensure the opacity transition applies
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };
  
  const closeGallery = () => {
    setImageOpacity(0); // Start by fading out the current image
    setTimeout(() => {
      setIsGalleryOpen(false);
    }, 300); // Match this duration with your CSS transition duration
  };

  const handleModalClick = () => closeGallery();
  const handleContentClick = (event) => event.stopPropagation();

  return (
    <div>
      <div className={styles.galleryThumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openGallery(index)}
            className={styles.thumbnail}
          />
        ))}
      </div>
      {isGalleryOpen && (
        <div
          className={`${styles.fullScreenModal} ${isGalleryOpen ? styles.visible : ''}`}
          onClick={handleModalClick}
        >
          <div className={styles.modalContent} onClick={handleContentClick}>
            <div className={styles.imageContainer} style={{ opacity: imageOpacity }}>
              <button
                className={styles.prevButton}
                onClick={() => navigateImage('prev')}
                disabled={selectedImageIndex === 0}
              >
                &lt;
              </button>
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className={styles.fullScreenImage}
              />
              <button
                className={styles.nextButton}
                onClick={() => navigateImage('next')}
                disabled={selectedImageIndex === images.length - 1}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableImageGallery;