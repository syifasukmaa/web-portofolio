import educations from '../../data/education.json';
import ResumeBody from '../atoms/ResumeBody';

export default function EducationList() {
  return (
    <div className='relative top-4'>
      <div className='flex flex-col w-[6px] h-[415px] lg:h-[350px] mt-4 rounded-md bg-blue dark:bg-darkBlue'></div>

      <div className='absolute top-0 grid w-full grid-cols-1 gap-8 left-10'>
        {educations.map((education) => (
          <div
            key={education.id}
            className='relative w-3/4 px-6 py-8 ml-3 bg-white rounded-md shadow-lg dark:bg-dark300 group hover:bg-slate-100 shadow-blue/30'
          >
            <ResumeBody
              title={education.title}
              desc={education.major}
              year={education.year}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
