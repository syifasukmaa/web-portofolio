import { useState } from 'react';
import Button from '../atoms/Button';
import { motion } from 'framer-motion';
import { FaArrowUp, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
function Contact() {
  return (
    <section
      id='contact'
      className='w-full py-44 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200'
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false }}
        transition={{ duration: 0.7, amount: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className='w-[90%] mx-auto lg:w-[75%]'
      >
        <div className='text-center'>
          <h3 className='text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 '>Contact</h3>
          <p className='pt-2 font-light text-greys md:text-xl dark:text-primary400 dark:font-normal'>
            I'm open to full-time roles, freelance work, and interesting collaborations. if you're looking to hire or
            collaborate - let's talk
          </p>
        </div>

        <div className='grid grid-cols-3 gap-6 justify-center items-center mt-24'>
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=syifasukmawork@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='block'
          >
            <div className='bg-white dark:bg-dark200 dark:border-gray-600 rounded-xl py-5 px-5 shadow-lg dark:shadow-md dark:shadow-dark300/80 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
              <div className='flex flex-col items-center '>
                <div className='bg-blue/10 dark:bg-blue/10 rounded-lg p-3 w-fit'>
                  <FaEnvelope className=' text-lg text-blue' />
                </div>
                <h4 className='dark:text-white text-blue font-medium mt-4'>Email</h4>
                <p className='text-sm dark:text-gray-400'>syifasukmawork@gmail.com</p>
                <p className='rotate-45 mt-2'>
                  <FaArrowUp className='dark:text-gray-400 text-blue' />
                </p>
              </div>
            </div>
          </a>
          <a href='https://www.instagram.com/syifasukmaa'>
            <div className='bg-white dark:bg-dark200 dark:border-gray-600 rounded-xl py-5 px-5 shadow-lg dark:shadow-md dark:shadow-dark300/80 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
              <div className='flex flex-col items-center '>
                <div className='bg-blue/10 dark:bg-blue/10 rounded-lg p-3 w-fit'>
                  <FaInstagram className=' text-lg text-blue' />
                </div>
                <h4 className='dark:text-white text-blue font-medium mt-4'>Instagram</h4>
                <p className='text-sm dark:text-gray-400'>instagram.com/syifasukmaa</p>
                <p className='rotate-45 mt-2'>
                  <FaArrowUp className='dark:text-gray-400 text-blue' />
                </p>
              </div>
            </div>
          </a>

          <a href='https://www.linkedin.com/in/syifasukma/'>
            <div className='bg-white dark:bg-dark200 dark:border-gray-600 rounded-xl py-5 px-5 shadow-lg dark:shadow-md dark:shadow-dark300/80 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
              <div className='flex flex-col items-center '>
                <div className='bg-blue/10 dark:bg-blue/10 rounded-lg p-3 w-fit'>
                  <FaLinkedin className=' text-lg text-blue' />
                </div>
                <h4 className='dark:text-white text-blue font-medium mt-4'>Linkedin</h4>
                <p className='text-sm dark:text-gray-400'>linkedin.com/in/syifasukma</p>
                <p className='rotate-45 mt-2'>
                  <FaArrowUp className='dark:text-gray-400 text-blue' />
                </p>
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
