import { slideIn } from '../../utils/motion';
import CertficationResumeList from '../molecules/CertficationResumeList';
import EducationList from '../molecules/EducationList';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section
      id='resume'
      className='w-full py-28 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200'
    >
      <div className='w-[90%] mx-auto lg:w-[75%]'>
        <div className='text-center'>
          <h3 className='text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 '>Resume</h3>
          <p className='pt-2 font-light text-greys md:text-xl dark:text-ygPurple dark:font-normal'>
            A Years Of Experience
          </p>
        </div>

        {/* Body */}
        <div className='flex flex-col justify-between mt-8 md:flex-row'>
          <motion.div
            variants={slideIn('left', 'tween', 0.5, 0.5)}
            initial='hidden'
            whileInView='show'
            className='flex-col w-5/6 md:w-1/2'
          >
            <p className='text-2xl text-left text-dark100 dark:text-dark700'>Education's</p>
            <EducationList />
          </motion.div>

          <motion.div
            variants={slideIn('right', 'tween', 0.5, 0.5)}
            initial='hidden'
            whileInView='show'
            className='w-5/6 md:ml-10 mt-28 md:mt-0 md:w-1/2'
          >
            <p className='text-2xl text-left text-dark100 dark:text-dark700'>Certificates</p>
            <CertficationResumeList />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
