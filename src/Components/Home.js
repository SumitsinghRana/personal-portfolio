import Typed from "./Typed.js";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";
import avatar from "../images/avatar.png";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>SUMIT SINGH RANA</b>
          </h1>
          <Typed />
        </div>
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>Introduction</b>
          </h1>
          <p>
            I'm a final-year <b>B.Tech CSE</b> student at <b>Graphic Era Hill University, Bhimtal</b>, and a passionate 
            <b>full-stack developer</b> specializing in the <b>MERN</b> stack. I enjoy crafting responsive and user-centric 
            web applications using technologies like <b>React</b>, <b>Node.js</b>, <b>Express.js</b>, 
            and <b>MongoDB</b>. <br /><br />
            Driven by curiosity, I love exploring new technologies and continuously improving my skills to
             stay ahead in this ever-evolving tech world. I’m deeply enthusiastic about transforming ideas
              into impactful digital experiences and solving real-world problems through code.
             I’m fluent in <b>C++</b> and have hands-on experience with <b>Python</b> and <b>Java</b>,
              blending creativity with logic to deliver efficient, scalable solutions.
          </p>
        </div>

        <div className="illustration-container">
          <Lottie className="illustration" animationData={Coder} />
          <img className="Avatar" src={avatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Home;
