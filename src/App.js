import React from 'react';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Description />
      <Features />
      <Reviews />
    </div>
  );
}

export default App;