import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import ProductListPage from './pages/productListPage';
import productDetailPage from './pages/productDetailPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={ProductListPage}/>
          <Route exact path="/product" component={productDetailPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
