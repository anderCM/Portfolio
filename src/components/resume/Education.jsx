import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";

import { ResumeTitle } from "./ResumeTitle";
import ResumeCard from "./ResumeCard";

const Education = () => {
    return (
        <div className="w-full grid grid-cols-9 px-6">
            <div className="col-span-4">
                <ResumeTitle icon={<MdWork />} title="EXPERIENCE" />
                <ResumeCard
                    badge={true}
                    time="April - Present"
                    company="National University of Engineering"
                    position="Full stack developer"
                    description="LAMP stack"
                />
                <ResumeCard
                    time="2021 - 2023"
                    company="Nuevo Control"
                    position="Jr. Full stack developer"
                    description="LAMP stack"
                />
                <ResumeCard
                    time="2022 - 2023"
                    company="Kimpersol"
                    position="React native developer"
                    description="Cross platform mobile development"
                />
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <span className="w-[1px] h-full bg-zinc-700 inline-flex"></span>
            </div>
            <div className="col-span-4">
                <ResumeTitle icon={<GiGraduateCap />} title="EDUCATION" />
                <ResumeCard
                    time="2022 - 2023"
                    company="Microverse"
                    position="Full stack development"
                    description="Full stack developer"
                />
                <ResumeCard
                    time="2021 - 2021"
                    company="Udemy"
                    position="Web development Bootcamp"
                    description="Web development"
                />
                <ResumeCard
                    time="2013 - 2016"
                    company="Von Braun Institute"
                    position="Computing and Informatic"
                    description="Computing and Informatic"
                />
            </div>
        </div>
    )
}

export default Education