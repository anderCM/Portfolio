import Title from '../designs/Title'
import Education from './Education'
import Skills from './skills/Skills'

const Resume = () => {
    return (
        <section>
            <Title title="My" subtitle="Resume" />
            <Education />
            <Title title="Main" subtitle="techs" />
            <Skills />
        </section>
    )
}

export default Resume