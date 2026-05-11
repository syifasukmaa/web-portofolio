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
import { useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion';

function App() {
  const [colorChange, setColorChange] = useState(true);

  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);

  // Spring biar gerakannya smooth & ada efek lag
  const x = useSpring(rawX, { stiffness: 80, damping: 10 });
  const y = useSpring(rawY, { stiffness: 80, damping: 10 });

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

  useEffect(() => {
    window.addEventListener('scroll', handleToTop);

    const handleMouseMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleToTop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className='relative w-full dark:bg-dark100'>
        <motion.div
          className='pointer-events-none fixed rounded-full'
          style={{
            width: 400,
            height: 400,
            x,
            y,
            translateX: '-50%',
            translateY: '-50%',
            background: `radial-gradient(
              circle,
              rgba(99, 102, 241, 0.2) 0%,
              rgba(139, 92, 246, 0.08) 40%,
              transparent 70%
            )`,
          }}
        />

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
