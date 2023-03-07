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
        Hi, my name is Stephen, I have 3 years experience that working as FrontEnd Developer. Actually, my path to become a developer is not begin when I study in my university. After I graduated, I have about 3 years working as Process Engineer. And one day, I realized that this job is not suitable for myself, and I decided that I need to change to new job, which should be make me happy everyday. And the new chapter of my life start like this :)
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