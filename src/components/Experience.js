import React, { useState } from 'react';
import './Experience.scss'

function Experience(props) {

  const [activeNumber, setActiveNumber] = useState(1)

  const handleChooseActiveItem = (number) => {
    setActiveNumber(number)
  }

  return (
    <div className="section-component experience" id="experience">
      <div className="container">
        <div className="experience__container">
          <div className="experience__title title">
            <span className="title__number">02.</span>
            <span className="title__text">My Experience</span>
          </div>

          <div className="experience__content">
            <div className="experience__left">
              <div
                className={activeNumber === 1 ? "experience__company active__company" : "experience__company"}
                onClick={() => handleChooseActiveItem(1)}
              ><span>CMC Global</span></div>
              <div
                className={activeNumber === 2 ? "experience__company active__company" : "experience__company"}
                onClick={() => handleChooseActiveItem(2)}
              >KPIM</div>
              <div
                className={activeNumber === 3 ? "experience__company active__company" : "experience__company"}
                onClick={() => handleChooseActiveItem(3)}
              >BMS</div>
              <div
                className={activeNumber === 4 ? "experience__company active__company" : "experience__company"}
                onClick={() => handleChooseActiveItem(4)}
              >HUST Lab</div>
            </div>

            <div className="experience__right">
              <div className={activeNumber === 1 ? "experience__detail active__detail" : "experience__detail"}>
                <h3 className="experience__detail-position">
                  Software Engineer
                  <span>@</span>
                  <a href="https://cmcglobal.com.vn/vi/home-vi/">CMC Global</a>
                </h3>
                <p className="experience__detail-time">April 2022 - Present</p>
                <p className="experience__detail-description">Write modern, performant, maintainable code for a diverse array of client and internal projects</p>
                <p className="experience__detail-description">Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</p>
                <p className="experience__detail-description">Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
              </div>
              <div className={activeNumber === 2 ? "experience__detail active__detail" : "experience__detail"}>
                <h3 className="experience__detail-position">
                  Software Engineer
                  <span>@</span>
                  <a href="https://kpim.vn/">KPIM</a>
                </h3>
                <p className="experience__detail-time">July 2021 - April 2022</p>
                <p className="experience__detail-description">Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern</p>
                <p className="experience__detail-description">Helped solidify a brand direction for blistabloc that spans both packaging and web</p>
                <p className="experience__detail-description">Interfaced with clients on a weekly basis, providing technological expertise</p>
              </div>
              <div className={activeNumber === 3 ? "experience__detail active__detail" : "experience__detail"}>
                <h3 className="experience__detail-position">
                  Process Engineer
                  <span>@</span>
                  <a href="https://www.water-filter-vietnam.com/vi">BMS</a>
                </h3>
                <p className="experience__detail-time">June 2018 - 2021</p>
                <p className="experience__detail-description">Write modern, performant, maintainable code for a diverse array of client and internal projects</p>
                <p className="experience__detail-description">Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</p>
                <p className="experience__detail-description">Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
              </div>
              <div className={activeNumber === 4 ? "experience__detail active__detail" : "experience__detail"}>
                <h3 className="experience__detail-position">
                  Intern Research Enginner
                  <span>@</span>
                  <a href="https://www.hust.edu.vn/">HUST Laboratory</a>
                </h3>
                <p className="experience__detail-time">May 2014 - June 2018</p>
                <p className="experience__detail-description">Write modern, performant, maintainable code for a diverse array of client and internal projects</p>
                <p className="experience__detail-description">Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</p>
                <p className="experience__detail-description">Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;