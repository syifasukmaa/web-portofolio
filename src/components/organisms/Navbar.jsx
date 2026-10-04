import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsXLg } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa";
import LinkScroll from "../atoms/Linkscroll";
import linkNav from "../../data/linkNav.json";
import ToggleSwitch from "../molecules/ToggleSwitch";
import LanguageSwitch from "../molecules/LanguageSwitch";
import { useTranslation } from "../../context/LanguageContext";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [activeSection, setActiveSection] = useState(
    linkNav[0]?.title.toLowerCase() || "",
  );
  const { t } = useTranslation();

  useEffect(() => {
    const changeNavbarColor = () => {
      setColorChange(window.scrollY >= 40);
    };

    window.addEventListener("scroll", changeNavbarColor, { passive: true });
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  useEffect(() => {
    const sections = linkNav
      .map((link) => document.getElementById(link.title.toLowerCase()))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavOpen]);

  const renderMobileDrawer = () => {
    if (typeof document === "undefined") return null;

    return createPortal(
      <AnimatePresence>
        {isNavOpen && (
          <div className="fixed inset-0 z-[9999] lg:hidden">
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsNavOpen(false)}
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 w-full h-full bg-white dark:bg-dark100 flex flex-col justify-between overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-blueGrey-100 dark:border-dark300 bg-white/95 dark:bg-dark100/95 sticky top-0 z-10 backdrop-blur-md">
                <a
                  href="#home"
                  onClick={() => setIsNavOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <img
                    src="/img/logosipa.png"
                    alt="Logo Sipa"
                    className="h-8 w-auto object-contain"
                  />
                  <span className="font-jetbrains font-bold text-base text-ygPurple dark:text-dark700 tracking-tight">
                    Syifa Sukma
                  </span>
                </a>

                <div className="flex items-center gap-2 sm:gap-3">
                  <LanguageSwitch />
                  <ToggleSwitch />
                  <button
                    onClick={() => setIsNavOpen(false)}
                    className="p-2 ml-1 rounded-full text-greys dark:text-dark600 hover:bg-ygBlue dark:hover:bg-dark300 transition-colors"
                    aria-label="Tutup menu"
                  >
                    <BsXLg className="text-xl" />
                  </button>
                </div>
              </div>

              <nav className="flex flex-col flex-1 justify-center px-6 py-8 gap-2">
                {linkNav.map((link, i) => {
                  const isActive = activeSection === link.title.toLowerCase();
                  const translatedTitle = t(`nav.${link.title}`) || link.title;

                  return (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{
                        delay: 0.05 + i * 0.04,
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                    >
                      <a
                        href={`#${link.title.toLowerCase()}`}
                        onClick={() => setIsNavOpen(false)}
                        className={`flex items-center justify-between px-5 py-3.5 rounded-2xl font-jetbrains text-lg font-medium transition-all duration-200 capitalize ${
                          isActive
                            ? "bg-blue/10 text-blue dark:bg-blue/20 dark:text-blue font-bold shadow-sm"
                            : "text-ygPurple dark:text-dark700 hover:bg-ygBlue dark:hover:bg-dark300 hover:text-blue"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-2 h-2 rounded-full transition-colors ${
                              isActive ? "bg-blue" : "bg-transparent"
                            }`}
                          />
                          <span>{translatedTitle}</span>
                        </div>
                        <FaAngleRight
                          className={`text-sm transition-transform ${
                            isActive
                              ? "text-blue translate-x-1"
                              : "text-blueGrey-300 dark:text-dark400"
                          }`}
                        />
                      </a>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="px-6 py-6 border-t border-blueGrey-100 dark:border-dark300 text-center bg-ygBlue/30 dark:bg-dark200/30">
                <p className="text-xs text-blueGrey-400 dark:text-dark600 font-jetbrains tracking-wider">
                  © 2026 Syifa Sukma • Portfolio
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>,
      document.body,
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          colorChange ? "lg:top-4" : "lg:top-0"
        }`}
      >
        <div className="lg:hidden w-full px-4 sm:px-6 py-3 bg-white/95 dark:bg-dark100/95 backdrop-blur-md border-b border-blueGrey-100/80 dark:border-dark300/80 shadow-sm flex items-center justify-between transition-colors">
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/img/logosipa.png"
              alt="Logo Sipa"
              className="h-8 w-auto object-contain hover:scale-105 transition-transform"
            />
          </a>

          <div className="flex items-center gap-2">
            <LanguageSwitch />
            <ToggleSwitch />
            <button
              onClick={() => setIsNavOpen(true)}
              className="p-2 rounded-xl text-ygPurple dark:text-dark700 hover:bg-ygBlue dark:hover:bg-dark300 transition-colors"
              aria-label="Buka menu navigasi"
            >
              <RxHamburgerMenu className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-full">
          <div
            className={`transition-all duration-300 ${
              colorChange
                ? "max-w-fit mx-auto px-6 py-4 rounded-full bg-white/90 dark:bg-dark200/90 backdrop-blur-xl border border-blueGrey-200/80 dark:border-dark300 shadow-lg"
                : "w-[85%] max-w-6xl mx-auto py-5 bg-transparent"
            }`}
          >
            <div className="flex items-center justify-between gap-8">
              <a href="#home" className="flex items-center">
                <img
                  src="/img/logosipa.png"
                  alt="Logo Sipa"
                  className="h-8 w-auto object-contain hover:scale-105 transition-transform"
                />
              </a>

              <nav className="flex items-center gap-1">
                {linkNav.map((link) => (
                  <LinkScroll
                    key={link.id}
                    title={link.title}
                    label={t(`nav.${link.title}`)}
                    targetId={link.title.toLowerCase()}
                    isActive={activeSection === link.title.toLowerCase()}
                  />
                ))}
              </nav>

              <div className="flex items-center gap-2.5">
                <LanguageSwitch />
                <ToggleSwitch />
              </div>
            </div>
          </div>
        </div>
      </header>

      {renderMobileDrawer()}
    </>
  );
};

export default Navbar;
