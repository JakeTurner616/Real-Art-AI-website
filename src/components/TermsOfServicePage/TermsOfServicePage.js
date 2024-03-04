import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div>
      <h1>Terms of Service</h1>
      <p>
        {/* Your terms of service content here */}
        These are the Terms of Service for using our application...
      </p>
      {/* Optionally, include the history component here to show changes */}
      <TermsOfServiceHistory />
    </div>
  );
};

export default TermsOfServicePage;