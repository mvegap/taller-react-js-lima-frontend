import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import axios from '../utils/axios';

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
            <title>Cargando...</title>
          </Helmet>
          <Header />
          <h1>Last news</h1>
          <p>Cargando datos...</p>
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
              <li key={item.id}>{item.title}</li>
            )) }
          </ul>
        </React.Fragment>
      );
    }
  }
};

export default Blog;
