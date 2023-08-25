import Button from './Button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" className="w-[90%] mx-auto lg:w-[75%]">
      <div className="flex flex-col items-center justify-between pt-32 mx-auto text-center md:text-left lg:items-center pb-14 md:pt-36 lg:pt-48 md:flex-row font-poppins">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, amount: 0.5 }}
          variants={{
            visible: { x: '0' },
            hidden: { x: '-200px' },
          }}
          className="mb-6"
        >
          <div className="text-2xl font-bold font-poppins xl:text-4xl md:text-3xl ">
            <p className="mb-2 text-ygPurple dark:text-primary100">Hi👋</p>
            <p className="mb-2 text-ygPurple dark:text-primary100">
              My name is
              <span className="text-transparent gradient-secondary bg-clip-text">
                {' '}
                Syifa Sukma
              </span>
            </p>
            <p className="text-ygPurple dark:text-primary100">I am a</p>
            <TypeAnimation
              className="text-transparent gradient-secondary bg-clip-text"
              sequence={[' Web Developer', 2000, ' Student Collage', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <Button
            title={'Curriculum Vitae'}
            styling={
              'rounded-full bg-blue dark:bg-light500 py-3 px-7 mt-6 font-bold text-white transition-all duration-500 ease-in-out md:py-2 md:px-5  lg:py-2.5 lg:px-7 hover:bg-darkBlue dark:hover:bg-light300 dark:text-dark100'
            }
            click={() =>
              window.open(
                'https://drive.google.com/file/d/1azFu_upXzkcphLffpqfkU_mD7QRHBsow/view?usp=sharing',
                '_blank'
              )
            }
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.7, amount: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="self-center hidden max-w-lg rounded-full md:justify-end md:flex gradient-primary"
        >
          <img
            src="/img/sipa.jpg"
            alt="photo sipa"
            className="relative p-1.5 rounded-full w-48 lg:w-64"
          />
        </motion.div>
      </div>
    </section>
  );
}
export default Home;
