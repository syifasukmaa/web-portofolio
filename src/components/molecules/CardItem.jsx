// import { BsLink45Deg, BsGithub } from 'react-icons/bs';
// import CardItemBody from '../atoms/CardItemBody';
// import PrevButton from '../atoms/PrevButton';
// import CodeButton from '../atoms/CodeButton';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { galleryVariant } from '../../utils/motion';

const CardItem = ({ project }) => {
  return (
    <motion.div
      className='relative overflow-hidden h-44 group hover:rounded-lg'
      variants={galleryVariant}
      initial='hidden'
      animate='show'
    >
      <img
        src={project.imgUrl}
        alt={project.name}
        className='object-cover w-full rounded-lg group-hover:transition-transform '
      />
      <div className='absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-black/30 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60 group-active:from-black/60 group-active:via-black/50 group-active:to-black/60'></div>
      <div className='absolute bottom-0 inset-x-0 flex flex-col bg-blue group-hover:bg-transparent items-center justify-center rounded-b-lg transition-all group-hover:duration-300 translate-y-[70%] lg:translate-y-[70%] group-hover:translate-y-0 group-hover:inset-y-0'>
        <p className='z-50 py-2 mb-4 text-base font-semibold text-white hover:font-medium md:py-0 lg:py-2 md:text-base lg:text-lg group-hover:mb-0 group-hover:py-0 group-active:mb-0 group-active:py-0'>
          {project.name}
        </p>
        <a
          className='z-10 flex px-4 py-1 mt-2 font-medium text-white hover:underline'
          href={project.preview}
          target='_blank'
          rel='noreferrer'
        >
          Live Demo
          <span className='ml-1'>
            <img
              src='/img/stack/preview.svg'
              alt='preview icon'
              className='w-6 h-6 mr-2 invert'
            />
          </span>
        </a>
        <Link
          to={`/projects/${project.id}`}
          target='_blank'
          className='z-10 px-4 py-1 mt-4 text-white rounded-lg bg-white/50 hover:font-semibold hover:transition-all '
        >
          More Detail
        </Link>
      </div>
    </motion.div>
  );
};

export default CardItem;
