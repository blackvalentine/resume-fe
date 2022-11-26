import React from 'react';

function ResumeRightTitle(props) {
  return (
    <div className="resume-right__title">
      <img src={props.img} alt="" />
      <span>{props.title}</span>
      <hr />
    </div>
  );
}

export default ResumeRightTitle;