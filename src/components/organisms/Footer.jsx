import Button from '../atoms/Button';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import linkNav from '../../data/linkNav.json';
import LinkScroll from '../atoms/Linkscroll';

function Footer() {
  let sosmed = [
    { name: 'Instagram', icon: <BsInstagram />, url: 'https://www.instagram.com/syifasukmaa' },
    { name: 'GitHub', icon: <BsGithub />, url: 'https://github.com/syifasukmaa' },
    { name: 'LinkedIn', icon: <BsLinkedin />, url: 'https://www.linkedin.com/in/syifasukma/' },
  ];
  return (
    <footer
      id='contact'
      className='w-full py-6 bg-ygBlue dark:bg-dark200 font-poppins md:py-16'
    >
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid items-start grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Brand Section */}
          <div className='text-center lg:text-left'>
            <p className='mb-2 text-xl font-bold md:text-3xl text-blue dark:text-darkBlue'>Syifa Sukma</p>
            <p className='text-lg font-semibold md:text-xl text-greys dark:text-dark700'>Front-End Web Developer</p>
          </div>

          {/* Navigation */}
          <nav className='flex-col items-center hidden gap-3 capitalize lg:flex lg:items-start'>
            {linkNav.map((link) => (
              <LinkScroll
                key={link.id}
                title={link.title}
                to={link.to}
                styling='text-greys dark:text-dark600 hover:text-blue transition-colors'
              />
            ))}
          </nav>

          {/* Social + Copyright */}
          <div className='flex flex-col items-center gap-6 lg:items-start'>
            {/* Social Icons */}
            <div className='flex items-center gap-4'>
              {sosmed.map((sosmed) => (
                <Button
                  styling='rounded-lg p-4 text-lg bg-dark700 text-dark100 hover:text-blue transition-all'
                  click={() => window.open(sosmed.url, '_blank')}
                >
                  {sosmed.icon}
                </Button>
              ))}
            </div>

            {/* Footer Text */}
            <p className='font-light text-center lg:text-left text-greys dark:text-dark600'>
              Designed and built by <span className='text-transparent bg-clip-text gradient-primary'>Syifa Sukmaa</span>{' '}
              with <span className='text-transparent bg-clip-text gradient-secondary'>Love</span> &{' '}
              <span className='text-transparent bg-clip-text gradient-secondary'>Coffee</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
