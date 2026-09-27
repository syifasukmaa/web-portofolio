import CardItem from "./CardItem";

function CardList({ projects }) {
  return (
    <div className="flex flex-col gap-16 md:gap-24 mt-14 md:mt-20">
      {projects.map((project, index) => (
        <CardItem key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

export default CardList;
