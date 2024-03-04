import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';
import ExpandableImageGallery from './components/ExpandableImageGallery/ExpandableImageGallery';
import LogoAndStoreButtons from './components/LogoAndStoreButtons/LogoAndStoreButtons';
import ContactPage from './components/ContactPage/ContactPage';
import TermsOfServicePage from './components/TermsOfServicePage/TermsOfServicePage'; // Import the new component
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const galleryImages = [
    { src: './img/appimg2.png', alt: 'Image 1 description' },
    { src: './img/appimg3.png', alt: 'Image 2 description' },
    { src: './img/appimg4.png', alt: 'Image 3 description' },
    { src: './img/appimg5.png', alt: 'Image 4 description' },
    { src: './img/appimg6.png', alt: 'Image 5 description' },
    { src: './img/appimg7.png', alt: 'Image 6 description' },
  ];

  return (
    <Router>
      <div className="App">
        <Banner />
        <Routes>
          <Route path="/" element={
            <>
              <LogoAndStoreButtons />
              <Description />
              <ExpandableImageGallery images={galleryImages} />
              <Features />
              <Reviews />
              <Footer />
            </>
          } />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add the new route for the Terms of Service page */}
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;