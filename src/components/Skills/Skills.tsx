import React from "react";
import styles from './Skills.module.css'; // Import the CSS module

const Skills = () => {
  return (
    <div id="skills" className={`container ${styles["skills-container"]}`}>
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="fade-right">
          <h2 className={`text-4xl md:text-5xl ${styles["skills-heading"]}`}>Technologies I Work with</h2>

          <ul className="text-gray-500 pt-2 flex flex-col gap-2">
            <b className={styles["skills-subheading"]}>Skills & Expertise Web Development</b>
            <li>
              Proficient in JavaScript, TypeScript, HTML5, CSS3, React, Next.js with expertise in frameworks like Tailwind CSS to build responsive and dynamic web interfaces.
            </li>

            <b className={styles["skills-subheading"]}>Backend Development</b>
            <li>
              Experienced in using Node.js and npm for server-side development, enabling efficient, scalable applications.
            </li>

            <b className={styles["skills-subheading"]}>Cybersecurity Fundamentals</b>
            <li>
              Completed a foundational course in cybersecurity, equipping me with essential knowledge of protecting systems, networks, and data.
            </li>

            <b className={styles["skills-subheading"]}>Emerging Technologies</b>
            <li>
              Currently expanding expertise through courses in Artificial Intelligence and Metaverse technologies, offered at Governor House, to stay at the forefront of tech innovation.
            </li>
          </ul>
        </div>

        <div data-aos="fade-right">
          <h4 className={`text-3xl md:text-5xl ${styles["skills-title"]} font-bold mb-6`}>Skills</h4>

          <div className={styles["skill-bar"]}>
            <div className="flex justify-between py-1">
              <span className={`${styles["skill-label"]}`}>Html </span>
              <span className={`${styles["skill-percentage"]}`}>90%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className={`rc-progress-line-trail ${styles["skill-bar-trail"]}`} d="M 0.5,0.5 L 99.5,0.5"></path>
              <path className={`rc-progress-line-path ${styles["skill-bar-fill"]}`} d="M 0.5,0.5 L 79.2,0.5" stroke="#FF6464"></path>
            </svg>
          </div>

          <div className={styles["skill-bar"]}>
            <div className="flex justify-between py-1">
              <span className={`${styles["skill-label"]}`}>Css & Tailwind</span>
              <span className={`${styles["skill-percentage"]}`}>80%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className={`rc-progress-line-trail ${styles["skill-bar-trail"]}`} d="M 0.5,0.5 L 99.5,0.5"></path>
              <path className={`rc-progress-line-path ${styles["skill-bar-fill"]}`} d="M 0.5,0.5 L 79.2,0.5" stroke="#FFD700"></path>
            </svg>
          </div>

          <div className={styles["skill-bar"]}>
            <div className="flex justify-between py-1">
              <span className={`${styles["skill-label"]}`}>Typescript </span>
              <span className={`${styles["skill-percentage"]}`}>95%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className={`rc-progress-line-trail ${styles["skill-bar-trail"]}`} d="M 0.5,0.5 L 99.5,0.5"></path>
              <path className={`rc-progress-line-path ${styles["skill-bar-fill"]}`} d="M 0.5,0.5 L 94.05,0.5" stroke="#9272D4"></path>
            </svg>
          </div>

          <div className={styles["skill-bar"]}>
            <div className="flex justify-between py-1">
              <span className={`${styles["skill-label"]}`}>React.js</span>
              <span className={`${styles["skill-percentage"]}`}>65%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className={`rc-progress-line-trail ${styles["skill-bar-trail"]}`} d="M 0.5,0.5 L 99.5,0.5"></path>
              <path className={`rc-progress-line-path ${styles["skill-bar-fill"]}`} d="M 0.5,0.5 L 64.35,0.5" stroke="#5185D4"></path>
            </svg>
          </div>

          <div className={styles["skill-bar"]}>
            <div className="flex justify-between py-1">
              <span className={`${styles["skill-label"]}`}>Next.js</span>
              <span className={`${styles["skill-percentage"]}`}>75%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className={`rc-progress-line-trail ${styles["skill-bar-trail"]}`} d="M 0.5,0.5 L 99.5,0.5"></path>
              <path className={`rc-progress-line-path ${styles["skill-bar-fill"]}`} d="M 0.5,0.5 L 74.25,0.5" stroke="#CA56F2"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
