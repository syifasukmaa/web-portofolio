import sertifications from '../../data/sertifikasi.json';
import ResumeBody from '../atoms/ResumeBody';

export default function CertficationResumeList() {
  return (
    <div className='relative top-4 md:left-2'>
      {/* height dinamis */}
      <div className='flex flex-col w-[6px] h-[820px] lg:h-[732px] mt-4 rounded-md bg-blue dark:bg-darkBlue'></div>

      <div className='absolute top-0 grid w-full grid-cols-1 gap-8 left-10'>
        {sertifications.map((sertifications) => (
          <div
            key={sertifications.id}
            className='relative w-3/4 px-6 py-8 ml-3 bg-white rounded-md shadow-lg dark:bg-dark300 group hover:bg-slate-100 shadow-blue/30'
          >
            <ResumeBody
              title={sertifications.title}
              desc={sertifications.desc}
              year={sertifications.year}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
