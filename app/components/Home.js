import React, { Component } from 'react';
import Typewriter from 'react-rotating-text';

export default (props) => {
return (
<div id="home" className="background-white photo">
  <div className="container">
    <div className="col-sm-6"></div>
    <div className="typewriter col-sm-6">
      <h2>Hi, I'm Jisoo.</h2>
      <span className='iam'>I am </span> 
      <Typewriter 
        items={
          ['a developer.',
          'a designer.',
          'a Citi Biker.',
          'an architect.', 
          'a traveler.',
          'a hiker.']}
        typingInterval={100} 
        color="#555" /> 
    </div>
  </div>
</div>
)}
