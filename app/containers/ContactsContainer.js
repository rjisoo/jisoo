import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contacts from '../components/Contacts';

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts,
    headings: state.headings.headings.contacts
  };
};

class ContactsContainer extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Contacts
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default connect(
  mapStateToProps
)(ContactsContainer);
