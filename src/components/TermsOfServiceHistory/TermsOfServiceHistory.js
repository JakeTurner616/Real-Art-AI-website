import React, { useState, useEffect } from 'react';

const TermsOfServiceHistory = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/JakeTurner616/mobile-app-website/commits?path={path_to_terms_of_service_file}', {
          headers: {
            'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}` // Use the token from the environment variable
          }
        });
        if (!response.ok) {
          throw new Error('GitHub API response not ok');
        }
        const data = await response.json();
        setCommits(data);
      } catch (error) {
        console.error('Failed to fetch commits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  if (loading) return <p>Loading history...</p>;

  return (
    <div>
      <h2>Revision History</h2>
      <ul>
        {commits.map(commit => (
          <li key={commit.sha}>
            <strong>{new Date(commit.commit.author.date).toLocaleDateString()}</strong>: {commit.commit.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsOfServiceHistory;