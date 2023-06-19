import { BiCodeAlt } from "react-icons/bi";
import { GiTeacher, GiNewspaper } from "react-icons/gi";

import FunFactCard from './FunFactCard';

const FunFact = () => {
    return (
        <div className="px-0 grid grid-cols-1 md:grid-cols-4 pb-10">
            <FunFactCard icon={<GiTeacher />} description="4 mentees guiding" />
            <FunFactCard icon={<GiNewspaper />} description="2 articles written" />
            <FunFactCard icon={<GiNewspaper />} description="1 server and database migrated" />
            <FunFactCard icon={<BiCodeAlt />} description="+15 Data Structure Algorithm solved" />
        </div>
    )
}

export default FunFact