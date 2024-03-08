import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider from react-helmet-async

const NotFoundPage = () => (
  <HelmetProvider> {/* Wrap everything with HelmetProvider */}
    <div className="not-found-container">
      <Helmet> {/* Use Helmet for title and meta tags */}
        <title>404 - Not Found</title>
        <meta name="description" content="Sorry, the page you are looking for does not exist." />
      </Helmet>
      <div>
        <h1>404 - Not Found!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        {/* Add the image of silly cats */}
        <img src="/img/sillycatsinsidecomputer.png" alt="Silly Cats" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  </HelmetProvider>
);

export default NotFoundPage;