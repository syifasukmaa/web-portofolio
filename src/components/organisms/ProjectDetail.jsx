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
    hover:scale-105 ${modalImage === img ? 'ring-2 ring-blue' : 'border-blueGrey-200 dark:border-dark300'}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex flex-col justify-center'>
          <h1 className='mb-4 text-3xl font-bold font-jetbrains text-ygPurple dark:text-dark700'>{project.name}</h1>
          <p className='mb-6 leading-relaxed text-greys dark:text-dark600 font-light'>{project.desc}</p>

          <div className='mb-6'>
            <div className='flex items-center gap-6'>
              <div className='flex flex-col items-start'>
                <p className='text-xs font-semibold tracking-wider uppercase text-blueGrey-400 dark:text-dark600 font-jetbrains'>Status</p>
                <span
                  className={`text-xs px-3 py-1 mt-1.5 font-medium inline-flex items-center gap-1.5 rounded-full ${
                    project.process === 'Done'
                      ? 'text-emerald-700 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-500/20'
                      : 'text-amber-700 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200/80 dark:border-amber-500/20'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${project.process === 'Done' ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`} />
                  {project.process === 'Done' ? 'Completed' : 'In Progress'}
                </span>
              </div>
              <div className='flex flex-col items-start border-x border-blueGrey-200 dark:border-dark400 px-6'>
                <p className='text-xs font-semibold tracking-wider uppercase text-blueGrey-400 dark:text-dark600 font-jetbrains'>Year</p>
                <span className='text-sm mt-1.5 font-medium text-ygPurple dark:text-dark700 font-jetbrains'>
                  {project.year || 2024}
                </span>
              </div>
              <div className='flex flex-col items-start'>
                <p className='text-xs font-semibold tracking-wider uppercase text-blueGrey-400 dark:text-dark600 font-jetbrains'>Type</p>
                <span className='text-sm mt-1.5 font-medium text-ygPurple dark:text-dark700 font-jetbrains'>
                  Web App
                </span>
              </div>
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='mb-3 text-sm font-semibold tracking-wider uppercase text-blueGrey-400 dark:text-dark600 font-jetbrains'>Tech Stack</h3>
            <div className='flex flex-wrap gap-2'>
              {project.stack.map((tech, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 px-3 py-1 text-xs font-medium border border-blueGrey-200 dark:border-dark400 shadow-sm bg-ygBlue dark:bg-dark300 text-ygPurple dark:text-dark700 rounded-lg transition-transform hover:scale-105'
                >
                  <div className='w-1.5 h-1.5 rounded-full bg-blue' />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='mb-4'>
            <h3 className='mb-3 text-sm font-semibold tracking-wider uppercase text-blueGrey-400 dark:text-dark600 font-jetbrains'>Key Highlights</h3>
            <div className='w-full max-w-md'>
              <ul className='space-y-2 text-ygPurple dark:text-dark700 text-sm'>
                <li className='flex items-center gap-2.5'>
                  <FaMobile className='text-blue' /> Fully Responsive Design
                </li>
                <li className='flex items-center gap-2.5'>
                  <FaMoon className='text-blue' /> Dark & Light Mode Support
                </li>
                <li className='flex items-center gap-2.5'>
                  <FaBolt className='text-blue' /> Optimized Performance & UX
                </li>
              </ul>
            </div>
          </div>

          <div className='flex items-center gap-3 pt-4 mt-2 border-t border-blueGrey-100 dark:border-dark300'>
            <a
              href={project.preview}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white transition-all rounded-xl bg-blue hover:bg-darkBlue shadow-sm hover:shadow active:scale-95'
            >
              <img
                src='/img/stack/preview.svg'
                alt='icon preview'
                className='w-3.5 h-3.5 invert'
              />
              Live Demo
            </a>
            {(project.github || project.gihtub) && (
              <a
                href={project.github || project.gihtub}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium transition-all border rounded-xl text-ygPurple dark:text-dark700 border-blueGrey-200 dark:border-dark400 hover:bg-ygBlue dark:hover:bg-dark300 active:scale-95'
              >
                <img
                  src='/img/stack/github2.svg'
                  alt='icon github'
                  className='w-3.5 h-3.5 dark:invert'
                />
                View Code
              </a>
            )}
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
