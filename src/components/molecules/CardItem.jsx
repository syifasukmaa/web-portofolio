import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { galleryVariant } from '../../utils/motion';

const stackColors = {
  'react js': '#61dafb',
  react: '#61dafb',
  'next js': '#000000',
  'next.js': '#000000',
  'vue js': '#42b883',
  vue: '#42b883',
  bootstrap: '#7952b3',
  tailwindcss: '#38bdf8',
  'tailwind css': '#38bdf8',
  tailwind: '#38bdf8',
  javascript: '#f7df1e',
  typescript: '#3178c6',
  sass: '#cc6699',
  nodejs: '#68a063',
  'node js': '#68a063',
  webpack: '#8dd6f9',
  swr: '#555555',
  zustand: '#8b5cf6',
  'swiper js': '#0080ff',
  laravel: '#ff2d20',
  blade: '#ef4444',
  firebase: '#ffca28',
  supabase: '#3ecf8e',
  vite: '#646cff',
  redux: '#764abc',
  figma: '#f24e1e',
  git: '#f05032',
  mysql: '#4479a1',
  mongodb: '#47a248',
};

const getStackColor = (tech) => {
  const key = Object.keys(stackColors).find(
    (k) => k.toLowerCase() === tech.toLowerCase()
  );
  return key ? stackColors[key] : '#888888';
};

const CardItem = ({ project, index }) => {
  const isDone = project.process === 'Done';

  const colIndex = index % 3;
  const delay = colIndex * 0.12;


  return (

    <motion.div
      className='flex flex-col overflow-hidden transition-transform duration-200 border rounded-2xl bg-white/80 dark:bg-dark200/80 border-white/20 dark:border-dark300 backdrop-blur-sm hover:-translate-y-1 active:scale-[0.98]'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}

    >
      {/* Thumbnail */}
      <div className='relative overflow-hidden h-44'>
        <img
          src={project.imgUrl}
          width={1200}
          height={700}
          alt={project.name}
          className='object-cover w-full h-full transition-transform duration-300 hover:scale-105'
        />

        {/* Status dot */}
        <span
          className={`absolute top-3 right-3 w-2.5 h-2.5 rounded-full border-2 border-white/60 ${isDone ? 'bg-green-400' : 'bg-amber-400'
            }`}
          title={project.process}
        />
      </div>

      {/* Body */}
      <div className='flex flex-col flex-1 gap-2 p-4'>
        <h3 className='text-base font-bold text-greys dark:text-dark600'>
          {project.name}
        </h3>

        <p className='text-sm font-light leading-relaxed text-gray-500 dark:text-dark500 line-clamp-2'>
          {project.desc}
        </p>

        {/* Stack chips */}
        <div className='flex flex-wrap gap-1.5 mt-1'>
          {project.stack.map((tech, i) => {
            const color = getStackColor(tech);
            return (
              <span
                key={i}
                className='text-[10px] px-2 py-0.5 rounded-full border font-medium'
                style={{
                  borderColor: color + '55',
                  color: color !== '#888888' ? color : undefined,
                }}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      {/* Footer — selalu visible, tidak pakai hover */}
      <div className='flex gap-2 p-4 pt-0'>
        <a
          href={project.preview}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center flex-1 gap-1.5 py-2 text-xs font-medium text-white transition rounded-xl bg-blue dark:bg-darkBlue hover:opacity-90 active:scale-95'
        >
          <img
            src='/img/stack/preview.svg'
            alt=''
            className='w-3.5 h-3.5 invert'
          />
          Live Demo
        </a>

        <Link
          to={`/projects/${project.id}`}
          className='flex items-center justify-center flex-1 gap-1.5 py-2 text-xs font-medium transition border rounded-xl text-greys dark:text-dark600 border-dark300 dark:border-dark400 hover:bg-gray-100 dark:hover:bg-dark300 active:scale-95'
        >
          More Detail
        </Link>
      </div>
    </motion.div>
  );
};

export default CardItem;
