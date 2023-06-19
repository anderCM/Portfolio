import { BsCloudLightningFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiSend } from 'react-icons/fi';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import profilePhoto from '../../assets/images/anderson_photo.webp';

const LeftBar = () => {
    const [titles] = useTypewriter({
        words: ['Full-stak developer', 'ReactJs', 'PHP', 'Ruby on Rails', 'MySql', 'Postgresql', 'Linux'],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 2000
    })
    return (
        <div className="w-full md:w-5/12 h-[50%] md:h-full bg-bodyColor rounded-2xl shadow-textShadow z-10">
            <div className="w-full h-3/5 bg-black rounded-2xl">
                <img className="w-full h-full object-contain "
                    src={profilePhoto}
                    alt="Gino Anderson Canales Medina"
                    loading="priority"
                />
            </div>
            <div className="w-full h-2/5">
                <div className="flex flex-col items-center gap-2 py-2 md:py-10">
                    <h1 className="text-textColor text-xl md:text-4xl font-semibold">Anderson Canales</h1>
                    <p className="text-sm md:text-base text-designColor tracking-wide">{titles}<Cursor cursorBlinking="false" cursorStyle="|" /></p>
                    <div className="flex justify-center gap-2 mt-1 md:mt-2">
                        <a className="hover:text-designColor duration-300 text-sm md:text-xl" href="https://github.com/anderCM" target="_blank"><FaGithub /></a>
                        <a className="hover:text-designColor duration-300 text-sm md:text-xl" href="https://www.linkedin.com/in/andersoncanales/" target="_blank"><FaLinkedin /></a>
                        <a className="hover:text-designColor duration-300 text-sm md:text-xl" href="mailto:andercm15@gmail.com"><FiMail /></a>
                    </div>
                </div>
                <div className="flex h-10 md:h-14">
                    <a className="w-1/2 h-full flex justify-center items-center gap-2 hover:text-designColor duration-300 borderTop borderRight text-sm tracking-wide"
                        href="https://drive.google.com/file/d/1zPjreD0PMe6Fbo5Kl3KUh9sMuedsx7YB/view?usp=drive_link"
                        target="_blank"
                        download>
                        DOWNLOAD CV
                        <BsCloudLightningFill />
                    </a>
                    <a className="w-1/2 h-full flex justify-center items-center gap-2 hover:text-designColor duration-300 borderTop text-sm tracking-wide"
                        href="">
                        CONTACT ME
                        <FiSend />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LeftBar