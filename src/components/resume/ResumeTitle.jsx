import React from 'react'

export const ResumeTitle = ({ icon, title }) => {
    return (
        <h1 className="text-base md:text-lg text-gray-300 font-medium flex items-center gap-2 py-3 border-b-[1px] border-b-zinc-700">
            <span className="text-textColor text-2xl">{icon}</span> {title}
        </h1>
    )
}
