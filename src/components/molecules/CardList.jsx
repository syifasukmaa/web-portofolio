import CardItem from './CardItem';

function CardList({ projects }) {
  return (
    <div className='grid w-full gap-5 mt-10 rounded-lg md:grid-cols-2 xl:grid-cols-3'>
      {projects.map((project) => (
        <CardItem
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default CardList;
