import React from 'react'
import LeftBar from './components/home/LeftBar'

const Home = () => {
    return (
        <div className='w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between'>
            <div className="w-16 h-96 bg-bodyColor"></div>
            <div className="w-[94%] h-full bg-transparent flex items-center">
                <LeftBar />
                <div className="w-8/12 h-[95%] bg-bodyColor"></div>
            </div>
        </div>
    )
}

export default Home