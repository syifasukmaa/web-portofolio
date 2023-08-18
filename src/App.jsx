import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Stack from './components/Stack';

function App() {
  return (
    <>
      <div className="w-full dark:bg-dark100">
        <Navbar />
        <Home />
        <About />
        <Stack />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
