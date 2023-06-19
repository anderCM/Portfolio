import { BiCodeAlt } from "react-icons/bi";
import { DiReact } from 'react-icons/di';
import { FcLinux } from 'react-icons/fc';

import FieldCard from './FieldCard';

const Fields = () => {
  return (
    <div className="grid md:grid-cols-2">
      <FieldCard
        icon={<BiCodeAlt />}
        title="Front-end development"
        description="I am specialize in creating visually appealing and highly functional websites, tailored to your unique needs and brand identity."
      />
      <FieldCard
        icon={<BiCodeAlt />}
        title="Back-end development"
        description="I use cutting-edge technologies to create efficient and secure backend systems, ensuring seamless data management, API integration, and overall functionality."
      />
      <FieldCard
        icon={<DiReact />}
        title="Cross platform Mobile development"
        description="I am specialize in creating visually appealing and highly functional websites, tailored to your unique needs and brand identity."
      />
      <FieldCard
        icon={<FcLinux />}
        title="VPS Administrator"
        description="Trust me to efficiently configure, monitor, and maintain your servers, allowing you to focus on your core business while we handle the technical aspects"
      />
    </div>
  )
}

export default Fields