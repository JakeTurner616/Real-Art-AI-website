import React, { useState } from 'react';
import styles from './ExpandableImageGallery.module.css'; // Ensure you have the corresponding CSS file

const ExpandableImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = (index) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const goToPrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // Handles closing the gallery when the background is clicked
  const handleModalClick = (event) => {
    closeGallery();
  };

  // Prevents closing the gallery when the image or navigation buttons are clicked
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

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
        <div className={styles.fullScreenModal} onClick={handleModalClick}>
          <div className={styles.modalContent} onClick={handleContentClick}>
            <div className={styles.imageContainer}>
              <button className={styles.prevButton} onClick={goToPrevious} disabled={selectedImageIndex === 0}>
                &lt;
              </button>
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className={styles.fullScreenImage}
              />
              <button className={styles.nextButton} onClick={goToNext} disabled={selectedImageIndex === images.length - 1}>
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