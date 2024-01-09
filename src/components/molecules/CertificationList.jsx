import { motion } from 'framer-motion';

export default function CertificationList({ certifacates }) {
  return (
    <div className='relative grid w-full gap-5 mt-10 rounded-lg hover:z-10 md:grid-cols-2 xl:grid-cols-3'>
      {certifacates?.map((certificate) => (
        <motion.div
          key={certificate.id}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.3, amount: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
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
    </div>
  );
}
