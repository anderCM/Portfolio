import React from 'react'

const AboutMe = () => {
    return (
        <div className="flex pb-6">
            <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col">
                <div className="py-6">
                    <h2 className="font-semibold mb-1 text-lg">Hello! I am Anderson Canales</h2>
                    <p className="text-base leading-6">Self-taught full-stack developer with over 2 years of experience working on complex software development. I am eager to work on new projects in the near future</p>
                </div>
            </div>
            <div className="w-1/2 p-6">
                <ul>
                    <li className="aboutRightLi"><span className="aboutRightLiSpan">AGE:</span>28</li>
                    <li className="aboutRightLi"><span className="aboutRightLiSpan">RESIDENCE:</span>PERU</li>
                    <li className="aboutRightLi"><span className="aboutRightLiSpan">AVAILABILITY:</span>AVAILABLE</li>
                    <li className="aboutRightLi"><span className="aboutRightLiSpan">AGE:</span>28</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe