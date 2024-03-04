import React, { useState, useEffect } from 'react';
import styles from './TermsOfServiceHistory.module.css'; // Import CSS module

const TermsOfServiceHistory = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/JakeTurner616/mobile-app-website/commits?path=src/components/TermsOfServicePage/TermsOfServicePage.js', {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
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
    <div className={styles['history-container']}>
      <h2 className={styles['history-header']}>Terms of Service Revision History</h2>
      <ul>
        {commits.map(commit => (
          <li key={commit.sha} className={styles['commit-item']}>
            <span className={styles['commit-details']}>
              <strong>Date:</strong> {new Date(commit.commit.author.date).toLocaleDateString()}<br />
              <strong>Author:</strong> {commit.commit.author.name}<br />
              <span className={styles['commit-message']}><strong>Message:</strong> {commit.commit.message}</span><br />
              <a href={commit.html_url} target="_blank" rel="noopener noreferrer" className={styles['commit-link']}>View Changes</a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsOfServiceHistory;