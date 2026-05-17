import { motion } from 'framer-motion';
import { FaArrowUp, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { cardVariant, containerVariant, galleryContainerVariant } from '../../utils/motion';
function Contact() {
  return (
    <section
      id='contact'
      className='w-full py-28 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200'
    >
      <motion.div
        variants={containerVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.2 }}
        className='w-[90%] mx-auto lg:w-[75%]'
      >
        <div className='text-center'>
          <h3 className='text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 '>Contact</h3>
          <p className='pt-2 font-light text-greys md:text-xl dark:text-primary400 dark:font-normal'>
            I'm open to full-time roles, freelance work, and interesting collaborations. if you're looking to hire or
            collaborate - let's talk
          </p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 justify-center items-center mt-24'>
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=syifasukmawork@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='block'
          >
            <motion.div
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
              className='bg-white dark:bg-dark200 dark:border-gray-600 rounded-xl py-5 px-5 shadow-lg dark:shadow-md dark:shadow-dark300/80 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'
            >
              <div className='flex flex-col items-center '>
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                  }}
                  className='bg-blue/10 dark:bg-blue/10 rounded-lg p-3 w-fit'
                >
                  <FaEnvelope className=' text-lg text-blue' />
                </motion.div>
                <h4 className='dark:text-white text-blue font-medium mt-4'>Email</h4>
                <p className='text-sm dark:text-gray-400'>syifasukmawork@gmail.com</p>
                <p className='rotate-45 mt-2'>
                  <FaArrowUp className='dark:text-gray-400 text-blue' />
                </p>
              </div>
            </motion.div>
          </a>
          <a href='https://www.instagram.com/syifasukmaa'>
            <motion.div
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
              className='bg-white dark:bg-dark200 dark:border-gray-600 rounded-xl py-5 px-5 shadow-lg dark:shadow-md dark:shadow-dark300/80 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'
            >
              <div className='flex flex-col items-center '>
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                  }}
                  className='bg-blue/10 dark:bg-blue/10 rounded-lg p-3 w-fit'
                >
                  <FaInstagram className=' text-lg text-blue' />
                </motion.div>
                <h4 className='dark:text-white text-blue font-medium mt-4'>Instagram</h4>
                <p className='text-sm dark:text-gray-400'>instagram.com/syifasukmaa</p>
                <p className='rotate-45 mt-2'>
                  <FaArrowUp className='dark:text-gray-400 text-blue' />
                </p>
              </div>
            </motion.div>
          </a>

          <a href='https://www.linkedin.com/in/syifasukma/'>
            <motion.div
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
              className='bg-white dark:bg-dark200 dark:border-gray-600 rounded-xl py-5 px-5 shadow-lg dark:shadow-md dark:shadow-dark300/80 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'
            >
              <div className='flex flex-col items-center '>
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                  }}
                  className='bg-blue/10 dark:bg-blue/10 rounded-lg p-3 w-fit'
                >
                  <FaLinkedin className=' text-lg text-blue' />
                </motion.div>
                <h4 className='dark:text-white text-blue font-medium mt-4'>Linkedin</h4>
                <p className='text-sm dark:text-gray-400'>linkedin.com/in/syifasukma</p>
                <p className='rotate-45 mt-2'>
                  <FaArrowUp className='dark:text-gray-400 text-blue' />
                </p>
              </div>
            </motion.div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
