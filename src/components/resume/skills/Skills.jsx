import { DiReact, DiRubyRough } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaPhp, FaLinux } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { TbBrandCss3, TbBrandJavascript, TbBrandRedux, TbBrandBootstrap, TbBrandTailwind } from "react-icons/tb";
import { SiRubyonrails, SiMysql, SiPostgresql } from "react-icons/si";


import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <div className="flex flex-wrap justify-center gap-2 mt-2">
            <SkillCard icon={<AiOutlineHtml5 />} hoverColor="hover:text-[#E34C26]" />
            <SkillCard icon={<TbBrandCss3 />} hoverColor="hover:text-[#006EB9]" />
            <SkillCard icon={<TbBrandJavascript />} hoverColor="hover:text-[#EDD61A]" />
            <SkillCard icon={<DiReact />} hoverColor="hover:text-[#00D9F2]" />
            <SkillCard icon={<TbBrandRedux />} hoverColor="hover:text-[#4C539B]" />
            <SkillCard icon={<TbBrandBootstrap />} hoverColor="hover:text-[#7210F5]" />
            <SkillCard icon={<TbBrandTailwind />} hoverColor="hover:text-[#17B6B7]" />
            <SkillCard icon={<FaPhp />} hoverColor="hover:text-[#7479AE]" />
            <SkillCard icon={<DiRubyRough />} hoverColor="hover:text-[#E0115F]" />
            <SkillCard icon={<SiRubyonrails />} hoverColor="hover:text-[#CC0000]" />
            <SkillCard icon={<SiMysql />} hoverColor="hover:text-[#00758F]" />
            <SkillCard icon={<SiPostgresql />} hoverColor="hover:text-[#326590]" />
            <SkillCard icon={<BsGit />} hoverColor="hover:text-[#EC512E]" />
            <SkillCard icon={<FaLinux />} hoverColor="hover:text-[#F3AD00]" />

        </div>
    )
}

export default Skills