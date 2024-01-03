import { Link } from 'react-scroll';

const LinkScroll = (props) => {
  const { title, styling } = props;
  return (
    <Link
      activeClass='active'
      smooth={true}
      spy={true}
      to={title}
      className={`${styling} flex py-2 cursor-pointer text-lg hover:font-bold hover:text-blue dark:hover:text-light500 hover:scale-95 transition-all ease-in-out duration-300 font-dmsans mx-8 md:mx-4 text-dark200 capitaliz`}
    >
      {title}
    </Link>
  );
};

export default LinkScroll;
