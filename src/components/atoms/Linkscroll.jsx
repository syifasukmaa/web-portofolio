import { Link } from "react-scroll";

const LinkScroll = (props) => {
  const { title, styling, isActive } = props;

  return (
    <a
      href={`#${title.toLowerCase()}`}
      className={` ${styling} flex py-2 text-lg hover:font-bold hover:text-blue dark:hover:text-light500 hover:scale-95 transition-all ease-in-out duration-300 font-dmsans mx-8 md:mx-4 capitalize ${isActive ? "bg-blue/10 text-blue dark:bg-darkBlue/50 dark:text-white px-4 py-1 rounded-full font-extrabold" : "text-dark200"}`}
    >
      {title}
    </a>
  );
};

export default LinkScroll;
