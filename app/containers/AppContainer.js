import React, { Component } from 'react';
import store from '../store';
import App from '../components/App';

import { receiveContacts, 
  receiveExperiences, 
  receiveHeadings, 
  receiveNavbar, 
  receiveProjects, 
  receiveSkills
} from '../action-creator';

import Scroll from 'react-scroll';
const Link       = Scroll.Link;
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

export default class Section extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    scroll.scrollToTop();

    // update cooperative game count
		fetch('/incrementVisits', {
			method: 'PUT',
			headers: {
				"authorization": 'auth'
			}
		})
		.catch(err => console.error('updating co-op did not work', err));

    const pContacts = require('../assets/contacts').default;
    const pExperiences = require('../assets/experiences').default;
    const pHeadings = require('../assets/headings').default;
    const pNavbar = require('../assets/navbar').default;
    const pProjects = require('../assets/projects').default;
    const pSkills = require('../assets/skills').default;  
    
    return Promise
      .all([pContacts, pExperiences, pHeadings, pNavbar, pProjects, pSkills])
      .then(([contacts, experiences, headings, navbar, projects, skills]) => {
        store.dispatch(receiveContacts(contacts));
        store.dispatch(receiveExperiences(experiences));
        store.dispatch(receiveHeadings(headings));
        store.dispatch(receiveNavbar(navbar));
        store.dispatch(receiveProjects(projects));
        store.dispatch(receiveSkills(skills));
      });
  }

  componentDidUpdate () {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  render () {
    return (
      <App />
    );
  }
};