import React, { useState } from 'react';
import styles from './Reviews.module.css';

// Hardcoded iOS reviews data
const iosReviews = [
  {
    title: "Absolutely insane app",
    author: "Noahe2424",
    content: "This app is as good as it gets. Way better quality than Dall E, and it doesn't cost .15$ cents per generation: it's completely ad supported. The images also come back super fast. 10/10 would recommend",
    rating: "5",
    date: "05/22/2023"
  },
  {
    title: "Best app ever",
    author: "liggggmaaaaa",
    content: "This app is better than any other app you could see or imagine the images come back super fast and the quality is great there's so many cool features and they’re still updating it! 😎",
    rating: "5",
    date: "09/24/2023"
  },
  // Add more iOS reviews as needed
];

// Hardcoded Google Play reviews data
const googlePlayReviews = [
  {
    author: 'Chase Turnbeaugh',
    rating: 5,
    content: 'Made a perfect image of Putin in a hijab.',
    date: 'Jun 27, 2023',
    avatarUrl: 'https://lh3.googleusercontent.com/a/ACg8ocInqyBYEdA3xQeSx97KpLhW4tCJoooVbj5DnzB3ecNh=mo'
  },
  {
    author: 'Me Danish',
    rating: 5,
    content: "The app's user-friendly interface and real-time preview make the editing process a breeze. Whether you're an amateur photographer or just looking to add a creative touch to your social media posts, Real Art AI is a must-have. It's like having your own personal art studio in the palm of your hand!",
    date: 'Nov 25, 2023',
    avatarUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKyTkdySn395kkwtDh3emnPg7nMUarZB4RXGkt-jI9aMg=mo'
  }
];

const Reviews = () => {
  const [view, setView] = useState('ios');
  const containerKey = view === 'ios' ? 'iosContainer' : 'googlePlayContainer';

  const handleChange = (event) => {
    setView(event.target.value);
  };

  return (
    <div className={styles.reviews}>
      <div id="inputContainer" className={styles.inputContainer}>
        <fieldset id="aspectRatio--group" className={`${styles.inputGroup} ${styles.segmentedControl}`}>
          <div className={styles.segmentedControlGroup}>
            <input 
              type="radio" 
              name="platform" 
              id="platform-ios" 
              value="ios" 
              checked={view === 'ios'} 
              onChange={handleChange} 
              className={styles.visuallyHidden} 
            />
            <label htmlFor="platform-ios" className={styles.label}>
              <img src="/apple.svg" alt="iOS Reviews" width="30" height="30" />
            </label>

            <input 
              type="radio" 
              name="platform" 
              id="platform-googlePlay" 
              value="googlePlay" 
              checked={view === 'googlePlay'} 
              onChange={handleChange} 
              className={styles.visuallyHidden}
            />
            <label htmlFor="platform-googlePlay" className={styles.label}>
              <img src="/android.svg" alt="Google Play Reviews" width="30" height="30" />
            </label>
          </div>
        </fieldset>
      </div>
      <div key={containerKey} className={`${styles.reviewContainer} ${styles.fadeIn}`} style={{ padding: '20px' }}>
        {view === 'ios' ? iosReviews.map((review, index) => (
          <div key={index} className={`${styles.review} ${styles.iosReview}`}>
            <h4>{review.title}</h4>
            <div>{'⭐'.repeat(parseInt(review.rating))}</div>
            <p>{review.content}</p>
            <div>
              <small>By {review.author} on {new Date(review.date).toLocaleDateString()}</small>
            </div>
          </div>
        )) : googlePlayReviews.map((review, index) => (
          <div key={index} className={`${styles.review} ${styles.androidReview}`}>
            <div className={styles.reviewAvatar}>
              <img src={review.avatarUrl} alt={`Avatar of ${review.author}`} />
            </div>
            <div className={styles.reviewBody}>
              <div className={styles.reviewAuthor}>{review.author}</div>
              <div>
                <span>{'⭐'.repeat(review.rating)}</span>
                <span>{new Date(review.date).toLocaleDateString()}</span>
              </div>
              <p>{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;