import React from 'react'
import LeftBar from './components/home/LeftBar'

const Home = () => {
    return (
        <div className='w-[90%] h-[90%] md:w-[85%] md:h-[85%] bg-transparent text-white z-50 flex flex-col md:flex-row items-start justify-between'>
            <div className="w-full h:16 mb-4 md:w-16 md:h-96 md:mb-auto bg-bodyColor">Navbar</div>
            <div className="w-full md:w-[94%] h-full bg-transparent flex flex-col md:flex-row items-center">
                <LeftBar />
                <div className="w-[95%] h-[95%] -mt-2 md:m-auto md:w-8/12 bg-bodyColor"></div>
            </div>
        </div>
    )
}

export default Home