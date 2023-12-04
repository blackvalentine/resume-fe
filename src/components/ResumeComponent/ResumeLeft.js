import React from 'react';
import Avatar from "../../assets/images/avatar.jpeg"

function ResumeLeft(props) {
  return (
    <div className="resume-left">
      <h2 className="resume-left__name">Stephen Dang</h2>
      <h3 className="resume-left__job">Software Engineer</h3>
      <img src={Avatar} alt="avatar" />
      <div className="resume-left__title">
        <span>EDUCATION</span>
        <hr />
      </div>
      <div className="mt-2 mb-10">
        <h3 className="text-xl text-dark-eclipse font-extrabold">Hanoi University of Science and Technology</h3>
        <p className="italic text-pastel-red text-lg">(09/2013 - 06/2018)</p>
        <h3 className="text-xl text-dark-eclipse font-extrabold">Devops course - Techmaster</h3>
        <p className="italic text-pastel-red text-lg">(07/2023 - 12/2023)</p>
        <ul className="mt-5">
          <li className="mb-1 text-xl">
            <span className="text-dark-eclipse font-bold">Speciality: </span>
            <span className="text-dark-blue">Engineering Physic</span>
          </li>
          <li className="mb-1 text-xl">
            <span className="text-dark-eclipse font-bold">Level: </span>
            <span className="text-dark-blue">Good</span></li>
          <li className="mb-1 text-xl">
            <span className="text-dark-eclipse font-bold">Award: </span>
            <span className="text-dark-blue">I won third prize in a scientific research competition at the university level.</span>
          </li>
        </ul>
      </div>

      <div className="resume-left__title">
        <span>PROFILE</span>
        <hr />
      </div>
      <p className="resume-left__profile">
        Hi, my name is Stephen. Until now, I have 4 years of experience as a frontend developer and 2 year as a backend developer. I am familiar with using Javascript (Typescript) for both frontend and backend, as well as ReactJs, NextJs, and NodeJs, NestJs frameworks.<br />
        I majored in math in High School and have 7 years of experience as a teacher. Therefore, my logical thinking is quite good. I also have research and self-learning skills, as well as other skills acquired during my time working.
      </p>

      <div className="resume-left__title">
        <span>CONTACT</span>
        <hr />
      </div>
      <div className="text-xl mt-5">
        <div className="flex items-center mb-2">
          <span className="text-dark-eclipse font-bold mr-2">Name: </span>
          <span className="text-dark-blue">Đặng Tuấn Sơn (Stephen)</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-dark-eclipse font-bold mr-2">Address: </span>
          <span className="text-dark-blue">Hanoi, Vietnam</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-dark-eclipse font-bold mr-2">Phone: </span>
          <span className="text-dark-blue">(+84)912481014</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-dark-eclipse font-bold mr-2">Email: </span>
          <span className="text-dark-blue">tuanson.dang1404@gmail.com</span>
        </div>
        <div className="flex items-center">
          <span className="text-dark-eclipse font-bold mr-2">YoB:</span>
          <span className="text-dark-blue">1995</span>
        </div>
      </div>
    </div>
  );
}

export default ResumeLeft;