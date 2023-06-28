const ResumeCard = ({ badge, time, position, company, description }) => {
    return (
        <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-700">
            <h6 className={`w-28 text-center text-sm py-[1px] ${badge ? "text-textColor" : "text-[#999]"} border-[1px] ${badge ? "border-textColor" : "border-gray-700"}  rounded-sm`}>{time}</h6>
            <h2 className="text-lg font-titleFont text-gray-200 font-medium">{position}</h2>
            <p className="text-sm text-[#999] -mt-2">{company}</p>
            <p className="text-base text-[#999] font-medium pr-10">{description}</p>
        </div>
    )
}

export default ResumeCard