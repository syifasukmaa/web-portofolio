export default function ResumeBody({ title, desc, year, work }) {
  return (
    <>
      <div className='absolute flex items-center top-4 -left-[60px]'>
        <span
          className={`z-30 flex flex-col w-6 h-6 mt-4 border-4 rounded-full ${work ? 'bg-primary100 dark:bg-primary100' : 'dark:bg-blue dark:border-darkBlue bg-darkBlue border-blue'}  group-hover:bg-purple`}
        ></span>
        <span
          className={`flex flex-col w-10 h-[6px] mt-4 -ml-1 ${work ? 'bg-primary100' : 'bg-blue'} z-10 dark:bg-darkBlue`}
        ></span>
      </div>
      <p className={`flex items-center mt-1 mb-1 text-sm ${work ? 'text-primary100' : 'text-blue'}`}>
        <span className=''>{year}</span>
      </p>
      <p className='mt-1 font-medium dark:text-dark700 text-xl'>{desc}</p>
      <h3
        className={`text-base ${work ? 'text-primary100' : 'text-blue'} ${work ? 'group-hover:text-primary100' : 'group-hover:text-darkBlue'}`}
      >
        {title}
      </h3>
    </>
  );
}
