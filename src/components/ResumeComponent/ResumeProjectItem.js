import React from 'react';

function ResumeProjectItem(props) {
  return (
    <div className="mb-10">
      <h3 className="text-light-cyan !text-2xl">{props.projectName}</h3>
      <p className="text-royal-blue mb-2">{props.projectTime}</p>
      <table className="text-lg">
        <tr className="border border-solid border-gray-400">
          <th style={{ width: '20%' }} className="border border-solid border-gray-400 text-left py-1 px-3">Client</th>
          <th className="text-left py-1 px-3">{props.projectClient}</th>
        </tr>
        <tr className="border border-solid border-gray-400">
          <td className="border border-solid border-gray-400 py-1 px-3">Descriptions</td>
          <td>
            <ul className="list-disc py-1 px-6">
              {props.projectDescription.map((descriptionItem, index) => {
                return (
                  <li key={index}>{descriptionItem}</li>
                )
              })}
            </ul>
          </td>
        </tr>
        <tr className="border border-solid border-gray-400">
          <td className="border border-solid border-gray-400 py-1 px-3">Number of members</td>
          <td className="py-1 px-3">{props.projectMember}</td>
        </tr>
        <tr className="border border-solid border-gray-400">
          <td className="border border-solid border-gray-400 py-1 px-3">Position</td>
          <td className="py-1 px-3">{props.projectPosition}</td>
        </tr>
        <tr className="border border-solid border-gray-400">
          <td className="border border-solid border-gray-400 py-1 px-3">Technology in use</td>
          <td className="py-1 px-3">
            <ul>
              {props.projectTechnology.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })}
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ResumeProjectItem;