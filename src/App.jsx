import { useEffect, useState } from 'react';
import Home from './components/organisms/Home';
// import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import Navbar from './components/organisms/Navbar';
import Project from './components/organisms/Project';
import Stack from './components/organisms/Stack';
import { Link } from 'react-scroll';
import Certification from './components/organisms/Certification';
import Resume from './components/organisms/Resume';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [colorChange, setColorChange] = useState(true);

  const handleToTop = (e) => {
    e.preventDefault();
    if (window.scrollY <= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleToTop);
  }, [colorChange]);
  return (
    <>
      <div className='relative w-full dark:bg-dark100'>
        <Navbar />
        <Home />
        <Resume />
        <Stack />
        <Project />
        <Certification />
        <Footer />
        <Link
          to='home'
          spy={true}
          smooth={true}
          className={`${
            colorChange ? 'hidden' : 'flex'
          } fixed w-[11%] md:w-[7%] lg:w-[4%] px-3 lg:py-3.5 md:py-3 py-1.5 cursor-pointer border-2 border-transparent hover:bg-white  dark:hover:bg-dark700 hover:border-blue mx-auto bottom-20 lg:14 right-10 rounded-full bg-blue/20 z-[999px]`}
          onClick={handleToTop}
        >
          <FaArrowUp className='w-14 md:w-12 h-7 text-blue' />
        </Link>
      </div>
    </>
  );
}

export default App;
