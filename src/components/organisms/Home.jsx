import Button from '../atoms/Button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';

function Home() {
  const CV = 'https://drive.google.com/file/d/1dwvVCvxlGdHtxHIdVdb0fihSXGDSiQoB/view?usp=sharing';
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
          <div className='text-xl font-bold font-poppins xl:text-5xl md:text-3xl '>
            <p className='mb-2 lg:mb-6 text-ygPurple dark:text-primary100'>Hi👋</p>
            <p className='mb-4 text-ygPurple dark:text-primary100'>
              My name is
              <span className='text-transparent gradient-secondary bg-clip-text'> Syifa Sukma</span>
            </p>
            <p className='mb-2 text-ygPurple dark:text-primary100'>I am a</p>
            <TypeAnimation
              className='text-transparent gradient-secondary bg-clip-text'
              sequence={[' Front End Web Developer', 2000, 'Customer Service', 2000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </div>
          {/* tambahin button untuk sosial media (instagram, linkedin, github) */}
          <Button
            styling={
              'rounded-lg bg-blue/20 dark:bg-light500 mx-auto md:mx-0 py-3 px-7 mt-6 mb-6 md:mb-0 font-bold text-blue transition-all duration-500 ease-in-out md:py-2 md:px-5 lg:py-2.5 lg:px-7 hover:bg-blue hover:text-white dark:bg-blue/30 dark:hover:bg-light300 dark:text-white flex'
            }
            click={() => window.open(CV, '_blank')}
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

        <div className='relative flex items-center justify-center mt-5 md:mt-0'>
          <svg
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute w-[300px] lg:w-[450px] -mt-14 md:-mt-28 -mr-28 md:-mr-32 opacity-10'
          >
            <defs>
              <linearGradient
                id='fill'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
                gradientTransform='rotate(45 0.5 0.5)'
              >
                <stop
                  offset='0%'
                  stopColor='#4F46E5'
                />
                <stop
                  offset='100%'
                  stopColor='#FF7AF9'
                />
              </linearGradient>
            </defs>

            <path
              d='M83,69Q72,88,51.5,85.5Q31,83,17.5,66.5Q4,50,15.5,30Q27,10,49.5,11Q72,12,83,31Q94,50,83,69Z'
              fill='url(#fill)'
            />
          </svg>
          <svg
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute w-[300px] lg:w-[450px] -mt-10 md:-mt-16 -mr-16 md:-mr-20 opacity-10'
          >
            <defs>
              <linearGradient
                id='fill'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
                gradientTransform='rotate(45 0.5 0.5)'
              >
                <stop
                  offset='0%'
                  stopColor='#4F46E5'
                />
                <stop
                  offset='100%'
                  stopColor='#FF7AF9'
                />
              </linearGradient>
            </defs>

            <path
              d='M83,69Q72,88,51.5,85.5Q31,83,17.5,66.5Q4,50,15.5,30Q27,10,49.5,11Q72,12,83,31Q94,50,83,69Z'
              fill='url(#fill)'
            />
          </svg>
          <svg
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute w-[300px] lg:w-[450px]'
          >
            <defs>
              <linearGradient
                id='fill'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
                gradientTransform='rotate(45 0.5 0.5)'
              >
                <stop
                  offset='0%'
                  stopColor='#4F46E5'
                />
                <stop
                  offset='100%'
                  stopColor='#FF7AF9'
                />
              </linearGradient>
            </defs>

            <path
              d='M83,69Q72,88,51.5,85.5Q31,83,17.5,66.5Q4,50,15.5,30Q27,10,49.5,11Q72,12,83,31Q94,50,83,69Z'
              fill='url(#fill)'
            />
          </svg>

          <img
            src='/img/sipa.png'
            alt='Syifa'
            className='relative z-10 w-80 md:w-[380px] lg:w-[500px] -mt-20 md:-mt-36 lg:-mt-44'
          />
        </div>
      </div>
    </section>
  );
}
export default Home;
