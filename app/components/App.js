import React, { Component } from 'react';
import store from '../store';

import Home from '../containers/HomeContainer';
import Projects from '../containers/ProjectsContainer';
import Experiences from '../containers/ExperiencesContainer';
import Contacts from '../containers/ContactsContainer';
import Skills from '../containers/SkillsContainer';
import Navbar from '../containers/NavbarContainer';

import { Element } from 'react-scroll';

export default (props) => {
return (
<div>
  <Navbar /> 
  <Element name="test1" >
    <Home />
  </Element>   

  <Element name="test2">
    <Experiences />
  </Element>  

  <Element name="test3">
    <Skills />
  </Element> 

  <Element name="test4">
    <Projects />
  </Element> 

  <Element name="test5">
    <Contacts />
  </Element>
</div>
)}