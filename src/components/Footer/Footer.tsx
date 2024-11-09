import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // import the icons
import { IoMdMail } from 'react-icons/io'; // another icon library
import styles from './Footer.module.css'; // import the custom styles

const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-flex']}>
          <div className={styles['footer-col']}>
            <p className={`${styles['footer-heading']} ${styles['footer-heading-bold']}`}>
              <span className={styles['footer-heading-rose']}>Humaiza</span> Naz
            </p>
            <p className={styles['footer-description']}>
              Welcome to my portfolio! I am a web developer with expertise in HTML, CSS, Tailwind CSS, and Next.js. I create responsive, dynamic, and accessible websites that provide seamless user experiences. Whether it is building a personal portfolio or a complex web application, my goal is always to deliver high-quality results with attention to detail.
            </p>
            <div className={styles['footer-icons']}>
              <Link className={styles['footer-icon']} target="_blank" href="#">
                <FaFacebookF size={36} />
              </Link>
              <Link className={styles['footer-icon']} target="_blank" href="/">
                <FaLinkedinIn size={36} />
              </Link>
              <Link className={styles['footer-icon']} target="_blank" href="/">
                <FaInstagram size={36} />
              </Link>
              <Link className={styles['footer-icon']} target="_blank" href="">
                <FaTwitter size={36} />
              </Link>
              <Link className={styles['footer-icon']} target="_blank" href="https://www.youtube.com/">
                <FaYoutube size={36} />
              </Link>
            </div>
          </div>
          <div className={styles['footer-col']}>
            <div className={styles['footer-contact']}>
              <div className={styles['footer-icon-circle']}>
                <FaPhoneAlt size={24} />
              </div>
              <div className={styles['footer-contact-info']}>
                <Link href="tel:+911800123444" className={styles['footer-contact-number']}>
                  +92 312-1234567
                </Link>
                <p className={styles['footer-contact-label']}>Number</p>
              </div>
            </div>
            <div className={styles['footer-contact']}>
              <div className={styles['footer-icon-circle']}>
                <IoMdMail size={24} />
              </div>
              <div className={styles['footer-contact-info']}>
                <Link href="mailto:help@lorem.com" className={styles['footer-contact-number']}>
                  humaizaasghar@gmail.com
                </Link>
                <p className={styles['footer-contact-label']}>Support Email</p>
              </div>
            </div>
            <div className={styles['footer-contact']}>
              <div className={styles['footer-icon-circle']}>
                <FaEnvelope size={20} />
              </div>
              <div className={styles['footer-contact-info']}>
                <Link href="mailto:contact@lorem.com" className={styles['footer-contact-number']}>
                  https://www.linkedin.com/in/humaiza-naz
                </Link>
                <p className={styles['footer-contact-label']}>General Inquiry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

