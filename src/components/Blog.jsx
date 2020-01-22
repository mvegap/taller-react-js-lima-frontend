import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

class Blog extends Component {
  render() {
    return(
      <React.Fragment>
        <Helmet>
          <title>Blog | Lima Frontend</title>
        </Helmet>
        <Header />
        <h1>Last news</h1>
      </React.Fragment>
    );
  }
};

export default Blog;
