import CardList from '../molecules/CardList';
import allProject from '../../data/project.json';

function Project() {
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
        <CardList projects={allProject} />
      </div>
    </section>
  );
}

export default Project;
