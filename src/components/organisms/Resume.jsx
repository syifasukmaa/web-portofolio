import {
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaShoppingBag,
} from "react-icons/fa";
import { slideIn } from "../../utils/motion";
import CertficationResumeList from "../molecules/CertficationResumeList";
import EducationList from "../molecules/EducationList";
import { motion } from "framer-motion";
import WorkExperience from "../../data/work.json";
import { useState } from "react";

// export default function Resume() {
//   return (
//     <section
//       id="resume"
//       className="w-full pb-44 pt-28 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200"
//     >
//       <div className="w-[100%] mx-auto lg:w-[75%]">
//         <div className="text-center">
//           <h3 className="text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 font-jetbrains">
//             Resume
//           </h3>
//           <p className="pt-2 font-light text-greys md:text-xl dark:text-primary400 dark:font-normal">
//             A Years Of Experience
//           </p>
//         </div>

//         {/* Body */}
//         <div className="flex flex-col items-center md:items-start justify-between mt-8 md:flex-row ">
//           <motion.div
//             variants={slideIn("left", "tween", 0.5, 0.5)}
//             initial="hidden"
//             whileInView="show"
//             className="flex-col w-5/6 md:w-1/2"
//           >
//             <div className="flex items-center gap-2 ml-24 mb-5">
//               <div className="w-10 h-10 bg-blue/10 flex items-center justify-center rounded-xl">
//                 <FaGraduationCap className="text-blue text-2xl" />
//               </div>
//               <p className="text-xl text-left font-medium text-dark100 dark:text-dark700">
//                 Education
//               </p>
//             </div>
//             <EducationList />
//           </motion.div>

//           <motion.div
//             variants={slideIn("right", "tween", 0.5, 0.5)}
//             initial="hidden"
//             whileInView="show"
//             className="w-5/6 md:ml-10 mt-28 md:mt-0 md:w-1/2"
//           >
//             <div className="flex items-center gap-2 ml-24 mb-5">
//               <div className="w-10 h-10 bg-primary100/10 flex items-center justify-center rounded-xl">
//                 <FaShoppingBag className="text-primary100 text-2xl" />
//               </div>
//               <p className="text-xl text-left font-medium text-dark100 dark:text-dark700">
//                 Work
//               </p>
//             </div>

//             <CertficationResumeList />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Resume() {
  const sortedData = [...WorkExperience].reverse();

  const defaultOpenId =
    sortedData.find((item) => item.year.includes("Present"))?.id ?? null;

  const [openId, setOpenId] = useState(defaultOpenId);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="resume"
      className="w-full pb-44 pt-28 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200"
    >
      <div className="w-[100%] px-8 mx-auto lg:w-[75%]">
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 font-jetbrains">
            Resume
          </h3>
          <p className="pt-2 font-light text-greys md:text-xl dark:text-primary400 dark:font-normal">
            A Years Of Experience
          </p>
        </div>
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-dark400 mt-10">
          {sortedData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-8">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex flex-col md:flex-row md:items-center md:justify-between text-left gap-1"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-2xl md:text-3xl transition-colors text-blue ${
                        isOpen
                          ? "font-bold text-blue  dark:text-primary100 hover:text-darkBlue"
                          : "font-medium text-gray-400 dark:text-dark700 hover:text-blue"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="text-gray-400">—</span>
                    <span className="text-gray-500 dark:text-dark700 text-base font-normal md:text-lg">
                      {item.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 justify-between">
                    <span className="text-sm md:text-lg font-light text-gray-400 dark:text-dark700 whitespace-nowrap">
                      {item.year}
                    </span>
                    {isOpen ? (
                      <FaChevronUp className="text-primary100" />
                    ) : (
                      <FaChevronDown className="text-gray-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="overflow-hidden list-disc pl-5 space-y-2 text-gray-600 dark:text-dark700">
                    {item.details.map((point, idx) => (
                      <li
                        key={idx}
                        className="leading-relaxed py-1 font-light md:text-base"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
