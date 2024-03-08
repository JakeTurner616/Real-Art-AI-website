import React, { useState, useEffect, useRef } from 'react';
import styles from './ExpandableImageGallery.module.css';

const ExpandableImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);
  const firstButtonRef = useRef(null);
  const lastFocusedElement = useRef(null);
  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isGalleryOpen) {
        closeGallery();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGalleryOpen]);

  const navigateImage = (direction) => {
    setImageOpacity(0);
    setTimeout(() => {
      setSelectedImageIndex((prevIndex) => {
        const newIndex = direction === 'next'
          ? Math.min(prevIndex + 1, images.length - 1)
          : Math.max(prevIndex - 1, 0);
        return newIndex;
      });
      setImageOpacity(1);
    }, 300);
  };

  const openGallery = (index) => {
    lastFocusedElement.current = document.activeElement; // Save the last focused element before opening the gallery
    setImageOpacity(0);
    setTimeout(() => {
      setImageOpacity(1);
      firstButtonRef.current?.focus(); // Move focus to the first interactive element
    }, 10);
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setIsGalleryOpen(false);
      lastFocusedElement.current?.focus(); // Return focus to the last focused element
    }, 300);
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
            tabIndex="0" // Make thumbnails focusable
            onKeyPress={(event) => event.key === 'Enter' && openGallery(index)} // Allow opening with keyboard
          />
        ))}
      </div>
      {isGalleryOpen && (
        <div
          className={`${styles.fullScreenModal} ${isGalleryOpen ? styles.visible : ''}`}
          onClick={handleModalClick}
          onKeyDown={(event) => event.key === 'Escape' && closeGallery()}
          tabIndex="-1" // Make modal focusable for handling escape key
          aria-modal="true" // Communicate that this is a modal dialog
          role="dialog"
        >
          <div className={styles.modalContent} onClick={handleContentClick}>
            <div className={styles.imageContainer} style={{ opacity: imageOpacity }}>
              <button
                ref={firstButtonRef}
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