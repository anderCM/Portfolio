import Title from '../designs/Title';
import AboutMe from './AboutMe';
import Fields from './Fields/Fields';

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subtitle="Me" />
      <AboutMe />
      <Title title="My" subtitle="Fields" />
      <Fields />
    </section>
  )
}

export default About