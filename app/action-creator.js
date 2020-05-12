import { RECEIVE_NAVBAR, 
  RECEIVE_HEADINGS,
  RECEIVE_EXPERIENCES,
  RECEIVE_SKILLS,
  RECEIVE_PROJECTS,
  RECEIVE_CONTACTS } from './constants';

export const receiveNavbar = navbar => ({
  type: RECEIVE_NAVBAR,
  navbar
}) 
export const receiveHeadings = headings => ({
  type: RECEIVE_HEADINGS,
  headings
}) 
export const receiveExperiences = experiences => ({
  type: RECEIVE_EXPERIENCES,
  experiences
}) 
export const receiveSkills = skills => ({
  type: RECEIVE_SKILLS,
  skills
}) 
export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
}) 
export const receiveContacts = contacts => ({
  type: RECEIVE_CONTACTS,
  contacts
}) 
 