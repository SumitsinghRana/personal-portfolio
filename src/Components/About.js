import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Sumit Singh Rana</b> from Almora, Uttarakhand, India.
            I'm a <b>MERN stack developer</b> and a final-year <b>B.Tech (CSE)</b> student.
            <br /><br />
            I love building clean, responsive web apps and solving challenging problems
            using my strong foundation in <b>DSA</b> and <b>problem-solving</b>.
            You can explore my projects below — I’m always <b>open</b> to collaborations
            and new learning opportunities. Connect with me through the links in the footer!

            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="ill"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Postman" />
        <Skills skill="Npm" />
        <Skills skill="Tailwind" />
      </div>
    </>
  );
}

export default About