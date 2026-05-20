import CardList from '../molecules/CardList';
import allProject from '../../data/project.json';
import { useRef, useState } from 'react';

function Project() {
  const [shown, setShown] = useState(3);

  const newCardRef = useRef(null);
  const hasMore = shown < allProject.length;

  const handleShowMore = () => {
    const prevShown = shown;
    setShown((prev) => Math.min(prev + 3, allProject.length));
  }
  return (
    <section
      id='project'
      className='w-full py-28 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200'
    >
      <div className='w-[90%] mx-auto lg:w-[75%]'>
        <div className='text-center'>
          <h3 className='text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100'>
            Projects
          </h3>
          <p className='pt-2 font-light text-greys md:text-xl dark:text-primary400 dark:font-normal'>
            My work So Far
          </p>
        </div>

        <CardList projects={allProject.slice(0, shown)} />

        <div className='flex items-center justify-center mt-10'>
          {hasMore ? (
            <button
              className='px-4 py-2 transition rounded-lg shadow-lg hover:shadow-xl bg-blue/10 text-blue hover:bg-blue hover:text-white dark:bg-darkBlue/10 dark:text-darkBlue dark:hover:bg-darkBlue dark:hover:text-white'
              onClick={() => handleShowMore()}
            >
              Show More
            </button>
          ) : (
            <button
              className='px-4 py-2 transition rounded-lg shadow-lg hover:shadow-xl bg-dark200/30 text-dark200 dark:text-dark700 dark:bg-dark400 hover:bg-dark300'
              onClick={() => setShown(3)}
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Project;
