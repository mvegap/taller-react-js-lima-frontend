import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from '@components/Footer';
import SinglePost from '@components/SinglePost';
import Home from '@pages/Home';
import About from '@pages/About';
import Portfolio from '@pages/Portfolio';
import Blog from '@pages/Blog';
import Contact from '@pages/Contact';
import Empty from '@pages/Empty';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:postId" component={SinglePost} />
            <Route path='*' component={Empty} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
