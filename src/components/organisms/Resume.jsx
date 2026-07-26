import { FaGraduationCap, FaShoppingBag } from "react-icons/fa";
import { slideIn } from "../../utils/motion";
import CertficationResumeList from "../molecules/CertficationResumeList";
import EducationList from "../molecules/EducationList";
import { motion } from "framer-motion";

export default function Resume() {
    return (
        <section
            id="resume"
            className="w-full pb-44 pt-28 md:pt-18 font-poppins bg-ygBlue dark:bg-dark200"
        >
            <div className="w-[100%] mx-auto lg:w-[75%]">
                <div className="text-center">
                    <h3 className="text-2xl font-extrabold text-greys md:text-3xl dark:text-primary100 font-jetbrains">
                        Resume
                    </h3>
                    <p className="pt-2 font-light text-greys md:text-xl dark:text-primary400 dark:font-normal">
                        A Years Of Experience
                    </p>
                </div>

                {/* Body */}
                <div className="flex flex-col items-center md:items-start justify-between mt-8 md:flex-row ">
                    <motion.div
                        variants={slideIn("left", "tween", 0.5, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        className="flex-col w-5/6 md:w-1/2"
                    >
                        <div className="flex items-center gap-2 ml-24 mb-5">
                            <div className="w-10 h-10 bg-blue/10 flex items-center justify-center rounded-xl">
                                <FaGraduationCap className="text-blue text-2xl" />
                            </div>
                            <p className="text-xl text-left font-medium text-dark100 dark:text-dark700">
                                Education
                            </p>
                        </div>
                        <EducationList />
                    </motion.div>

                    <motion.div
                        variants={slideIn("right", "tween", 0.5, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        className="w-5/6 md:ml-10 mt-28 md:mt-0 md:w-1/2"
                    >
                        <div className="flex items-center gap-2 ml-24 mb-5">
                            <div className="w-10 h-10 bg-primary100/10 flex items-center justify-center rounded-xl">
                                <FaShoppingBag className="text-primary100 text-2xl" />
                            </div>
                            <p className="text-xl text-left font-medium text-dark100 dark:text-dark700">
                                Work
                            </p>
                        </div>

                        <CertficationResumeList />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
