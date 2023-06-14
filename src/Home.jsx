import React from 'react'
import { FaUser, FaEnvelope } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import { MdWork, MdOutlineClose } from 'react-icons/md'
import { SiGooglechat } from 'react-icons/si'
import { BsTelephonePlusFill } from 'react-icons/bs'

import LeftBar from './components/home/LeftBar'

const Home = () => {
    return (
        <div className='w-[90%] h-[90%] md:w-[85%] md:h-[85%] bg-transparent text-white z-50 flex flex-col md:flex-row items-start justify-between'>
            <div className="w-full h:16 mb-4 md:w-16 md:h-96 md:mb-auto bg-transparent flex md:flex-col md:gap-4">
                <div className="w-[15%] h-12 rounded-2xl md:w-full md:h-20 bg-bodyColor md:rounded-3xl flex justify-center items-center cursor-pointer group">
                    <div className="flex flex-col gap-1.5 overflow-hidden">
                        <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
                        <span className="w-8 h-[2px] bg-textColor inline-block transition-transform duration-300 group-hover:bg-designColor"></span>
                        <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
                    </div>
                </div>
                <div className="w-[85%] h-12 rounded-2xl flex md:flex-col items-center justify-between md:w-full md:h-80 bg-bodyColor md:rounded-3xl py-6">
                    <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <FaUser />
                        <span className="absolute text-black font-medium text-[0.6rem] md:text-xs bg-designColor px-3 py-0 md:px-4 md:py-[1px] rounded-xl left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-14 translate-y-7 md:translate-y-1 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            ABOUT
                        </span>
                    </span>
                    <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <IoIosPaper />
                        <span className="absolute text-black font-medium text-[0.6rem] md:text-xs bg-designColor px-3 py-0 md:px-4 md:py-[1px] rounded-xl left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-16 translate-y-7 md:translate-y-1 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            RESUME
                        </span>
                    </span>
                    <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <MdWork />
                        <span className="absolute text-black font-medium text-[0.6rem] md:text-xs bg-designColor px-3 py-0 md:px-4 md:py-[1px] rounded-xl left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-20 translate-y-7 md:translate-y-1 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            PROJECTS
                        </span>
                    </span>
                    <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <SiGooglechat />
                        <span className="absolute text-black font-medium text-[0.6rem] md:text-xs bg-designColor px-3 py-0 md:px-4 md:py-[1px] rounded-xl left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-14 translate-y-7 md:translate-y-1 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            BLOG
                        </span>
                    </span>
                    <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <FaEnvelope />
                        <span className="absolute text-black font-medium text-[0.6rem] md:text-xs bg-designColor px-3 py-0 md:px-4 md:py-[1px] rounded-xl left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-20 translate-y-7 md:translate-y-1 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            CONTACT
                        </span>
                    </span>
                    <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                        <BsTelephonePlusFill />
                        <span className="absolute text-black font-medium text-[0.6rem] md:text-xs bg-designColor px-3 py-0 md:px-4 md:py-[1px] rounded-xl left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-14 translate-y-7 md:translate-y-1 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                            CALL
                        </span>
                    </span>
                </div>
            </div>
            <div className="w-full md:w-[94%] h-full bg-transparent flex flex-col md:flex-row items-center">
                <LeftBar />
                <div className="w-[95%] h-[95%] -mt-2 md:m-auto md:w-8/12 bg-bodyColor"></div>
            </div>
        </div>
    )
}

export default Home