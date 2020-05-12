import React, { Component } from 'react';
import Heading from './Heading';

import Icon from 'react-fontawesome';

export default (props) => {
return (
<div id="skills" className="skills background-white">
  <Heading {...props.headings} />
  <div className="container section-wrapper">
    <div className="row skills-flex-wrapper">
      <div className="col-lg-1 col-md-1 col-sm-2"></div>
      <div className="col-lg-5 col-md-5 col-sm-8 flex-item dev-wrapper">
        <h2 className="skills-heading">
          <Icon name="cogs" />
          <span>Development</span>
        </h2>
        <ul className="table">
        {
          props.skills.development && props.skills.development.map((skill, i) => (
            <div className="dev-item" key={i}>
              <div><img src={`/svg/${skill.icon}.svg`}/></div>
              <div><span className={skill.small ? 'small' : ""} >{skill.name}</span>  
              </div>
            </div>
          ))
        }
        </ul>
      </div>
      <div className="col-sm-2 helper"></div>  
      <div className="col-lg-5 col-md-5 col-sm-9 design-flex-item">
        <div className="design-wrapper">
          <h2 className="skills-heading">
            <Icon name="wrench" />
            <span>Tools</span>
          </h2>
          <ul>
          {
            props.skills.tools && props.skills.tools.map((skill, i) => (
              <div key={i} className="design-item">
                <Icon className="item-img" name="check" />
                {skill}
              </div>
            ))
          }
          </ul>
        </div>
        <div className="design-wrapper">
          <h2 className="skills-heading">
            <Icon name="lightbulb-o" />
            <span>Knowledge</span>
          </h2>
          <ul>
          {
            props.skills.knowledge && props.skills.knowledge.map((skill, i) => (
              <div key={i} className="design-item">
                <Icon className="item-img" name="check" />
                {skill}
              </div>
            ))
          }
          </ul>
        </div>
      </div>
      <div className="col-lg-1 col-sm-1"></div>
    </div>
  </div> 
</div> 
)}
