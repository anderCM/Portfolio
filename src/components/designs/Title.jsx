import React from 'react'

const Title = ({ title, subtitle }) => {
    return (
        <h1 className="font-titleFont font-bold text-xl relative z-10 px-6 py-3 text-designColor borderBot group ">
            <span className="text-textColor">{title}</span> {subtitle} <span className="w-8 h-8 bg-gradient-to-t from-designColor to-gray-600 inline-block rounded-full absolute left-2 top-3 opacity-10 -z-10 tanslate-x-0 group-hover:translate-x-24 transition-transform duration-500"></span>
        </h1>
    )
}

export default Title