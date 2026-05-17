import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router';
import allProject from '../../data/project.json';
import { useState } from 'react';
import { fadeIn, fadeInUp, zoomIn } from '../../utils/motion';
import { FaAngleRight, FaBolt, FaMobile, FaMoon } from 'react-icons/fa';
import ToggleSwitch from '../molecules/ToggleSwitch';

function ProjectDetail() {
  const { id } = useParams();
  const project = allProject.find((project) => project.id.toString() === id);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  const techColors = {
    'React JS': '#61dafb',
    React: '#61dafb',
    'Vue JS': '#42b883',
    Vue: '#42b883',
    'Next JS': '#000000',
    'Next.js': '#000000',
    Bootstrap: '#7952b3',
    TailwindCSS: '#38bdf8',
    Tailwind: '#38bdf8',
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    'Node JS': '#68a063',
    Laravel: '#ff2d20',
    PHP: '#8892bf',
    MySQL: '#4479a1',
    MongoDB: '#47a248',
    Firebase: '#ffca28',
    Supabase: '#3ecf8e',
    Vite: '#646cff',
    Redux: '#764abc',
    'Framer Motion': '#0055ff',
    Figma: '#f24e1e',
    Git: '#f05032',
    sass: '#cc6699',
    nodejs: '#68a063',
    'node js': '#68a063',
    nodej: '#68a063',
    webpack: '#8dd6f9',
    tailwindcss: '#38bdf8', // tanpa spasi
    swr: '#000000',
    blade: '#ff2d20',
    'swiper js': '#0080ff',
    zustand: '#8b5cf6',
  };

  const getColor = (tech) => {
    const key = Object.keys(techColors).find((k) => k.toLowerCase() === tech.toLowerCase());
    return key ? techColors[key] : '#888888';
  };
  return (
    <div className='min-h-screen px-6 py-1 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark100 dark:to-dark200 lg:px-16'>
      <div className='flex items-center justify-between'>
        {/* button back */}
        <div className='flex items-center justify-start mt-10 mb-10 dark:text-dark600'>
          <button
            onClick={() => navigate('/')}
            className='py-2 mx-4 transition text-dark200 hover:text-dark600 dark:text-dark600'
          >
            Home
          </button>
          <FaAngleRight className='mr-2 dark:text-dark600' /> Detail Project
        </div>

        <ToggleSwitch />
      </div>

      <motion.div
        initial='hidden'
        animate='show'
        variants={fadeInUp}
        className='grid items-start gap-12 p-8 mx-auto border shadow-xl mb-5 lg:grid-cols-2 bg-white/60 dark:bg-dark200/60 backdrop-blur-xl border-white/30 dark:border-dark300 rounded-3xl'
      >
        {/* LEFT SIDE */}
        <div>
          <img
            src={project.imgUrl}
            alt={project.name}
            className='w-full shadow-lg rounded-2xl transition-transform duration-300 hover:scale-[1.02]'
          />

          {/* Gallery */}
          <div className='flex gap-4 mt-6'>
            {project.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Detail ${index}`}
                onClick={() => setModalImage(img)}
                className={`object-cover w-24 h-24  transition border rounded-xl shadow cursor-pointer 
    hover:scale-105 ${modalImage === img ? 'ring-2 ring-blue-500' : 'border-white/20'}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex flex-col justify-center'>
          <h1 className='mb-4 text-3xl font-bold text-blue dark:text-darkBlue'>{project.name}</h1>
          <p className='mb-4 text-gray-700 dark:text-dark600'>{project.desc}</p>

          <div className='mb-4'>
            <div className='flex'>
              <div className='flex flex-col items-start w-fit pr-5'>
                <p className='text-md font-semibold dark:text-dark600'>Progress</p>
                <span
                  className={`text-sm px-3 py-1 mt-1  font-medium flex items-center gap-2 ${
                    project.process === 'Done'
                      ? 'text-green-500 bg-green-500/20 dark:bg-green-500/50'
                      : 'text-red-600 bg-red-600/20'
                  } rounded-full w-fit dark:text-dark700`}
                >
                  <div className='w-2 h-2 bg-current rounded-full'></div>
                  {project.process}
                </span>
              </div>
              <div className='flex flex-col items-start border-x border-dark300 px-3 w-fit'>
                <p className='text-md font-semibold dark:text-dark600'>Tahun</p>
                <span
                  className={`text-sm py-1 mt-1 font-medium flex items-center gap-2 rounded-full w-fit dark:text-dark700`}
                >
                  2025
                </span>
              </div>
              <div className='flex flex-col items-start px-3 w-fit'>
                <p className='text-md font-semibold dark:text-dark600'>Tipe</p>
                <span
                  className={`text-sm py-1 mt-1 font-medium flex items-center gap-2  rounded-full w-fit dark:text-dark700`}
                >
                  Website
                </span>
              </div>
            </div>
          </div>
          <div className='mb-8'>
            <h3 className='mb-3 text-lg font-semibold dark:text-dark600'>🛠️ Tech Stack</h3>
            <div className='flex flex-wrap gap-4'>
              {/* {project.stack.map((tech, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 px-5 py-1.5 text-sm font-medium border shadow-md bg-white/70 dark:bg-dark300/70 backdrop-blur border-white/30 dark:border-dark300 rounded-xl'
                >
                  <div className='w-2 h-2 bg-current rounded-full'></div>
                  <span className='text-sm dark:text-dark700'>{tech}</span>
                </div>
              ))} */}

              {project.stack.map((tech, index) => {
                const color = getColor(tech);
                return (
                  <div
                    key={index}
                    className='flex items-center gap-2 px-4 py-1.5 text-sm font-medium border shadow-md bg-white/70 dark:bg-dark300/70 backdrop-blur rounded-xl transition-transform hover:scale-105'
                    style={{ borderColor: color + '66' }}
                  >
                    <div
                      className='w-2 h-2 rounded-full flex-shrink-0'
                      style={{
                        background: color,
                        boxShadow: `0 0 6px ${color}99`,
                      }}
                    />
                    <span className='text-sm dark:text-dark700'>{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='mb-2'>
            <h3 className='text-lg font-semibold dark:text-dark600'>📌 Key Features</h3>
            <div className='w-full max-w-md '>
              <ul className='text-dark200 dark:text-dark700'>
                <li className='text-base leading-7 flex items-center gap-2'>
                  <FaMobile /> Responsive Design
                </li>
                <li className='text-base leading-7 flex items-center gap-2'>
                  <FaMoon /> Dark Mode
                </li>
                <li className='text-base leading-7 flex items-center gap-2'>
                  <FaBolt /> Fast Performance
                </li>
              </ul>
            </div>
          </div>

          <div className='flex gap-4 mt-4'>
            <a
              href={project.preview}
              target='_blank'
              rel='noopener noreferrer'
              className='flex px-4 py-2 font-medium transition border rounded-lg shadow-lg bg-blue/30 text-blue border-blue/30 hover:bg-blue hover:text-white dark:bg-darkBlue/30 dark:text-dark700 dark:border-darkBlue/30 dark:hover:bg-darkBlue dark:hover:text-white'
            >
              <img
                src='/img/stack/preview.svg'
                alt='icon preview'
                className='mr-1 text-primary100 dark:invert'
              />
              Live View
            </a>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center px-4 py-2 font-medium transition border rounded-lg shadow bg-greys/30 text-greys border-greys/30 hover:bg-greys hover:text-white dark:bg-dark600/30 dark:text-dark700 dark:border-primary100/20 dark:hover:bg-dark600 dark:hover:text-white'
            >
              <img
                src='/img/stack/github2.svg'
                alt='icon preview'
                className='mr-1 text-primary100 dark:invert'
              />
              <p>View Code</p>
            </a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial='hidden'
            animate='show'
            exit='hidden'
            variants={fadeIn}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'
            onClick={() => setModalImage(null)}
          >
            <motion.img
              initial='hidden'
              animate='show'
              variants={zoomIn}
              src={modalImage}
              alt='Preview'
              className='max-h-[80%] max-w-[90%] rounded-xl shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectDetail;
