import React from 'react';
import WorkIcon from "../../assets/images/work.svg";
import SkillIcon from "../../assets/images/skill.svg";
import ProjectIcon from "../../assets/images/achievement.svg";
import ResumeRightTitle from './ResumeRightTitle';
import ResumeProjectItem from './ResumeProjectItem';

function ResumeRight(props) {
  const projects = [
    {
      projectName: "FRONTFUNDR PLATFORM",
      projectTime: "(11/2023 - Present)",
      projectClient: "FrontFundr",
      projectDescription: [
        "FrontFundr is Canada’s leading online private markets investing platform and an exempt market dealer",
        "We provide startups and growth companies with access to capital that helps them grow, to help Canadian entrepreneurs turn their groundbreaking ideas into reality",
        "We also provide investors with the opportunity to invest in these companies. Our online platform allows all Canadians—seasoned financial professionals or someone making their first-ever investment alike—to support the ideas and initiatives they want to see succeed. To date we've built up a community of over 40,000 users, run 150+ successful funding campaigns, and helped businesses raise more than $200 million. And we’ve got a whole lot more planned too!"
      ],
      projectMember: 4,
      projectPosition: "Fullstack Developer",
      projectTechnology: [
        "Frontend: NextJs, TailwindCss, React-Query",
        "Backend: NodeJS, MySQL"
      ]
    },
    {
      projectName: "EASTGATE PLATFORM",
      projectTime: "(08/2022 - 02/2023)",
      projectClient: "Eastgate Platform",
      projectDescription: [
        "Manage company's project, employee information and employee's effort",
        "Finding employee by tech-stack",
        "Manager report about employee's perfomance and project's process"
      ],
      projectMember: 6,
      projectPosition: "Fullstack Developer",
      projectTechnology: [
        "Frontend: ReactJS, TailwindCss, Redux, Antd",
        "Backend: NodeJS, Keycloak, Postgresql"
      ]
    },
    {
      projectName: "SIGNAL PERFORMANCE MEASURE (SPM)",
      projectTime: "(08/2022 - Present)",
      projectClient: "Yunex Traffic",
      projectDescription: [
        "SPM is an online monitoring and evaluation system for traffic operators",
        "Allows operators to create charts and graphs, including real-time charts",
        "Analysis is generated in real-time or when traffic conditions, are set by configurable rules, and triggered by alarms",
        "The alarm messages are displayed in the web interface or sent by e-mail",
        "The platform is highly expandable, allowing for the quick and easy addition of new analysis and services"
      ],
      projectMember: 10,
      projectPosition: "Frontend Developer",
      projectTechnology: [
        "Frontend: React.js, D3.js, MobX, Ant Design",
        "Backend: Java"
      ]
    },
    {
      projectName: "MOXA IO",
      projectTime: "(07/2023 - Present)",
      projectClient: "Yunex Traffic",
      projectDescription: [
        "MOXA IO microservice supports the communication to new device model MOXA ioThinx 4510 with I/O module 45MR-2606 via RESTful APIs using HTTPS and communication with Concert 8.3 via OCPI2"
      ],
      projectMember: 6,
      projectPosition: "Frontend Developer",
      projectTechnology: [
        "Frontend: Typescript, React.js, Redux, Tailwind Css, Material UI, Keycloak, Oauth2 Proxy, SSE",
        "Backend: Java"
      ]
    },
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
    }
  ]
  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "Typescript",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "NestJS",
    "Docker",
    "Kubernetes",
    "TailwindCss",
    "Scss",
    "Greensock",
  ]
  return (
    <div className="resume-right">
      <ResumeRightTitle img={WorkIcon} title={"WORK EXPERIENCE"} />
      <div className="flex gap-10 mb-5">
        <h3 className="font-bold text-xl">11/2023 - Present</h3>
        <div className="flex flex-col">
          <h3 className="font-bold text-light-cyan text-xl uppercase">FRONTFUNDR</h3>
          <p className="italic text-lg text-royal-blue">Software Engineer</p>
          <p className="text-lg">Product Company</p>
        </div>
      </div>
      <div className="flex gap-10 mb-5">
        <h3 className="font-bold text-xl">02/2023 - 11/2023</h3>
        <div className="flex flex-col">
          <h3 className="font-bold text-light-cyan text-xl uppercase">EASTGATE SOFTWARE</h3>
          <p className="italic text-lg text-royal-blue">Software Engineer</p>
          <p className="text-lg">Outsourcing Company</p>
        </div>
      </div>
      <div className="flex gap-10 mb-5">
        <h3 className="font-bold text-xl">02/2022 - 02/2023</h3>
        <div className="flex flex-col">
          <h3 className="font-bold text-light-cyan text-xl uppercase">MAXFLOW TECHNOLOGY</h3>
          <p className="italic text-lg text-royal-blue">FrontEnd Developer</p>
          <p className="text-lg">Product Company</p>
        </div>
      </div>
      <div className="flex gap-10 mb-5">
        <h3 className="font-bold text-xl">01/2020 - 01/2022</h3>
        <div className="flex flex-col">
          <h3 className="font-bold text-light-cyan text-xl uppercase">KPIM Joint Stock Company</h3>
          <p className="italic text-lg text-royal-blue">FrontEnd Developer</p>
          <p className="text-lg">Product Company</p>
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