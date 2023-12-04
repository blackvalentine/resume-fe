import React from 'react'
import './About.scss'
import avatar from '../assets/images/avatar.jpeg'

function About(props) {
  const technologyList = ["Javascripts (ES6+)", "Typescript", "ReactJs", "NextJs", "NodeJs", "NestJs", "Docker", "Kubernetes", "TailwindCss, Antd, MUI, SCSS"]

  return (
    <div className="section-component about" id="about">
      <div className="container__custom about__container">
        <div className="about__title title">
          <span className="title__number">01.</span>
          <span className="title__text">About Me</span>
        </div>
        <div className="about__detail">
          <div className="about__right">
            <p>
              Hello! My name is Black Valentine and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2020 when I had 2 years working as a Physics Engineering and one day,
              I realized that I'm not suitable for this work. I had a big decision of my life, to be come a developer
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at many company.
              Each of them help me a lot to improve my knowleage and give me many chance for working with difference domain like: shipping, e-learning, CMS, Investment...
              Currently, I'm working at FrontFundr. We provide startups and growth companies with access to capital that helps them grow, to help Canadian entrepreneurs turn their groundbreaking ideas into reality.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="about__list">
              {technologyList.map((item, index) => {
                return (
                  <li key={index} className="about__item">
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="about__left">
            <picture>
              <img
                src={avatar}
                alt="avatar"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
