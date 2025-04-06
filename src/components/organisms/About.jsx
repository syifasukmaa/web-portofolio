import { motion } from 'framer-motion';
import Button from '../atoms/Button';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function About() {
  return (
    <section
      id='about'
      className='w-full pb-20 pt-18 md:pt-28 font-poppins'
    >
      <div className='w-[90%] mx-auto lg:w-[75%] pt-12 md:pt-0'>
        <div className='text-center'>
          <h3 className='text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 '>About Me</h3>
          <p className='pt-2 font-light text-greys dark:text-ygPurple md:text-xl dark:font-normal'>Get to know me</p>
        </div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false }}
          transition={{ duration: 0.7, amount: 0.7 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className='flex flex-col items-center mt-2 lg:flex-row'
        >
          <img
            src='./img/Laptop3d.png'
            alt='laptop 3d'
            className='w-3/5 md:w-1/2'
          />
          <div className='ml-4 lg:px-10'>
            <h3 className='text-2xl font-semibold text-ygPurple dark:text-dark600'>
              Hello 👋 I'm <span className='text-blue dark:text-darkBlue'>Syifasukma</span>
            </h3>
            <h4 className='mt-2 text-xl font-semibold text-ygPurple dark:text-dark600'>
              A <span className='text-blue dark:text-darkBlue'>Front-End Web Developer</span> 🧑‍💻 based in{' '}
              <span className='text-blue dark:text-darkBlue'>Indonesia</span>
            </h4>
            <p className='mt-1 text-left text-md text-ygPurple dark:text-dark600'>
              5th semester student majoring in information systems at STT Terpadu Nurul Fikri has logical thinking
              skills that allow me to effectively solve all kinds of problems. I have a great interest in the IT
              industry, especially in the fields of web development and data management(administration).
            </p>
            <div className='flex mt-2'>
              <Button
                styling={
                  'rounded-md mt-4 flex py-1 px-4 cursor-pointer text-lg items-center transition-all ease-in-out lg:mx-0 lg:mr-0 font-dmsans text-dark100 dark:text-dark300 dark:bg-darkBlue bg-blue border-2 border-darkBlue dark:border-blue'
                }
                click={() => window.open('https://github.com/syifasukmaa', '_blank')}
              >
                <BsGithub className='dark:hover:text-light500 dark:text-dark700' />
                <p className='ml-2 font-semibold text-white dark:text-dark700'>Github</p>
              </Button>

              <Button
                styling={
                  'rounded-md mt-4 flex py-1 px-4 cursor-pointer text-lg items-center transition-all ease-in-out lg:mr-0 font-dmsans text-dark100 dark:text-dark300 dark:bg-darkBlue bg-blue border-2 border-darkBlue dark:border-blue ml-2'
                }
                click={() => window.open('https://www.linkedin.com/in/syifasukma/', '_blank')}
              >
                <BsLinkedin className='bg-transparent rounded-full hover:text-blue dark:hover:text-light500 dark:text-dark700' />
                <p className='ml-2 font-semibold text-white dark:text-dark700'>LinkedIn</p>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
