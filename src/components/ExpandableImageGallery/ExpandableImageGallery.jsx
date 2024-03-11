import React, { useState, useEffect, useRef } from 'react';
import styles from './ExpandableImageGallery.module.css';

const ExpandableImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);
  const firstButtonRef = useRef(null);
  const lastFocusedElement = useRef(null);
  const galleryRef = useRef(null); // Add this line

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

  // New useEffect hook for dynamic alignment
  useEffect(() => {
    const adjustGalleryAlignment = () => {
      if (galleryRef.current) {
        const gallery = galleryRef.current;
        const totalWidthOfThumbnails = Array.from(gallery.children).reduce(
          (total, child) => total + child.offsetWidth + 10, // 10px for gap, adjust if your gap is different
          0
        );
        
        gallery.style.justifyContent =
          totalWidthOfThumbnails <= gallery.offsetWidth ? 'center' : 'flex-start';
      }
    };

    adjustGalleryAlignment();
    
    window.addEventListener('resize', adjustGalleryAlignment);
    return () => {
      window.removeEventListener('resize', adjustGalleryAlignment);
    };
  }, [images]); // Dependency on images ensures this runs again if the images prop changes

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
    lastFocusedElement.current = document.activeElement;
    setImageOpacity(0);
    setTimeout(() => {
      setImageOpacity(1);
      firstButtonRef.current?.focus();
    }, 10);
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setIsGalleryOpen(false);
      lastFocusedElement.current?.focus();
    }, 300);
  };

  const handleModalClick = () => closeGallery();
  const handleContentClick = (event) => event.stopPropagation();

  return (
    <div>
      <div ref={galleryRef} className={styles.galleryThumbnails}> {/* Add ref here */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openGallery(index)}
            className={styles.thumbnail}
            tabIndex="0"
            onKeyPress={(event) => event.key === 'Enter' && openGallery(index)}
          />
        ))}
      </div>
      {isGalleryOpen && (
        <div
          className={`${styles.fullScreenModal} ${isGalleryOpen ? styles.visible : ''}`}
          onClick={handleModalClick}
          onKeyDown={(event) => event.key === 'Escape' && closeGallery()}
          tabIndex="-1"
          aria-modal="true"
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