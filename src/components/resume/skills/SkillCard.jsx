const SkillCard = ({ icon, hoverColor }) => {
    return (
        <span className={`px-1 md:px-2 text-6xl text-[#999] hover:text-[#${hoverColor}]`}>{icon}</span>
    )
}

export default SkillCard