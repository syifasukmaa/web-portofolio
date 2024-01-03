function CodeButton(props) {
  const { icon, title } = props;

  return (
    <div>
      <div className='flex items-center'>
        <span>{icon}</span>
        <a
          href={title}
          target='_blank'
          className='inline-block ml-2 text-sm underline hover:text-blue 2xl:text-lg dark:text-dark700 dark:hover:text-light300'
          rel='noreferrer'
        >
          View Code
        </a>
      </div>
    </div>
  );
}

export default CodeButton;
