import { BsLink45Deg, BsGithub } from 'react-icons/bs';
import CardItemBody from '../atoms/CardItemBody';
import PrevButton from '../atoms/PrevButton';
import CodeButton from '../atoms/CodeButton';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const CardItem = ({ project }) => {
  return (
    <>
      <motion.div
        initial='hidden'
        whileInView='visible'
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, amount: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className='w-full transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg shadow-blue/40 dark:bg-dark200 drop-shadow-lg hover:scale-125'
      >
        <div className='w-full overflow-hidden rounded-t-lg img'>
          <Link to={`/projects/${project.id}`}>
            <img
              src={project.imgUrl}
              alt={project.name}
              className='w-full bg-cover'
            />
          </Link>
        </div>

        <div className='p-5'>
          <div className='flex flex-col'>
            <div
              className={`px-2 mb-1 border-[2.5px] ${
                project.process === 'Done' ? 'border-green-500 ' : 'border-red-600'
              } rounded-xl w-fit dark:text-dark700`}
            >
              {project.process}
            </div>
            <CardItemBody
              title={project.name}
              desc={project.desc}
              stack={project.stack}
            />
          </div>
          <div className='flex justify-between mt-3'>
            <PrevButton
              icon={<BsLink45Deg className='dark:text-dark600' />}
              title={project.preview}
            />
            <CodeButton
              icon={<BsGithub className='dark:text-dark600' />}
              title={project.github}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CardItem;
