import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@components/Header';
import axios from '../utils/axios';

import Post from '@components/Post';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      posts: []
    }
  }
  async componentDidMount() {
    try {
      let arrData = await axios.get('/posts');
      arrData = arrData.data;
      this.setState({
        isLoaded: true,
        posts: arrData,
      });
    } catch (e) {
      this.setState({
        isLoaded: true,
        error: e,
      });
      console.log(`😱 Error al realizar la petición en AXIOS: ${e}`);
    }
  }
  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return(
        <React.Fragment>
          <Helmet>
            <title>Error: {error.message}</title>
          </Helmet>
          <Header />
          <h1>Last news</h1>
          <p>Hubo un error: {error.message}</p>
        </React.Fragment>
      );
    } else if (!isLoaded) {
      return (
        <React.Fragment>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
          <Header />
          <h1>Last news</h1>
          <p>Loading...</p>
        </React.Fragment>
      );
    }else {
      return(
        <React.Fragment>
          <Helmet>
            <title>Blog | Lima Frontend</title>
          </Helmet>
          <Header />
          <h1>Last news</h1>
          <ul>
            { posts.map(item => (
              <NavLink key={item.id} to={'/posts/' + item.id} >
                <Post key={item.id} title={item.title} />  
              </NavLink>
              // <li key={item.id}>{item.title}</li>
            )) }
          </ul>
        </React.Fragment>
      );
    }
  }
};

export default Blog;
