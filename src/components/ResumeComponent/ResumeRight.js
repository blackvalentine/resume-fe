import React from 'react';
import EducationIcon from "../../assets/images/education.svg";
import WorkIcon from "../../assets/images/work.svg";
import SkillIcon from "../../assets/images/skill.svg";
import Achievement from "../../assets/images/achievement.svg";
import ResumeRightTitle from './ResumeRightTitle';

function ResumeRight(props) {
  const skills = ["HTML5", "CSS3", "Javascript", "ReactJS", "NextJS", "TailwindCss", "Scss", "Greensock", "NodeJS", "Flutter"]
  return (
    <div className="resume-right">
      <ResumeRightTitle img={EducationIcon} title={"EDUCATION"} />
      <div className="resume-right__education">
        <div>
          <div>
            <span className="font-600">ENGINEER DEGREE</span>
            <span> - Hanoi University of Science and Technology</span>
          </div>
          <p>Engineering Physics</p>
        </div>
        <span>2013-2018</span>
      </div>

      <ResumeRightTitle img={WorkIcon} title={"WORK EXPERIENCE"} />
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
      <ResumeRightTitle img={Achievement} title={"ACHIEVEMENTS"} />
    </div>
  );
}

export default ResumeRight;