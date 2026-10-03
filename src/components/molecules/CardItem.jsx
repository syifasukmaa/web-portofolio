import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useTranslation } from "../../context/LanguageContext";

const CardItem = ({ project, index }) => {
  const { t } = useTranslation();
  const isDone = project.process === "Done";
  const githubUrl = project.github || project.gihtub;
  const isReverse = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
      className={`flex flex-col ${
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 lg:gap-14`}
    >
      <div className="relative w-full md:w-[52%] lg:w-[50%] overflow-hidden rounded-2xl border border-gray-200/80 dark:border-dark300 shadow-md shadow-gray-200/50 dark:shadow-none bg-gray-100 dark:bg-dark200 group">
        <a
          href={project.preview}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden aspect-[16/10] w-full"
        >
          <img
            src={project.imgUrl}
            alt={project.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </a>
      </div>

      <div className="w-full md:w-[48%] lg:w-[50%] flex flex-col justify-center">
        <div className="flex items-center gap-2.5 text-xs font-jetbrains text-darkBlue dark:text-primary400 font-semibold tracking-wider uppercase mb-2">
          <span className="text-base">{project.year || 2024}</span>
        </div>

        <h4 className="text-xl md:text-2xl font-bold font-jetbrains text-ygPurple dark:text-dark700 hover:text-darkBlue dark:hover:text-primary100 transition-colors">
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
        </h4>

        <p className="mt-3 text-sm md:text-base font-light text-greys dark:text-dark600 leading-relaxed line-clamp-3">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 my-4">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-lg font-jetbrains bg-gray-100/90 dark:bg-dark300/60 text-greys dark:text-dark700 border border-gray-200/60 dark:border-dark300/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <a
            href={project.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-darkBlue dark:text-primary400 hover:underline active:scale-95 transition-all group/link"
          >
            <span>{t("projects.livePreview")}</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>

          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-greys dark:text-dark600 hover:text-ygPurple dark:hover:text-dark700 transition-colors"
          >
            <span>{t("projects.details")}</span>
            <span>→</span>
          </Link>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
              className="p-1.5 text-greys border rounded-full dark:text-dark600 hover:text-ygPurple dark:hover:text-dark700 transition-colors ml-auto"
              title="GitHub Repository"
            >
              <FiGithub className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CardItem;
