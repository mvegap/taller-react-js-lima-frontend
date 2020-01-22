import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@components/Header';

class About extends Component {
  render() {
    return(
      <React.Fragment>
        <Helmet>
          <title>About us | Lima Frontend</title>
        </Helmet>
        <Header />
        <h1>About us</h1>
      </React.Fragment>
    );
  }
};

export default About;
