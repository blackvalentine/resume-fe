import React from 'react';
import WorkIcon from "../../assets/images/work.svg";
import SkillIcon from "../../assets/images/skill.svg";
import ProjectIcon from "../../assets/images/achievement.svg";
import ResumeRightTitle from './ResumeRightTitle';
import ResumeProjectItem from './ResumeProjectItem';

function ResumeRight(props) {
  const projects = [
    {
      projectName: "VISUALIZE BATTERY SHIPPING PROCESS",
      projectTime: "(07/2021 - Present)",
      projectClient: "CAT (American client)",
      projectDescription: [
        "Simulate the shipping process from the Manufacturer to the Delivery Hub and provide for Dealers around the world. Users can check the location of their container product at any time after shipping and when it arrives at its destination.",
        "Create tables and charts to show the information for a range of time. This will help suppliers easily keep track of their shipping for the week, month, or year.",
        "I'm the main Front End developer for this project. My responsibility is to receive feedback from the PM and customers, and to combine it with the Back End to develop new features."
      ],
      projectMember: 6,
      projectPosition: "Frontend Developer - Key member",
      projectTechnology: [
        "Frontend: ReactJS, Bootstrap, SCSS, Redux",
        "Backend: Python(Flask), MySql, Aws, Redis, Docker"
      ]
    },
    {
      projectName: "SKILLRANK",
      projectTime: "(05/2020 - 06/2021)",
      projectClient: "KPIM Joint Stock Company",
      projectDescription: [
        "Skillrank is e-learning game system that helps teachers and students to interact with each other by answering questions.",
        "Function description: Waiting Room, Answer Questions Screen (single choice, multiple choice, ordering, true/false, matching ...). After each question, showing scoreboard of all player."
      ],
      projectMember: 5,
      projectPosition: "Frontend Developer - Key member",
      projectTechnology: [
        "Frontend: NextJS TailwindCss",
        "Backend: ASP.NET"
      ]
    },
    {
      projectName: "BLACKVALENTINE'S BLOG",
      projectTime: "(09/2022 - Present)",
      projectClient: "Personal Project",
      projectDescription: [
        "This is my personal project to show who I am. It's a place where I can share my thoughts and experiences.",
        "Using AWS to save image and access.",
        "Using JWT for authentication."
      ],
      projectMember: 1,
      projectPosition: "Fullstack Developer",
      projectTechnology: [
        "Frontend: ReactJS, Tailwind CSS.",
        "Backend: NestJS, MySQL, Docker, AWS S3"
      ]
    },
  ]
  const skills = ["HTML5", "CSS3", "Javascript", "ReactJS", "NextJS", "TailwindCss", "Scss", "Greensock", "NodeJS", "NestJS", "Flutter"]
  return (
    <div className="resume-right">
      <ResumeRightTitle img={WorkIcon} title={"WORK EXPERIENCE"} />
      <div className="flex gap-10 mb-5">
        <h3 className="font-bold text-xl">06/2021 - Present</h3>
        <div className="flex flex-col">
          <h3 className="font-bold text-light-cyan text-xl uppercase">MAXFLOW TECHNOLOGY</h3>
          <p className="italic text-lg text-royal-blue">Middle FrontEnd Developer</p>
          <p className="text-lg">Outsourcing Company</p>
        </div>
      </div>
      <div className="flex gap-10 mb-5">
        <h3 className="font-bold text-xl">05/2020 - 06/2021</h3>
        <div className="flex flex-col">
          <h3 className="font-bold text-light-cyan text-xl uppercase">KPIM Joint Stock Company</h3>
          <p className="italic text-lg text-royal-blue">Junior FrontEnd Developer</p>
          <p className="text-lg">Product Company</p>
        </div>
      </div>
      <div className="flex gap-10">
        <h3 className="font-bold text-xl">05/2018 - 05/2020</h3>
        <div className="flex flex-col">
          <h3 className="font-bold text-light-cyan text-xl uppercase">BMS VIETNAM IMPORT COMPANY LIMITED</h3>
          <p className="italic text-lg text-royal-blue">Process Engineer</p>
        </div>
      </div>

      <ResumeRightTitle img={SkillIcon} title={"SKILLS"} />
      <ul className="resume-right__skill">
        {skills.map((skill, index) => {
          return (
            <li key={index} className="resume-right__skill-item">
              {skill}
            </li>
          )
        })}
      </ul>

      <ResumeRightTitle img={ProjectIcon} title={"PROJECTS"} />
      {projects.map((project, index) => {
        return (
          <ResumeProjectItem
            key={index}
            projectName={project.projectName}
            projectTime={project.projectTime}
            projectClient={project.projectClient}
            projectDescription={project.projectDescription}
            projectMember={project.projectMember}
            projectPosition={project.projectPosition}
            projectTechnology={project.projectTechnology}
          />
        )
      })}
    </div>
  );
}

export default ResumeRight;