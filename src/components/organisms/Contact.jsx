import { useState } from 'react';
import Button from '../atoms/Button';
import { motion } from 'framer-motion';
function Contact() {
  const [input, setInput] = useState('');
  const sendForm = (e) => {
    e.preventDefault();
    setInput('');
  };

  return (
    <section
      id='contact'
      className='w-full py-44 md:pt-18 font-poppins'
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.7, amount: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className='w-[90%] mx-auto lg:w-[75%]'
      >
        <div className='text-center'>
          <h4 className='mb-3 text-lg font-bold md:text-xl dark:text-dark700'>Lets Connect and say Hi!</h4>
          <p className='font-normal dark:text-dark600'>If you’d like to say hi or work with me:</p>
          <form onSubmit={sendForm}>
            <input
              type='text'
              value={input}
              placeholder='Type a messege here'
              className='w-4/5 px-6 py-5 mt-8 mr-4 font-light rounded-full bg-slate-200 md:py-4 md:px-6 md:w-2/5'
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              styling={
                'w-2/5 md:w-1/6 rounded-full bg-blue py-5 px-8 mt-6 font-bold text-white transition-all duration-500 ease-in-out md:py-4 md:px-4 hover:bg-darkBlue dark:bg-light500 dark:text-dark100 dark:hover:bg-light300'
              }
            >
              Send
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
