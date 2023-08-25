import iconStack from '../data/iconStack.json';
import { motion } from 'framer-motion';

function Stack() {
  return (
    <section
      id="stack"
      className="w-full md:py-32 py-20 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, amount: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="w-[90%] mx-auto lg:w-[75%] pt-8 md:pt-12 pb-12"
      >
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 ">
            My Tech Stack
          </h3>
          <p className="pt-2 font-light text-greys dark:text-primary400 md:text-xl">
            Technologies I’ve been working with recently
          </p>
        </div>
        <div className="grid w-full grid-cols-3 mt-10 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-y-8">
          {iconStack.map((icon) => (
            <img
              key={icon.id}
              src={icon.img}
              alt={icon.alt}
              width={50}
              height={50}
              className="self-center"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Stack;
