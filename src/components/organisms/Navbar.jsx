import { BsXLg } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import LinkScroll from '../atoms/Linkscroll';
import linkNav from '../../data/linkNav.json';
import ToggleSwitch from '../molecules/ToggleSwitch';

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
      id='navbar'
      className={
        colorChange
          ? 'fixed w-full py-3 bg-transparent border-b border-gray-200 dark:border-dark200 backdrop-blur-sm z-50'
          : 'fixed w-full py-3 bg-transparent z-50'
      }
    >
      <div className='relative flex items-center justify-between w-[90%] mx-auto lg:w-[75%]'>
        <img
          src='/img/logosipa.png'
          alt='Logo Sipa'
          width={40}
          height={30}
          className='transition-all hover:scale-105'
        />
        {isNavOpen ? (
          <Button
            styling={'absolute block right-0 lg:hidden'}
            click={() => setIsNavOpen((prev) => !prev)}
          >
            <BsXLg className='text-3xl dark:text-dark600' />
          </Button>
        ) : (
          <Button
            styling={'absolute block right-0 lg:hidden'}
            click={() => setIsNavOpen((prev) => !prev)}
          >
            <RxHamburgerMenu className='text-3xl font-normal dark:text-dark600' />
          </Button>
        )}
        <div className={isNavOpen ? 'absolute w-full right-0 top-20 max-w-[250px]' : 'hidden lg:flex'}>
          <nav className='flex flex-col justify-center py-3 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-dark300 dark:border-dark600 lg:dark:bg-transparent lg:items-center lg:border-none lg:bg-transparent lg:shadow-none lg:flex-row'>
            {linkNav.map((link) => (
              <LinkScroll
                key={link.id}
                title={link.title}
                styling={'dark:text-dark600 capitalize'}
              />
            ))}

            <ToggleSwitch />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
