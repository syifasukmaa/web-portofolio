import sertifications from '../../data/sertifikasi.json';
import ResumeBody from '../atoms/ResumeBody';
import Work from '../../data/work.json';

export default function CertficationResumeList() {
  return (
    // <div className='relative top-4 md:left-2'>
    //   {/* height dinamis */}
    //   <div className='flex flex-col w-[6px] h-[430px] lg:h-[380px] mt-4 rounded-md bg-blue dark:bg-darkBlue'></div>

    //   <div className='absolute top-0 grid w-full grid-cols-1 gap-8 left-10'>
    //     {Work.map((sertifications) => (
    //       <div
    //         key={sertifications.id}
    //         className='relative w-3/4 px-6 py-8 ml-3 bg-white rounded-md shadow-lg dark:bg-dark300 group hover:bg-slate-100 shadow-blue/30'
    //       >
    //         <ResumeBody
    //           title={sertifications.company}
    //           desc={sertifications.title}
    //           year={sertifications.year}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className='relative top-4 md:left-2'>
      <div className='relative'>
        <div className='absolute left-[38px] top-2 bottom-6 w-[6px] rounded-md bg-blue dark:bg-darkBlue'></div>

        <div className='relative grid w-full grid-cols-1 gap-8 pl-[90px]'>
          {Work.map((sertifications) => (
            <div
              key={sertifications.id}
              className='relative px-6 py-8 bg-white rounded-md shadow-lg md:w-3/4 dark:bg-dark300 group hover:bg-slate-100 shadow-blue/30'
            >
              <ResumeBody
                title={sertifications.company}
                desc={sertifications.title}
                year={sertifications.year}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
