function CardItemBody(props) {
  const { title, desc, stack } = props;
  return (
    <>
      <h4
        className='mb-1 text-xl 2xl:text-2xl dark:text-dark700'
        tabIndex={'0'}
      >
        {title}
      </h4>
      <p className='mb-2 overflow-auto text-sm font-light 2xl:text-lg dark:text-dark600 max-h-28'>{desc}</p>
      <p className='text-sm font-light text-ygPurple 2xl:text-lg dark:text-dark700'>
        <span className='font-medium'>Tech Stack: </span>
        {stack}
      </p>
    </>
  );
}

export default CardItemBody;
