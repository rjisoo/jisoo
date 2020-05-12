import { combineReducers } from 'redux'
import contacts from './contacts-reducer'

const rootReducer = combineReducers({
  contacts: require('./contacts-reducer').default,
  experiences: require('./experiences-reducer').default,
  headings: require('./headings-reducer').default,
  navbar: require('./navbar-reducer').default,
  projects: require('./projects-reducer').default,
  skills: require('./skills-reducer').default
})

export default rootReducer
