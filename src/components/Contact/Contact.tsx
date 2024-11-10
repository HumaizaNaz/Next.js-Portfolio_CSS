import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className={`text-5xl ${styles.heading}`} data-aos="fade-right">Get in Touch</h2>
          <p className='text-gray-600 text-[18px] pt-2' data-aos="fade-right">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className={`flex gap-3 items-center ${styles.iconText}`} data-aos="fade-right">
            <CiMail  className='text-red-900 'size={30} /> humaizaasghar@gmail.com
          </div>
          <div className={`flex gap-3 items-center ${styles.iconText}`} data-aos="fade-right">
            <FaWhatsapp  className='text-green-500 ' size={30} /> (+92) 314-1234569
          </div>
          <div className={`flex gap-3 items-center ${styles.iconText}`} data-aos="fade-right">
            <FaGithub   className='text-black 'size={30} /> https://github.com/HumaizaNaz
          </div>
          <div className={`flex gap-3 items-center ${styles.iconText}`} data-aos="fade-right">
            <CiLinkedin   className='text-blue-700 'size={30} /> https://www.linkedin.com/in/humaiza-naz/
          </div>
        </div>

        <div className='space-y-8'>
          <div className='flex flex-col gap-1' data-aos="fade-right">
            <label htmlFor="name" className='text-gray-600'>Name</label>
            <input type="text" className={`${styles.inputField}`} id='name' />
          </div>

          <div className='flex flex-col gap-1' data-aos="fade-right">
            <label htmlFor="email" className='text-gray-600'>Email</label>
            <input type="text" className={`${styles.inputField}`} id='email' />
          </div>

          <div className='flex flex-col gap-1' data-aos="fade-right">
            <label htmlFor="message" className='text-gray-600'>Message</label>
            <textarea 
                 className='bg-transparent border border-[#FF9966] focus:ring-2 focus:ring-[#FF9966]' 
                id='message' rows={8}>
                </textarea>
          </div>
        </div>

        <button className='bg-[#FF9966] p-2 px-6 w-48 text-white hover:bg-[#FFCC99]' data-aos="fade-right">
          Send
        </button>
      </div>
    </div>
  )
}

export default Contact;

