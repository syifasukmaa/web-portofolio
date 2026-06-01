import { BsXLg } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import LinkScroll from "../atoms/Linkscroll";
import linkNav from "../../data/linkNav.json";
import ToggleSwitch from "../molecules/ToggleSwitch";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [colorChange, setColorChange] = useState(false);

    useEffect(() => {
        const changeNavbarColor = () => {
            setColorChange(window.scrollY >= 50);
        };

        window.addEventListener("scroll", changeNavbarColor);

        return () => {
            window.removeEventListener("scroll", changeNavbarColor);
        };
    }, []);

    return (
        <header
            className={`
        fixed z-50 transition-all duration-500
        w-full top-0 left-0
        ${colorChange ? "lg:top-5 lg:left-1/2 lg:w-auto lg:-translate-x-1/2" : ""}
      `}
        >
            <div
                className={`
          transition-all duration-500

          ${
              colorChange
                  ? `
              lg:px-8
                lg:py-3
                lg:rounded-full
                lg:dark:bg-dark300/70
                lg:backdrop-blur-lg
                lg:shadow-lg
                lg:border
                lg:border-gray-200
                lg:dark:border-dark600 
              `
                  : "py-3 lg:py-3"
          }
        `}
            >
                <div
                    className={`
            flex items-center justify-between
            w-[100%] mx-auto lg:w-[75%] px-10 lg:px-0
            transition-all duration-500

           ${
               colorChange
                   ? "md:w-auto lg:justify-center md:gap-8 py-3 lg:py-0 bg-gradient-to-br from-white/40 to-white/10 dark:bg-dark300/80 backdrop-blur-md border border-white/20 dark:border-dark600 shadow-xl lg:shadow-none lg:border-none lg:bg-transparent lg:dark:bg-transparent lg:backdrop-blur-none lg:from-transparent lg:to-transparent"
                   : "py-3 lg:py-0 bg-white/80 dark:bg-dark200/80 backdrop-blur-md lg:bg-transparent lg:dark:bg-transparent lg:backdrop-blur-none"
           }
          `}
                >
                    <img
                        src="/img/logosipa.png"
                        alt="Logo Sipa"
                        width={40}
                        height={30}
                        className={`
              transition-all duration-500 hover:scale-105
              ${colorChange ? "lg:hidden" : ""}
            `}
                    />

                    <div className="flex items-center w-fit">
                        <div className="lg:hidden">
                            <ToggleSwitch />
                        </div>
                        <Button styling="block lg:hidden" click={() => setIsNavOpen((prev) => !prev)}>
                            {isNavOpen ? <BsXLg className="text-3xl dark:text-dark600" /> : <RxHamburgerMenu className="text-3xl dark:text-dark600" />}
                        </Button>
                    </div>

                    <div
                        className={`
              absolute top-20 right-5 w-[220px]
              transition-all duration-300 lg:hidden ${isNavOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"}
            `}
                    >
                        <nav
                            className="
                flex flex-col items-center gap-5
                rounded-2xl
                bg-white dark:bg-dark300 lg:dark:none
                border border-gray-200 dark:border-dark600
                shadow-xl
                p-5 lg:hidden
              "
                        >
                            {linkNav.map((link) => (
                                <LinkScroll key={link.id} title={link.title} styling="dark:text-dark600 capitalize" />
                            ))}

                            <div className="lg:flex hidden">
                                <ToggleSwitch />
                            </div>
                        </nav>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8 lg:bg-none lg:dark:bg-none">
                        {linkNav.map((link) => (
                            <LinkScroll key={link.id} title={link.title} styling="dark:text-dark600 capitalize" />
                        ))}

                        <ToggleSwitch />
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Navbar;
