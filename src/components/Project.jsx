import CardList from './CardList';
import allProject from '../data/project.json';
import { motion } from 'framer-motion';

function Project() {
  return (
    <section id="project" className="w-full py-28 md:pt-18 font-poppins">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, amount: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="w-[90%] mx-auto lg:w-[75%]"
      >
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 ">
            Projects
          </h3>
          <p className="pt-2 font-light text-greys md:text-xl dark:text-primary400">
            Things I’ve built so far
          </p>
        </div>
        <CardList projects={allProject} />
      </motion.div>
    </section>
  );
}

export default Project;
