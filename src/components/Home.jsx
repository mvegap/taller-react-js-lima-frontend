import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

class Home extends Component {
  render() {
    return(
      <React.Fragment>
        <Helmet>
          <title>Home | Lima Frontend</title>
        </Helmet>
        <Header />
        <h1>Inicio</h1>
      </React.Fragment>
    );
  }
};

export default Home;
