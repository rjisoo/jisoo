import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import Heading from './Heading';

export default (props) => {
return (
<div id="experiences" className="experience" name="experiences" >
  <Heading {...props.headings} />   
  <div className="container">
  {
    props.experiences.map((experience, i) => (
      <div key={i} className="row">
        <div className="experience-img">
          <Icon name={experience.icon} />
        </div>
        <div className={`experience-item col-lg-5 col-md-5 col-sm-10 + ${i % 2 === 0 ? null : "right"}`}>
          <div className="experience-content js--fadeInLeft">
            <h2>{experience.name}</h2>
            <i>{experience.title}</i><i className="area">{experience.area}</i>
            <p>{experience.description}</p>
            <blockquote>{experience.description}</blockquote>
          </div>
        </div> 
      </div> 
    ))
  }
  </div>
</div>
)}