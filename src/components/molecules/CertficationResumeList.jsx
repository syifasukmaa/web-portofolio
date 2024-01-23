import sertifications from '../../data/sertifikasi.json';
import { slideIn } from '../../utils/motion';
import ResumeBody from '../atoms/ResumeBody';
import { motion } from 'framer-motion';

export default function CertficationResumeList() {
  return (
    <motion.div
      variants={slideIn('right', 'tween', 0.5, 1.5)}
      initial='hidden'
      whileInView='show'
      className='relative top-4 md:left-2'
    >
      {/* height dinamis */}
      <div className='flex flex-col w-[6px] h-[610px] lg:h-[535px] mt-4 rounded-md bg-blue dark:bg-darkBlue'></div>

      <div className='absolute top-0 grid w-full grid-cols-1 gap-8 left-10'>
        {sertifications.map((sertifications) => (
          <div
            key={sertifications.id}
            className='relative w-3/4 px-6 py-8 ml-3 bg-white rounded-md shadow-lg dark:bg-dark300 group hover:bg-slate-100 shadow-blue/30'
          >
            <ResumeBody
              title={sertifications.title}
              desc={sertifications.desc}
              year={sertifications.year}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
