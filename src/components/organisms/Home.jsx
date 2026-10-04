import Button from "../atoms/Button";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import FloatingBadge from "../atoms/FloatingBadge";
import { useState } from "react";
import { useTranslation } from "../../context/LanguageContext";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t, lang } = useTranslation();
  const floatingBadges = [
    {
      icon: <FaReact className="text-cyan-400 text-xl" />,
      label: "React JS",
      className: "md:top-[5%] md:left-[-10%] top-[-8%] left-[-8%]",
      delay: 0,
      duration: 3,
      distance: -14,
    },
    {
      icon: <FaGitAlt className="text-orange-500 text-xl" />,
      label: "Git",
      className: "md:bottom-[15%] md:right-[-12%]  right-[-8%]",
      delay: 0.8,
      duration: 3.5,
      distance: -12,
    },
    {
      icon: <SiJavascript className="text-yellow-400 text-xl" />,
      label: "JavaScript",
      className: "md:top-[10%] md:right-[-14%] top-[-6%] right-[-8%]",
      delay: 1.5,
      duration: 2.8,
      distance: -16,
    },
  ];

  const buttonStyle =
    "rounded-xl flex items-center justify-center gap-2 py-3 px-6 font-semibold transition-all duration-300 hover:-translate-y-1";
  const CV =
    "https://drive.google.com/file/d/1dwvVCvxlGdHtxHIdVdb0fihSXGDSiQoB/view?usp=sharing";
  return (
    <section id="home" className="w-full pt-18 md:pt-16 pb-6 md:pb-10">
      <div className="w-[90%] mx-auto lg:w-[75%]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-0 pt-32 pb-14 md:pt-20 lg:py-40 mx-auto text-center md:text-left font-poppins">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("left", "tween", 0.5, 0.7)}
            className="w-full md:max-w-[45%] lg:max-w-[50%]"
          >
            <div className=" text-xl font-bold font-poppins lg:text-4xl md:text-3xl ">
              <p className="font-jetbrains mb-4 text-ygPurple dark:text-primary100">
                {t("hero.greeting")}{" "}
                <span className="font-jetbrains text-transparent gradient-secondary bg-clip-text">
                  Syifa Sukma
                </span>
              </p>
              <p className="font-jetbrains mb-2 text-ygPurple dark:text-primary100">
                {t("hero.rolePrefix")}
              </p>
              <TypeAnimation
                key={lang}
                className="text-transparent gradient-secondary bg-clip-text font-jetbrains"
                sequence={[
                  " Front End Web Developer",
                  2000,
                  " Customer Service",
                  2000,
                  lang === "id" ? " Antusias UI/UX" : " UI/UX Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="text-start">
              <p className="pt-2 text-md font-light text-ygPurple dark:text-dark600 mt-3 leading-relaxed">
                {t("hero.description")}
              </p>
            </div>
            {/* tambahin button untuk sosial media (instagram, linkedin, github) */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Button
                styling={`${buttonStyle} bg-blue/10 text-blue hover:bg-blue hover:text-white dark:bg-blue/30 dark:text-white dark:hover:bg-dark600`}
                click={() => window.open(CV, "_blank")}
              >
                <p>{t("hero.downloadCv")}</p>

                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2v8"></path>
                  <path d="m16 6-4 4-4-4"></path>

                  <rect width="20" height="8" x="2" y="14" rx="2"></rect>

                  <path d="M6 18h.01"></path>
                  <path d="M10 18h.01"></path>
                </svg>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.7, amount: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="relative flex items-center justify-center mt-5 md:mt-0"
          >
            {floatingBadges.map((badge, i) => (
              <FloatingBadge key={i} {...badge} />
            ))}
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-[300px] lg:w-[450px] -mt-14 md:-mt-28 -mr-28 md:-mr-32 opacity-10"
            >
              <defs>
                <linearGradient
                  id="fill"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  gradientTransform="rotate(45 0.5 0.5)"
                >
                  <stop offset="0%" stopColor="#2B8EC9" />
                  <stop offset="100%" stopColor="#B0BEC5" />
                </linearGradient>
              </defs>

              <path
                d="M83,69Q72,88,51.5,85.5Q31,83,17.5,66.5Q4,50,15.5,30Q27,10,49.5,11Q72,12,83,31Q94,50,83,69Z"
                fill="url(#fill)"
              />
            </svg>
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-[300px] lg:w-[450px] -mt-10 md:-mt-16 -mr-16 md:-mr-20 opacity-10"
            >
              <defs>
                <linearGradient
                  id="fill"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  gradientTransform="rotate(45 0.5 0.5)"
                >
                  <stop offset="0%" stopColor="#2B8EC9" />
                  <stop offset="100%" stopColor="#B0BEC5" />
                </linearGradient>
              </defs>

              <path
                d="M83,69Q72,88,51.5,85.5Q31,83,17.5,66.5Q4,50,15.5,30Q27,10,49.5,11Q72,12,83,31Q94,50,83,69Z"
                fill="url(#fill)"
              />
            </svg>
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-[300px] lg:w-[450px]"
            >
              <defs>
                <linearGradient
                  id="fill"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  gradientTransform="rotate(45 0.5 0.5)"
                >
                  <stop offset="0%" stopColor="#2B8EC9" />
                  <stop offset="100%" stopColor="#B0BEC5" />
                </linearGradient>
              </defs>

              <path
                d="M83,69Q72,88,51.5,85.5Q31,83,17.5,66.5Q4,50,15.5,30Q27,10,49.5,11Q72,12,83,31Q94,50,83,69Z"
                fill="url(#fill)"
              />
            </svg>

            {!imageLoaded && (
              <div className="absolute z-10 w-80 md:w-[380px] lg:w-[500px] aspect-square -mt-20 md:-mt-36 lg:-mt-44 rounded-full bg-gray-200 dark:bg-dark400 animate-pulse" />
            )}

            <img
              src="/img/sipa.png"
              alt="Syifa"
              width={700}
              height={900}
              loading="eager"
              onLoad={() => setImageLoaded(true)}
              className={`
                relative z-10 w-80 md:w-[380px] lg:w-[500px] -mt-20 md:-mt-36 lg:-mt-44
                transition-opacity duration-700 ease-out
                ${imageLoaded ? "opacity-100" : "opacity-0"}
              `}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Home;
