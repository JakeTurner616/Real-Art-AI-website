import React from 'react';
import styles from './Features.module.css'; // Import the CSS module

const Features = () => (
  <div className={styles.features}>
    <div className={styles.textContainer}>
      <div className={styles.featureGrid}>
        <div className={styles.feature}>
          <h3>Txt2img</h3>
          <p>The “Txt2img” tool works by utilizing an algorithm that has been trained on a dataset of images and their corresponding textual descriptions. This allows an AI model to understand the complex relationships between text and images and to generate new images that accurately reflect a given text prompt.</p>
        </div>
        <div className={styles.feature}>
          <h3>Img2img</h3>
          <p>The “Img2img” tool utilizes an advanced deep learning algorithm that has been trained on a vast dataset of images. This allows the AI model to understand the complex relationships between different images and to generate new images that accurately reflect a given prompt.</p>
        </div>
      </div>
      <div className={styles.featureGrid}>
        <div className={styles.feature}>
          <h3>Upscale</h3>
          <p>Upscaling is a technique used to increase the resolution and improve the quality of an image or video. It works by analyzing the existing pixels in the image or video and using advanced algorithms to create new pixels that fill in the gaps between the existing ones.</p>
        </div>
        <div className={styles.feature}>
          <h3>Denoising Strength</h3>
          <p>The denoising strength parameter in img2img is an essential tool that enables users to balance the trade-off between noise reduction and the preservation of image details. By adjusting the denoising strength parameter, users can customize the amount of noise reduction applied to the image, ensuring that the final output meets their specific needs and preferences.</p>
        </div>
      </div>
      <div className={styles.featureGrid}>
        <div className={styles.feature}>
          <h3>Prompt Autocomplete</h3>
          <p>The prompt autocomplete feature works by using a GPT-2 like language model that has been trained on a dataset of txt2img prompts. When a user enters a partial description of an image, the model uses its training to generate a complete description that is consistent with the language patterns it has learned. This can save the user time and effort by generating a complete prompt without requiring them to manually enter all the details.</p>
        </div>
        <div className={styles.feature}>
          <h3>AI Painting</h3>
          <p>AI painting is a process where the user selects a specific area in an image, and an algorithm trained on image reconstruction adds finely placed details within that selection. It combines the user’s artistic input with the algorithm’s learning to enhance the artwork with intricate elements.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Features;