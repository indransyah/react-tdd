import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import ProductListContainer from './containers/productListContainer';
import productDetailContainer from './containers/productDetailContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={ProductListContainer}/>
          <Route exact path="/product/:slug" component={productDetailContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
