import { BsLink45Deg, BsGithub } from 'react-icons/bs';
import CardItemBody from './CardItemBody';
import PrevButton from './PrevButton';
import CodeButton from './CodeButton';
import { motion } from 'framer-motion';

const CardItem = ({ project }) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, amount: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="w-full transition-all duration-500 ease-in-out bg-white dark:bg-dark200 rounded-lg drop-shadow-lg hover:scale-110"
      >
        <div className="w-full overflow-hidden rounded-t-lg img">
          <img
            src={project.imgUrl}
            alt={project.name}
            className="w-full bg-cover"
          />
        </div>

        <div className="p-5 ">
          <CardItemBody
            title={project.name}
            desc={project.desc}
            stack={project.stack}
          />

          <div className="flex justify-between mt-3">
            <PrevButton
              icon={<BsLink45Deg className="dark:text-dark600" />}
              title={project.preview}
            />
            <CodeButton
              icon={<BsGithub className="dark:text-dark600" />}
              title={project.github}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CardItem;
