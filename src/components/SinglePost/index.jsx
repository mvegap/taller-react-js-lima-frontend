import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@components/Header';
import axios from '@utils/axios';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      id: null,
      author: null,
      title: null,
      content: null,
    }
  }

  async componentDidMount() {
    try {
      let dataPost = await axios.get('/posts/' + this.props.match.params.postId);
      console.log(dataPost, 'data desde api');
      dataPost = dataPost.data;
      this.setState({
        isLoaded: true,
        author: dataPost.userId,
        title: dataPost.title,
        content: dataPost.body,
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
    const { error, isLoaded, author, title, content } = this.state;
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
          <p>Loading...</p>
        </React.Fragment>
      );
    } else {
      return(
        <React.Fragment>
          <Helmet>
          <title>{ this.state.title } | Lima Frontend</title>
          </Helmet>
          <Header />
          <p><small>Author: { author }</small></p>
          <h1>{ title }</h1>
          <p>{ content }</p>
        </React.Fragment>
      );
    }
  }
}

export default SinglePost;
