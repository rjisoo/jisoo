import React, { Component } from 'react';
import Typewriter from 'react-rotating-text';

export default (props) => {
return (
<div className="heading text-center">
  <h2 className="section-heading">{props.heading}</h2>
  <h3 className="section-subheading">{props.subheading}</h3> 
  <hr />
</div> 
)}
