import React, { Component } from 'react';
import { connect } from 'react-redux';
import Projects from '../components/Projects';

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    headings: state.headings.headings.projects
  };
};

class ProjectsContainer extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Projects
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default connect(
  mapStateToProps
)(ProjectsContainer);
