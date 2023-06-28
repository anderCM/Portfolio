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
            <SkillCard icon={<AiOutlineHtml5 />} hoverColor="E34C26" />
            <SkillCard icon={<TbBrandCss3 />} hoverColor="006EB9" />
            <SkillCard icon={<TbBrandJavascript />} hoverColor="EDD61A" />
            <SkillCard icon={<DiReact />} hoverColor="00D9F2" />
            <SkillCard icon={<TbBrandRedux />} hoverColor="4C539B" />
            <SkillCard icon={<TbBrandBootstrap />} hoverColor="7210F5" />
            <SkillCard icon={<TbBrandTailwind />} hoverColor="17B6B7" />
            <SkillCard icon={<FaPhp />} hoverColor="7479AE" />
            <SkillCard icon={<DiRubyRough />} hoverColor="E0115F" />
            <SkillCard icon={<SiRubyonrails />} hoverColor="CC0000" />
            <SkillCard icon={<SiMysql />} hoverColor="00758F" />
            <SkillCard icon={<SiPostgresql />} hoverColor="326590" />
            <SkillCard icon={<BsGit />} hoverColor="EC512E" />
            <SkillCard icon={<FaLinux />} hoverColor="F3AD00" />

        </div>
    )
}

export default Skills