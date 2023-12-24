import React, { useState } from 'react';
import './Experience.scss'

function Experience(props) {
  const [activeNumber, setActiveNumber] = useState(1)

  const experiences = [
    {
      company: 'FrontFundr',
      position: 'Software Engineer',
      website: 'https://www.frontfundr.com/',
      time: 'Nov 2023 - Present',
      descriptions: [
        'FrontFundr is Canada’s leading online private markets investing platform and an exempt market dealer',
        'We provide startups and growth companies with access to capital that helps them grow, to help Canadian entrepreneurs turn their groundbreaking ideas into reality',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
        'Work with NodeJs, NextJs and Docker'
      ]
    },
    {
      company: 'Eastgate Software',
      position: 'Software Engineer',
      website: 'https://eastgate-software.com/',
      time: 'Feb 2023 - Nov 2023',
      descriptions: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, ReactJs, NodeJs, NestJs.',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.'
      ]
    },
    {
      company: 'Maxflow Technology',
      position: 'Frontend Developer',
      website: 'https://maxflowtech.com/',
      time: 'Feb 2022 - Feb 2023',
      descriptions: [
        'Simulate the shipping process from the Manufacturer to the Delivery Hub and provide for Dealers around the world. Users can check the location of their container product at any time after shipping and when it arrives at its destination.',
        'Create tables and charts to show the information for a range of time. This will help suppliers easily keep track of their shipping for the week, month, or year',
        "I'm the main Front End developer for this project.My responsibility is to receive feedback from the PM and customers, and to combine it with the Back End to develop new features."
      ]
    },
    {
      company: 'KPIM',
      position: 'Frontend Developer',
      website: 'https://kpim.vn/',
      time: 'Jan 2020 - Jan 2022',
      descriptions: [
        'Skillrank is e-learning game system that helps teachers and students to interact with each other by answering questions',
        'Function description: Waiting Room, Answer Questions Screen (single choice, multiple choice, ordering, true/false, matching ...). After each question, showing scoreboard of all player.',
        'Work with Nextjs and TailwindCss',
        'Combine with Backend team to make suitable API and Designer to make a creative UI. '
      ]
    }
  ]

  const handleChooseActiveItem = (number) => {
    setActiveNumber(number)
  }

  return (
    <div className="section-component experience" id="experience">
      <div className="container__custom">
        <div className="experience__container">
          <div className="experience__title title">
            <span className="title__number">02.</span>
            <span className="title__text">My Experience</span>
          </div>

          <div className="experience__content">
            <div className="experience__left">
              {experiences.map((exprience, index) => {
                return (
                  <div
                    className={activeNumber === index + 1 ? "experience__company active__company" : "experience__company"}
                    onClick={() => handleChooseActiveItem(index + 1)}
                  ><span>{exprience.company}</span></div>
                )
              })}
            </div>

            <div className="experience__right">
              {experiences.map((exprience, index) => {
                return (
                  <div key={index} className={activeNumber === index + 1 ? "experience__detail active__detail" : "experience__detail"}>
                    <h3 className="experience__detail-position">
                      {exprience.position}
                      <span>@</span>
                      <a href={exprience.website} target="_blank" rel="noreferrer">{exprience.company}</a>
                    </h3>
                    <p className="experience__detail-time">{exprience.time}</p>
                    {exprience.descriptions.map((description, index1) => {
                      return (
                        <p key={index1} className="experience__detail-description">{description}</p>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;