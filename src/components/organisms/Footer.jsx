import Button from '../atoms/Button';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import linkNav from '../../data/linkNav.json';
import LinkScroll from '../atoms/Linkscroll';

function Footer() {
  return (
    <div>
      <footer
        id='contact'
        className='w-full p-2 md:pt-18 font-poppins bg-dark300 dark:bg-dark100'
      >
        <div className='w-full mx-auto'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center w-full pt-3'>
              <div className='flex flex-col items-center justify-center w-full md:flex-col'>
                <p className='my-6 text-3xl font-bold text-blue dark:text-darkBlue'>Syifa Sukma</p>
                <p className='mt-2 mb-5 text-xl font-bold text-white dark:text-dark700'>Front-End Web Developer</p>

                <nav className='flex-col items-center justify-center hidden mt-4 lg:flex md:justify-center lg:items-center lg:border-none lg:bg-transparent lg:shadow-none lg:flex-row'>
                  {linkNav.map((link) => (
                    <LinkScroll
                      key={link.id}
                      title={link.title}
                      styling={'md:first:ml-0 md:ml-4 md:mr-4 md:last:mr-0 text-dark700 dark:text-dark600 capitalize'}
                    />
                  ))}
                </nav>
                <div className='flex items-start justify-start mt-4 mb-4 '>
                  <Button
                    styling={
                      'rounded-full flex py-4 cursor-pointer text-lg hover:font-bold dark:bg-dark700 hover:text-blue transition-all ease-in-out text-dark100 font-dmsans bg-white px-4'
                    }
                    click={() => window.open('https://www.instagram.com/syifasukmaa', '_blank')}
                  >
                    <p>
                      <BsInstagram />
                    </p>
                  </Button>
                  <Button
                    styling={
                      'rounded-full flex py-4 md:ml-5 cursor-pointer text-lg hover:font-bold dark:bg-dark700 hover:text-blue transition-all ease-in-out ml-5 mr-0 text-dark100 font-dmsans bg-white px-4'
                    }
                    click={() => window.open('https://github.com/syifasukmaa', '_blank')}
                  >
                    <p>
                      <BsGithub />
                    </p>
                  </Button>

                  <Button
                    styling={
                      'flex py-4 cursor-pointer text-xl hover:font-bold dark:bg-dark700 text-dark100 group ml-5 bg-white rounded-full px-4'
                    }
                    click={() => window.open('https://www.linkedin.com/in/syifasukma/', '_blank')}
                  >
                    <p>
                      <BsLinkedin className='bg-transparent rounded-full group-hover:text-blue' />
                    </p>
                  </Button>
                </div>
                <p className='pr-4 mt-4 mb-8 font-light text-center break-all text-dark700 dark:text-dark600'>
                  Designed and built by{' '}
                  <span className='text-transparent gradient-primary bg-clip-text'>Syifa Sukmaa</span> with
                  <span className='text-transparent gradient-secondary bg-clip-text'> Love</span> &{' '}
                  <span className='text-transparent gradient-secondary bg-clip-text'>Coffee</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
