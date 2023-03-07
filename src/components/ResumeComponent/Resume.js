import React from 'react';
import ResumeLeft from './ResumeLeft';
import ResumeRight from './ResumeRight';
import './Resume.scss';
import HeaderBlog from '../HeaderBlog';

function Resume(props) {
  return (
    <div className="resume">
      <HeaderBlog />
      <div className="container__custom resume__container">
        <ResumeLeft />
        <ResumeRight />
      </div>
    </div>
  );
}

export default Resume;