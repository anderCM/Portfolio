import React from 'react'

const FunFactCard = ({ icon, description }) => {
    return (
        <div className="full">
            <div className="w-full flex flex-col items-center gap-2 py-8 px-2 border-r-[1px] border-r-zinc-700 border-b-[1px] border-b-zinc-700">
                <span className="text-2xl text-designColor">{icon}</span>
                <p className="text-base w-full h-10 text-center text-gray-300 hover:text-designColor duration-200">{description}</p>
            </div>
        </div>
    )
}

export default FunFactCard