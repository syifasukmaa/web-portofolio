import { BsXLg, BsGithub, BsLinkedin } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Button from './Button';
import LinkScroll from './Linkscroll';
import linkNav from '../data/linkNav.json';
import ToggleSwitch from './ToggleSwitch';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <header
      id="navbar"
      className={
        colorChange
          ? 'fixed w-full py-3 bg-transparent border-b border-gray-200 dark:border-dark200 backdrop-blur-sm z-50'
          : 'fixed w-full py-3 bg-transparent z-50'
      }
    >
      <div className="relative flex items-center justify-between w-[90%] mx-auto lg:w-[75%]">
        <img
          src="/img/logosipa.png"
          alt="Logo Sipa"
          width={40}
          height={30}
          className="transition-all hover:scale-105"
        />
        {isNavOpen ? (
          <Button
            title={<BsXLg className="text-3xl dark:text-dark600" />}
            styling={'absolute block right-0 lg:hidden'}
            click={() => setIsNavOpen((prev) => !prev)}
          />
        ) : (
          <Button
            title={
              <RxHamburgerMenu className="text-3xl font-normal dark:text-dark600" />
            }
            styling={'absolute block right-0 lg:hidden'}
            click={() => setIsNavOpen((prev) => !prev)}
          />
        )}
        <div
          className={
            isNavOpen
              ? 'absolute w-full right-0 top-20 max-w-[250px]'
              : 'hidden lg:flex'
          }
        >
          <nav className="flex flex-col justify-center bg-white border dark:bg-dark300 border-gray-200 dark:border-dark600 lg:dark:bg-transparent rounded-lg shadow-xl lg:items-center lg:border-none lg:bg-transparent lg:shadow-none lg:flex-row ">
            {linkNav.map((link) => (
              <LinkScroll
                key={link.id}
                title={link.title}
                styling={'dark:text-dark600 capitalize'}
              />
            ))}

            <Button
              title={<BsGithub className="dark:hover:text-light500" />}
              styling={
                'rounded-full flex py-2 mx-8 md:mx-4 cursor-pointer text-lg hover:font-bold hover:text-blue transition-all ease-in-out lg:mx-0 lg:ml-5 lg:mr-0 font-dmsans text-greys dark:text-dark600'
              }
              click={() =>
                window.open('https://github.com/syifasukmaa', '_blank')
              }
            />

            <Button
              title={
                <BsLinkedin className="bg-transparent rounded-full lg:ml-5 hover:text-blue dark:hover:text-light500" />
              }
              styling={
                'flex py-2 md:mx-4 cursor-pointer text-lg mx-8 lg:mx-0 hover:font-bold lg:ml-1 lg:mr-0 text-greys dark:text-dark600'
              }
              click={() =>
                window.open('https://www.linkedin.com/in/syifasukma/', '_blank')
              }
            />
            <ToggleSwitch />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
