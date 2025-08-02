import CardList from '../molecules/CardList';
import allProject from '../../data/project.json';
import { useState } from 'react';

function Project() {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <section
      id='project'
      className='w-full py-28 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200'
    >
      <div className='w-[90%] mx-auto lg:w-[75%]'>
        <div className='text-center'>
          <h3 className='text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 '>Projects</h3>
          <p className='pt-2 font-light text-greys md:text-xl dark:text-ygPurple dark:font-normal'>My work So Far</p>
        </div>
        <CardList projects={visible ? allProject : allProject.slice(0, 3)} />

        <div className='flex items-center justify-center mt-10'>
          <button
            className={`px-4 py-2 text-white transition rounded-lg shadow-lg hover:shadow-xl ${
              visible ? 'bg-dark600 hover:bg-darkk400' : 'bg-purple hover:bg-pink-600'
            }`}
            onClick={handleVisible}
          >
            {visible ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Project;
