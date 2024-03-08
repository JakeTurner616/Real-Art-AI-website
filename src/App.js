import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';
import ExpandableImageGallery from './components/ExpandableImageGallery/ExpandableImageGallery';
import LogoAndStoreButtons from './components/LogoAndStoreButtons/LogoAndStoreButtons';
import ContactPage from './components/ContactPage/ContactPage';
import TermsOfServicePage from './components/TermsOfServicePage/TermsOfServicePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage'; // Import the new component
import './App.css';

function App() {
  const galleryImages = [
    { src: './img/appimg2.png', alt: "A mobile app screen displaying the 'txt2img' feature, showcasing the application's high comprehension capabilities, as indicated by the heading 'High comprehension – Understands nearly anything'. The app interface presents a colorful, digitally-rendered portrait of a woman with rainbow-colored hair and a man resembling Jay-Z, artistically stylized against a vibrant background. A text input field contains the phrase 'Jay-z and mystery woman', suggesting the image was generated from this prompt. Below the field are selected options 'Model style?' and 'Painting style?', with 'Anime style' unselected, demonstrating the app's versatility in image generation styles. A 'Save to gallery' button at the bottom allows users to store their creations. The screen emphasizes the app's capability to interpret and visually render complex text prompts into diverse artistic representations." },
    { src: './img/appimg3.png', alt: "A screenshot of an AI painting mobile application interface displaying a highly detailed and stylized digital portrait of a woman with sharp features, wearing a futuristic blue jacket with gold and black accents. At the bottom of the screen is a text input field with the placeholder 'Enter text prompt' filled with the word 'epic'. Below the text field is a 'Send' button to submit the prompt. The app offers 'txt2img' and 'AI paint' features, as indicated by icons below the image, suggesting functionality to generate images from text prompts or to paint with AI assistance." },
    { src: './img/appimg4.png', alt: "A mobile application screen titled 'Download images and edit them with AI' showcasing a feature called 'Txt2img'. The app interface displays a vividly colored, AI-generated portrait of a woman surrounded by a lush array of stylized flowers and plants. The image features rich detail and vibrant colors, emphasizing the app's capability to create intricate digital art. A text input field is visible above the image with an incomplete text prompt 'detailed iPhone wallpaper of a beautiful woma'. The options 'Model style?', 'Painting style?', and 'Anime style?' are displayed below the input field, allowing users to choose the style of the generated image. A button labeled 'Save to gallery' is positioned at the bottom, indicating the option to save the artwork. This screen illustrates the app's high precision in translating text prompts into detailed, artistic images." },
    { src: './img/appimg5.png', alt: "A mobile app interface displaying the feature 'Prompt autofill for instant high-quality prompts', indicating a focus on user-friendly content creation. The screen shows a text-to-image conversion feature, where a text prompt 'gigachad luigi bodybuilder wearing a suit, reali...' has been partially typed into an input box, suggesting an autocomplete function. Below, the 'Painting style?' option is checked, while 'Model style?' and 'Anime style?' are not. The resulting AI-generated image depicts a hyper-realistic portrait of a muscular man in a sharp orange suit, exuding a strong and confident demeanor, with a blurred background that emphasizes the subject. A 'Save to gallery' button is prominently displayed below the image, allowing users to save their AI-generated portraits directly to their device." },
    { src: './img/appimg6.png', alt: "A mobile application interface featuring the headline 'Type anything and let the AI do the hard work'. The app showcases an AI-generated image reflecting the input text 'colorful, nature, picturesque' typed into a text prompt field. The image depicts a serene pathway lined with vibrant autumnal trees in full color, leading into a forest. A female figure with long hair, wearing a dark school uniform, is seen from behind, gazing down the path, adding a human element to the landscape. The 'Painting style?' option is highlighted, while 'Model style?' and 'Anime style?' are available options. Below the image, a button labeled 'Save to gallery' invites users to store their AI-crafted images, demonstrating the app's ability to create detailed art from simple text descriptions." },
    { src: './img/appimg7.png', alt: "A mobile app interface headlined 'Advanced settings for complete control,' indicating customization features within the app. The interface presents a modal overlay titled 'Advanced Txt2img Settings' with various configurable parameters for image generation. Options for 'Seed' and 'Negative prompt' imply user input to influence the generation process. A dropdown menu labeled 'Sampler: Euler a (default)' suggests the use of different algorithms for image creation, and a slider marked 'Steps: 50 (default)' allows adjustment of the iteration steps in the generation process. Below the settings modal, a 'Save to gallery' button offers the option to preserve the customized output, highlighting the app's capability for detailed personalization in creating AI-generated images." },
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

            </>
          } />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<TermsOfServicePage />} />
          {/* Add the route for the 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;