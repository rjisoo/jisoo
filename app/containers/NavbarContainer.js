import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const mapStateToProps = state => {
  return {
    navbar: state.navbar.navbar
  };
};

class NavbarContainer extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Navbar
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default connect(
  mapStateToProps
)(NavbarContainer);
