import CardList from "../molecules/CardList";
import allProject from "../../data/project.json";
import { useState } from "react";

function Project() {
  const [shown, setShown] = useState(3);
  const hasMore = shown < allProject.length;

  const handleShowMore = () => {
    setShown((prev) => Math.min(prev + 3, allProject.length));
  };

  return (
    <section id="project" className="w-full py-28 md:pt-18 font-poppins">
      <div className="w-[90%] mx-auto lg:w-[75%]">
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 font-jetbrains">
            Projects
          </h3>
          <p className="pt-2 font-light text-greys md:text-xl dark:text-primary400 dark:font-normal">
            My work So Far
          </p>
        </div>

        <CardList projects={allProject.slice(0, shown)} />

        <div className="flex items-center justify-center mt-16">
          {hasMore ? (
            <button
              className="px-6 py-2.5 transition-all duration-300 rounded-xl text-sm font-medium border border-darkBlue/40 text-darkBlue hover:bg-darkBlue hover:text-white dark:border-primary400/40 dark:text-primary400 dark:hover:bg-primary100/20 active:scale-95"
              onClick={handleShowMore}
            >
              Show More Projects
            </button>
          ) : (
            <button
              className="px-6 py-2.5 transition-all duration-300 rounded-xl text-sm font-medium border border-gray-300 dark:border-dark300 text-greys dark:text-dark600 hover:bg-gray-100 dark:hover:bg-dark300 active:scale-95"
              onClick={() => setShown(3)}
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Project;
