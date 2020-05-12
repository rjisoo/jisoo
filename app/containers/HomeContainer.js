import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

class HomeContainer extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Home
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default connect()(HomeContainer);
