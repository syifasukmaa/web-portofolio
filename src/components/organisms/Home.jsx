import Button from '../atoms/Button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';

function Home() {
  return (
    <section
      id='home'
      className='w-[90%] mx-auto lg:w-[75%] pt-18 md:pt-16'
    >
      <div className='flex flex-col items-center justify-between pt-32 mx-auto text-center md:text-left lg:items-center pb-14 md:pt-36 lg:pt-48 md:flex-row font-poppins'>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={slideIn('left', 'tween', 0.5, 0.7)}
          className='mb-6'
        >
          <div className='text-2xl font-bold font-poppins xl:text-4xl md:text-3xl '>
            <p className='mb-2 text-ygPurple dark:text-primary100'>Hi👋</p>
            <p className='mb-2 text-ygPurple dark:text-primary100'>
              My name is
              <span className='text-transparent gradient-secondary bg-clip-text'> Syifa Sukma</span>
            </p>
            <p className='text-ygPurple dark:text-primary100'>I am a</p>
            <TypeAnimation
              className='text-transparent gradient-secondary bg-clip-text'
              sequence={[' Front End Web Developer', 2000, ' Student Collage', 2000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </div>
          <Button
            styling={
              'rounded-full bg-blue dark:bg-light500 mx-auto md:mx-0 py-3 px-7 mt-6 mb-6 md:mb-0 font-bold text-white transition-all duration-500 ease-in-out md:py-2 md:px-5  lg:py-2.5 lg:px-7 hover:bg-darkBlue dark:hover:bg-light300 dark:text-dark100 flex'
            }
            click={() =>
              window.open(
                'https://drive.google.com/file/d/1Y9pqWosIoYHN2N8hHEMyVeSfPael6kTx/view?usp=sharing',
                '_blank',
              )
            }
          >
            <p>Download CV</p>
            <svg
              className='ml-2'
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              height='20'
              width='20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 2v8'></path>
              <path d='m16 6-4 4-4-4'></path>
              <rect
                width='20'
                height='8'
                x='2'
                y='14'
                rx='2'
              ></rect>
              <path d='M6 18h.01'></path>
              <path d='M10 18h.01'></path>
            </svg>
          </Button>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false }}
          transition={{ duration: 0.7, amount: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className='flex self-center max-w-lg rounded-full md:justify-end md:flex gradient-primary'
        >
          <img
            src='/img/sipa.png'
            alt='photo sipa'
            className='relative p-1.5 rounded-full w-48 lg:w-64'
          />
        </motion.div>
      </div>
    </section>
  );
}
export default Home;
