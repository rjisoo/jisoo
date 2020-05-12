import React, { Component } from 'react';
import { connect } from 'react-redux';
import Experiences from '../components/Experiences';

const mapStateToProps = state => {
  return {
    experiences: state.experiences.experiences,
    headings: state.headings.headings.experiences
  };
};

class ExperiencesContainer extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Experiences
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default connect(
  mapStateToProps
)(ExperiencesContainer);
