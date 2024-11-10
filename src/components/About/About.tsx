'use client'; // This ensures the component is treated as client-side only

import React from 'react';

import 'aos/dist/aos.css'; // Import AOS styles
import styles from './About.module.css';

const About = () => {

  return (
    <div id="about" className="container pt-32 px-4 md:px-8">
      <h2 className={`${styles.aboutHeading} md:${styles.aboutHeadingSmall}`} data-aos="fade-right">
        About Me
      </h2>
      <p className={`${styles.aboutText} md:${styles.aboutTextLarge}`} data-aos="fade-right">
        Aspiring AI and Metaverse Innovator, currently advancing my expertise in Artificial Intelligence and Meta AI at GIAIC. 
        Equipped with a strong foundation in JavaScript, TypeScript, and modern web development technologies, I am committed to creating intelligent, future-ready solutions.
        Combining cutting-edge AI techniques with immersive Metaverse experiences, I am exploring the intersection of technology and human interaction.
        Driven by a passion for technology, my journey in AI and Meta AI is focused on shaping the future of virtual and augmented environments. 
        With skills spanning from cybersecurity fundamentals to AI and Metaverse technologies, I am building solutions that align with the next generation of digital transformation.
      </p>
    </div>
  );
};

export default About;



