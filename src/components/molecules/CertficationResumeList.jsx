import ResumeBody from '../atoms/ResumeBody';
import Work from '../../data/work.json';

export default function CertficationResumeList() {
  return (
    <div className='relative top-4 md:left-2'>
      <div className='relative'>
        <div className='absolute left-[38px] top-2 bottom-6 w-[6px] rounded-md bg-primary100 dark:bg-primary100'></div>

        <div className='relative grid w-full grid-cols-1 gap-8 pl-[90px]'>
          {Work.map((sertifications) => (
            <div
              key={sertifications.id}
              className='relative px-6 py-8 bg-white border-l-4 border-l-primary100 rounded-xl shadow-lg md:w-3/4 dark:bg-dark300 group hover:bg-slate-100 shadow-blue/10'
            >
              <ResumeBody
                title={sertifications.company}
                desc={sertifications.title}
                year={sertifications.year}
                work={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
