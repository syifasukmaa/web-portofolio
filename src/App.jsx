import { useEffect, useState } from 'react';
import Home from './components/organisms/Home';
import About from './components/organisms/About';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import Navbar from './components/organisms/Navbar';
import Project from './components/organisms/Project';
import Stack from './components/organisms/Stack';
import { Link } from 'react-scroll';
import Certification from './components/organisms/Certification';
import Resume from './components/organisms/Resume';

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
        <About />
        <Resume />
        <Stack />
        <Project />
        <Certification />
        <Contact />
        <Footer />
        <Link
          to='home'
          spy={true}
          smooth={true}
          className={`${
            colorChange ? 'hidden' : 'flex'
          } fixed w-[10%] md:w-[6%] lg:w-[4%] p-3 cursor-pointer border-2 border-transparent hover:bg-white  dark:hover:bg-dark700 hover:border-blue mx-auto bottom-14 right-10 rounded-full bg-blue`}
          onClick={handleToTop}
        >
          <img
            src='./img/up.svg'
            className='w-[100%]'
          />
        </Link>
      </div>
    </>
  );
}

export default App;
