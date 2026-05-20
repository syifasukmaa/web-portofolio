import { Link } from 'react-scroll';

const LinkScroll = (props) => {
  const { title, styling } = props;
  return (


    <a
      href={`#${title.toLowerCase()}`}
      className={`
        ${styling}
        flex py-2 text-lg
        hover:font-bold
        hover:text-blue
        dark:hover:text-light500
        hover:scale-95
        transition-all ease-in-out duration-300
        font-dmsans mx-8 md:mx-4
        text-dark200 capitalize
      `}
    >
      {title}
    </a>
  );
};

export default LinkScroll;
