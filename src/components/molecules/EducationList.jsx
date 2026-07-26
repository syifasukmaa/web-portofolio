import educations from "../../data/education.json";
import ResumeBody from "../atoms/ResumeBody";

export default function EducationList() {
    return (
        <div className="relative top-4 md:left-2">
            <div className="relative">
                <div className="absolute left-[14px] md:left-[33px] top-2 bottom-6 w-[6px] rounded-md bg-blue dark:bg-darkBlue"></div>

                <div className="relative grid w-full grid-cols-1 gap-8 md:pl-[80px] pl-[60px]">
                    {educations.map((educations) => (
                        <div
                            key={educations.id}
                            className="relative px-6 py-8 bg-white border-l-4 border-l-blue rounded-xl shadow-lg md:w-3/4 dark:bg-dark300 group hover:bg-slate-100 shadow-blue/10"
                        >
                            <ResumeBody
                                title={educations.title}
                                desc={educations.major}
                                year={educations.year}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
