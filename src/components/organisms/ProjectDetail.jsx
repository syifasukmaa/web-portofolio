import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router';
import allProject from '../../data/project.json';
import { useState } from 'react';
import { fadeIn, fadeInUp, zoomIn } from '../../utils/motion';

function ProjectDetail() {
  const { id } = useParams();
  const project = allProject.find((project) => project.id.toString() === id);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  return (
    <div className='min-h-screen px-6 py-1 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark100 dark:to-dark200 md:px-16'>
      {/* button back */}
      <div className='flex justify-start mt-10 mb-10'>
        <button
          onClick={() => navigate('/')}
          className='px-4 py-2 text-white transition rounded-lg shadow-lg bg-dark200 hover:bg-dark100 hover:shadow-xl'
        >
          ← Back to Home
        </button>
      </div>

      <motion.div
        initial='hidden'
        animate='show'
        variants={fadeInUp}
        className='grid items-start justify-start gap-10 mx-auto md:grid-cols-2'
      >
        {/* LEFT SIDE */}
        <div>
          <img
            src={project.imgUrl}
            alt={project.name}
            className='w-full shadow-lg rounded-2xl'
          />

          {/* Gallery */}
          <div className='flex gap-4 mt-6'>
            {project.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Detail ${index}`}
                onClick={() => setModalImage(img)}
                className='object-cover w-24 h-24 transition border rounded-lg shadow-lg cursor-pointer hover:scale-105 bg-dark600'
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4 mt-8'>
            <a
              href={project.preview}
              target='_blank'
              rel='noopener noreferrer'
              className='flex px-4 py-2 font-medium transition shadow-lg rounded-xl text-dark200 bg-blue hover:bg-darkBlue hover:shadow-xl'
            >
              <img
                src='/img/stack/preview.svg'
                alt='icon preview'
                className='mr-1'
              />
              Live View
            </a>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex px-4 py-2 font-medium text-white transition shadow bg-primary100 hover:shadow-lg w-fit rounded-xl hover:bg-primary100/80'
            >
              <img
                src='/img/stack/github2.svg'
                alt='icon preview'
                className='mr-1 invert'
              />{' '}
              View Code
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex flex-col justify-center'>
          <h1 className='mb-4 text-3xl font-bold text-blue'>{project.name}</h1>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>{project.desc}</p>

          <div className='mb-4'>
            <div className='flex items-center'>
              <p className='text-lg font-semibold'>⌚ Progress:</p>
              <span
                className={`text-sm px-2 py-1  font-medium ${
                  project.process === 'Done' ? 'text-green-500 ' : 'text-red-600'
                } rounded-full w-fit dark:text-dark700`}
              >
                {project.process}
              </span>
            </div>
          </div>
          <div className='mb-8'>
            <h3 className='mb-3 text-lg font-semibold'>🛠️ Tech Stack</h3>
            <div className='flex flex-wrap gap-4'>
              {project.stack.map((tech, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 px-3 py-2 transition bg-gray-100 rounded-lg shadow dark:bg-dark300 hover:shadow-lg'
                >
                  <img
                    src='/img/stack/icon_stack.svg'
                    alt={tech}
                    className='w-6 h-6'
                  />
                  <span className='text-sm'>{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='mb-4'>
            <h3 className='text-lg font-semibold '>📌 Key Features</h3>
            <div className='w-full max-w-md px-4 py-6 mt-3 shadow-lg bg-gray-200/30 backdrop-blur-md rounded-xl'>
              <ul className='text-dark200 dark:text-dark700'>
                <li className='text-base font-medium leading-7'>✨ Responsive Design</li>
                <li className='text-base leading-7'>✨ Dark Mode</li>
                <li className='text-base leading-7'>✨ Fast Performance</li>
              </ul>
            </div>
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
