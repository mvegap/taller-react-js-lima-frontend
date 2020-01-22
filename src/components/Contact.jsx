import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

class Contact extends Component {
  render() {
    return(
      <React.Fragment>
        <Helmet>
          <title>Contact | Lima Frontend</title>
        </Helmet>
        <Header />
        <h1>Contact me</h1>
      </React.Fragment>
    );
  }
};

export default Contact;
