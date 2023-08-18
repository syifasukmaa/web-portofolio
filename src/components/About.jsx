import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="w-full pt-18 pb-20 md:pt-28 font-poppins">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, amount: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="w-[90%] mx-auto lg:w-[75%] pt-12 md:pt-0"
      >
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 ">
            About Me
          </h3>
          <p className="pt-2 font-light text-greys dark:text-ygPurple  md:text-xl">
            Get to know me
          </p>
        </div>
        <div className="flex items-center flex-col lg:flex-row mt-2">
          <img
            src="./img/Laptop3d.png"
            alt="laptop 3d"
            className="w-3/5 md:w-1/2"
          />
          <p className="mt-6 text-lg text-justify lg:px-14 lg:text-center text-ygPurple dark:text-dark600">
            5th semester student majoring in information systems at STT Terpadu
            Nurul Fikri has logical thinking skills and leadership that allow me
            to effectively solve all kinds of problems. I have a great interest
            in the IT industry, especially in the fields of web development and
            cloud computing.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
