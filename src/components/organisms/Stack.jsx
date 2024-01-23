import { useState } from 'react';
import iconStack from '../../data/iconStack.json';
import iconTools from '../../data/iconTools.json';
import { motion } from 'framer-motion';
import Button from '../atoms/Button';
import StackItem from '../molecules/StackItem';
import { IoSettingsSharp } from 'react-icons/io5';
import { FaTools } from 'react-icons/fa';

function Stack() {
  const [stack, setStack] = useState(true);

  const handleStack = (e) => {
    e.preventDefault();
    setStack(!stack);
  };

  return (
    <section
      id='stack'
      className='w-full py-20 md:py-32 md:pt-18 font-poppins '
    >
      <div className='w-[90%] mx-auto lg:w-[75%] pt-8 md:pt-12 pb-12'>
        <div className='text-center'>
          <h3 className='text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 '>My Tech Stack</h3>
          <p className='pt-2 font-light text-greys dark:text-primary400 md:text-xl'>
            Technologies I’ve been working with recently
          </p>
        </div>
        <div className='flex justify-center mt-6 text-center text-white'>
          <Button
            styling={`${stack ? 'bg-blue' : 'bg-dark600'} bg-blue py-2 px-4 mr-2 rounded-lg flex items-center`}
            click={handleStack}
          >
            <IoSettingsSharp className='mr-2 text-xl' />
            Techstack
          </Button>
          <Button
            styling={`${
              stack ? 'bg-dark600' : 'bg-blue'
            } bg-blue py-2 px-4 mr-2 rounded-lg min-w-[110px]  flex items-center`}
            click={handleStack}
          >
            <FaTools className='mr-2 text-xl' />
            Tools
          </Button>
        </div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false }}
          transition={{ duration: 0.7, amount: 0.7 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className='grid w-full grid-cols-3 gap-8 mt-10 md:grid-cols-4 lg:grid-cols-6 justify-items-center md:gap-y-8'
        >
          {stack ? <StackItem data={iconStack} /> : <StackItem data={iconTools} />}
        </motion.div>
      </div>
    </section>
  );
}

export default Stack;
