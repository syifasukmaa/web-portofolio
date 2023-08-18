import { BsLink45Deg, BsGithub } from 'react-icons/bs';
import CardItemBody from './CardItemBody';
import PrevButton from './PrevButton';
import CodeButton from './codeButton';

const CardItem = ({ project }) => {
  return (
    <>
      <div className="w-full transition-all duration-500 ease-in-out bg-white dark:bg-dark200 rounded-lg drop-shadow-lg hover:scale-110">
        <div className="w-full overflow-hidden rounded-t-lg img">
          <img
            src={project.imgUrl}
            alt={project.name}
            className="w-full bg-cover"
          />
        </div>

        <div className="p-5 ">
          <CardItemBody
            title={project.name}
            desc={project.desc}
            stack={project.stack}
          />

          <div className="flex justify-between mt-3">
            <PrevButton
              icon={<BsLink45Deg className="dark:text-dark600" />}
              title={project.preview}
            />
            <CodeButton
              icon={<BsGithub className="dark:text-dark600" />}
              title={project.github}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
