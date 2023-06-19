import Title from '../designs/Title';
import AboutMe from './AboutMe';
import Fields from './Fields/Fields';
import FunFact from './FunFact/FunFact';

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subtitle="Me" />
      <AboutMe />
      <Title title="My" subtitle="Fields" />
      <Fields />
      <Title title="Fun" subtitle="Fact" />
      <FunFact />
    </section>
  )
}

export default About