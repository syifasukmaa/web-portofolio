import { motion } from 'framer-motion';
import { galleryVariant } from '../../utils/motion';

export default function StackItem({ data }) {
  return data.map((icon) => (
    <motion.div
      key={icon.id}
      variants={galleryVariant}
      whileHover={{ y: -6, scale: 1.02 }}
      className='flex flex-col items-center px-0 py-4 rounded-xl dark:bg-dark200 shadow-blue/10 shadow-md border-2 hover:border-blue/30 transition-all'
    >
      <img
        src={icon.img}
        alt={icon.alt}
        className='self-center w-1/2'
      />
      <p className='mt-6 dark:text-dark700 font-medium'>{icon.text}</p>
    </motion.div>
  ));
}
