import Button from './Button';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import linkNav from '../data/linkNav.json';
import LinkScroll from './Linkscroll';

function Footer() {
  return (
    <div>
      <footer
        id="contact"
        className="w-full p-2 md:pt-18 font-poppins bg-dark200"
      >
        <div className="w-[90%] mx-auto lg:w-[75%]">
          <div className="flex items-start justify-center md:flex-col ">
            <div className="flex flex-col items-center justify-start w-1/2 pt-3 md:flex-row md:justify-between md:items-center md:w-full">
              <img
                src="/img/logosipa.png"
                alt="logo sipa"
                width={40}
                height={30}
                className="hidden mb-3 grayscale md:flex"
              />
              <div className="flex flex-col-reverse pl-2 items-center md:flex-row">
                <p className="my-2 font-light break-all text-dark600 text-center">
                  syifasukmaramadhani@gmail.com
                </p>
                <Button
                  title={<BsInstagram />}
                  styling={
                    'rounded-full flex py-2 md:ml-10 cursor-pointer text-lg hover:font-bold hover:text-blue transition-all ease-in-out lg:ml-5 text-dark600 lg:mr-0 font-dmsans'
                  }
                  click={() =>
                    window.open(
                      'https://www.instagram.com/syifasukmaa',
                      '_blank'
                    )
                  }
                />
                <Button
                  title={<BsGithub />}
                  styling={
                    'rounded-full flex py-2 md:ml-5 cursor-pointer text-lg hover:font-bold hover:text-blue transition-all ease-in-out lg:ml-5 lg:mr-0 text-dark600 font-dmsans'
                  }
                  click={() =>
                    window.open('https://github.com/syifasukmaa', '_blank')
                  }
                />

                <Button
                  title={
                    <BsLinkedin className="bg-transparent rounded-full lg:ml-5 hover:text-blue" />
                  }
                  styling={
                    'flex py-2 md:mx-5 cursor-pointer text-lg hover:font-bold text-dark600 lg:ml-1 lg:mr-0'
                  }
                  click={() =>
                    window.open(
                      'https://www.linkedin.com/in/syifasukma/',
                      '_blank'
                    )
                  }
                />
              </div>
            </div>

            <hr className="h-px bg-gray-200 dark:bg-dark600 border-0 w-2/5 md:w-full hidden ,d:flex md:rotate-0" />

            <div className="items-center justify-between md:flex md:w-full w-1/2">
              <nav className="flex flex-col items-center justify-center md:flex-row md:justify-start lg:items-center lg:border-none lg:bg-transparent lg:shadow-none lg:flex-row ">
                {linkNav.map((link) => (
                  <LinkScroll
                    key={link.id}
                    title={link.title}
                    styling={
                      'md:first:ml-0 md:ml-4 md:mr-4 md:last:mr-0 text-dark600 capitalize'
                    }
                  />
                ))}
              </nav>
              <p className="hidden pr-4 mt-4 font-light break-all text-dark600 xl:inline md:mt-0 xl:pr-0">
                Designed and built by{' '}
                <span className="text-transparent gradient-primary bg-clip-text">
                  Syifa Sukmaa
                </span>{' '}
                with
                <span className="text-transparent gradient-secondary bg-clip-text">
                  {' '}
                  Love
                </span>{' '}
                &{' '}
                <span className="text-transparent gradient-secondary bg-clip-text">
                  Coffee
                </span>
              </p>
            </div>
          </div>
          <p className="px-6 mt-4 font-light text-dark600 text-center break-all md:px-0 md:text-left xl:hidden">
            Designed and built by{' '}
            <span className="text-transparent gradient-primary bg-clip-text">
              Syifa Sukma
            </span>{' '}
            with
            <span className="text-transparent gradient-secondary bg-clip-text">
              {' '}
              Love
            </span>{' '}
            &{' '}
            <span className="text-transparent gradient-secondary bg-clip-text">
              Coffee
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
