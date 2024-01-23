import { motion } from 'framer-motion';
import { galleryContainerVariant, galleryVariant } from '../../utils/motion';

export default function CertificationList({ certifacates }) {
  return (
    <motion.div
      variants={galleryContainerVariant}
      initial='hidden'
      whileInView='show'
      className='relative grid w-full gap-5 mt-10 rounded-lg hover:z-10 md:grid-cols-2 xl:grid-cols-3'
    >
      {certifacates?.map((certificate) => (
        <motion.div
          variants={galleryVariant}
          key={certificate.id}
          className='w-full transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg hover:z-10 dark:bg-dark300 shadow-blue/25 drop-shadow-lg hover:scale-110'
        >
          <div className='z-20 w-full px-5 py-5 overflow-hidden transition-all img hover:scale-150 hover:relative hover:z-50'>
            <img
              src={certificate.image}
              alt={certificate.desc}
              className='w-full bg-cover rounded-md '
            />
          </div>

          <div className='px-5 pb-5'>
            <p className='text-xl dark:text-dark700'>{certificate.title}</p>
            <p className='mt-2 text-sm font-light dark:text-dark600'>{certificate.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
