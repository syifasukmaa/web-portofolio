import { FaCalendarAlt } from 'react-icons/fa';

export default function ResumeBody({ title, desc, year }) {
  return (
    <>
      <div className='absolute flex items-center top-4 -left-[60px]'>
        <span className='z-30 flex flex-col w-6 h-6 mt-4 border-4 rounded-full dark:bg-blue dark:border-darkBlue bg-darkBlue border-blue group-hover:bg-purple'></span>
        <span className='flex flex-col w-10 h-[6px] mt-4 -ml-1 bg-blue z-10 dark:bg-darkBlue'></span>
      </div>
      <h3 className='text-2xl text-blue group-hover:text-darkBlue'>{title}</h3>
      <p className='mt-2 font-light dark:text-dark700'>{desc}</p>
      <p className='flex items-center mt-1 font-light dark:text-dark700'>
        <FaCalendarAlt />
        <span className='ml-2'>{year}</span>
      </p>
    </>
  );
}
