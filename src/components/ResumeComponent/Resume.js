import React from 'react';
import Header from "../Header";
import ResumeLeft from './ResumeLeft';
import ResumeRight from './ResumeRight';
import './Resume.scss';

function Resume(props) {
  return (
    <div className="resume">
      <Header />
      <div className="container resume__container">
        <ResumeLeft />
        <ResumeRight />
      </div>
    </div>
  );
}

export default Resume;