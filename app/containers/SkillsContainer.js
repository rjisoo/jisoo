import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skills from '../components/Skills';

const mapStateToProps = state => {
  return {
    skills: state.skills.skills,
    headings: state.headings.headings.skills
  };
};

class SkillsContainer extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Skills
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default connect(
  mapStateToProps
)(SkillsContainer);
