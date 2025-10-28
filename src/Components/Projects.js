import bus from "../images/bus.png";
import chat from "../images/chat.webp";
import simulator from "../images/simulator.png";
import quizz from "../images/quizz.png";
import passowrd from "../images/password.png";
import bird from "../images/bird.png";
import ProjectBox from "./ProjectBox";

const projectList = [
  {
    name: "Bus-Allocation System",
    description:
      "Developed a real-time bus allocation system with efficient route mapping and search features, enabling students to easily find buses by plate number or destination. Integrated MongoDB for data management and Node.js for smooth backend performance.",
    image: bus,
    github: "https://github.com/SumitsinghRana/Bus-Allocation-System",
    
  },
  {
    name: "Real-Time Chatroom",
    description:
      "Built a real-time chat application using Node.js and Socket.io, enabling instant messaging with seamless user connectivity and dynamic room management for efficient, interactive communication.",
    image: chat,
    github: "https://github.com/SumitsinghRana/realtime-chatroom",
    
  },
  {
    name: "Syntax Checker and Visuliazer",
    description:
      "Developed an AST-based syntax checker and visualizer in Python to analyze and validate code structure, providing real-time syntax feedback and interactive tree visualization for better program understanding",
    image: simulator,
    github: "https://github.com/SumitsinghRana/Syntax_checker",
    
  },
  {
    name: "Quizz,Mind-Mingle",
    description:
      "Created an interactive quiz application, Mind Mingle, featuring dynamic question generation, real-time score tracking, and an engaging UI to enhance learning through fun and competitive quizzes.",
    image: quizz,
    github: "https://github.com/SumitsinghRana/Quiz-MindMingle-",
    
  },
  {
    name: "Password Generator",
    description:
      "Password Generator creates secure, random passwords based on user-selected length and character types, ensuring strong protection. User-friendly design and prioritizes security.",
    image: passowrd,
    github: "https://github.com/SumitsinghRana/password-generator",
    
  },
  {
    name: "Flappy Bird",
    description:
      "Developed a Python-based Flappy Bird game using Pygame, featuring smooth graphics, collision detection, and real-time score tracking to deliver an engaging arcade-style gameplay experience",
    image: bird,
    github: "https://github.com/SumitsinghRana/Flappy-bird",
    
  },
];

const Projects = () => {
  return (
    <div className="h">
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        {projectList.map((project, index) => (
          <ProjectBox
            key={index}
            projectPhoto={project.image}
            projectName={project.name}
            description={project.description}
            github={project.github}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
