import React from 'react';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';
import ExpandableImageGallery from './components/ExpandableImageGallery/ExpandableImageGallery';
import './App.css';

function App() {
  const galleryImages = [
    { src: './img/appimg2.png', alt: 'Image 1 description' },
    { src: './img/appimg3.png', alt: 'Image 2 description' },
    { src: './img/appimg4.png', alt: 'Image 3 description' },
    { src: './img/appimg5.png', alt: 'Image 4 description' },
    { src: './img/appimg6.png', alt: 'Image 5 description' },
    { src: './img/appimg7.png', alt: 'Image 6 description' },
    
    // Add more images as needed
  ];

  return (
    <div className="App">
      <Banner />
      <Description />
      <ExpandableImageGallery images={galleryImages} />
      <Features />
      <Reviews />
    </div>
  );
}

export default App;