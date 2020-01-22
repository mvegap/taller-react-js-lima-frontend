import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@components/Header';

class Portfolio extends Component {
  render() {
    return(
      <React.Fragment>
        <Helmet>
          <title>Portfolio | Lima Frontend</title>
        </Helmet>
        <Header />
        <h1>Portfolio</h1>
      </React.Fragment>
    );
  }
}

export default Portfolio;
