import { galleryContainerVariant } from '../../utils/motion';
import CardItem from './CardItem';
import { motion } from 'framer-motion';

function CardList({ projects }) {
  return (
    <motion.div
      className='grid w-full gap-5 mt-10 rounded-lg md:grid-cols-2 xl:grid-cols-3'
      variants={galleryContainerVariant}
      initial='hidden'
      animate='show'
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((project) => (
        <CardItem
          key={project.id}
          project={project}
        />
      ))}
    </motion.div>
  );
}

export default CardList;
