import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn, galleryContainerVariant, galleryVariant, zoomIn } from '../../utils/motion';
import { useState } from 'react';

export default function CertificationList({ certifacates }) {
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
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
            <div className='z-20 w-full px-5 py-5 overflow-hidden transition-allhover:relative hover:z-50'>
              <img
                src={certificate.image}
                alt={certificate.desc}
                className='w-full bg-cover rounded-md cursor-pointer'
                onClick={() => setModalImage(certificate.image)}
              />
            </div>

            <div className='px-5 pb-5'>
              <p className='text-xl font-medium dark:text-dark700'>{certificate.title}</p>
              <p className='mt-2 text-base font-light dark:text-dark600'>{certificate.desc}</p>
              <p>{certificate.year}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial='hidden'
            animate='show'
            exit='hidden'
            variants={fadeIn}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'
            onClick={() => setModalImage(null)}
          >
            <motion.img
              initial='hidden'
              animate='show'
              variants={zoomIn}
              src={modalImage}
              alt='Preview'
              className='max-h-[80%] max-w-[90%] rounded-xl shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
