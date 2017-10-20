import React, { Component } from 'react';
import { Navbar, Grid, Row, Col, Thumbnail, Pagination, Image } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">REFASH</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <h5>Products</h5>
          <Row>
            <Col className="text-center" xs={6} md={4}>
              <Thumbnail href="/" src="http://fakeimg.pl/254x350/" alt="254x350">
                <h5>Product Name</h5>
                <h5>Price</h5>
                <h6>Category</h6>
              </Thumbnail>
            </Col>
            <Col className="text-center" xs={6} md={4}>
              <Thumbnail href="/" src="http://fakeimg.pl/254x350/" alt="254x350">
                <h5>Product Name</h5>
                <h5>Price</h5>
                <h6>Category</h6>
              </Thumbnail>
            </Col>
            <Col className="text-center" xs={6} md={4}>
              <Thumbnail href="/" src="http://fakeimg.pl/254x350/" alt="254x350">
                <h5>Product Name</h5>
                <h5>Price</h5>
                <h6>Category</h6>
              </Thumbnail>
            </Col>
            <Col className="text-center" xs={6} md={4}>
              <Thumbnail href="/" src="http://fakeimg.pl/254x350/" alt="254x350">
                <h5>Product Name</h5>
                <h5>Price</h5>
                <h6>Category</h6>
              </Thumbnail>
            </Col>
            <Col className="text-center" xs={6} md={4}>
              <Thumbnail href="/" src="http://fakeimg.pl/254x350/" alt="254x350">
                <h5>Product Name</h5>
                <h5>Price</h5>
                <h6>Category</h6>
              </Thumbnail>
            </Col>
            <Col className="text-center" xs={6} md={4}>
              <Thumbnail href="/" src="http://fakeimg.pl/254x350/" alt="254x350">
                <h5>Product Name</h5>
                <h5>Price</h5>
                <h6>Category</h6>
              </Thumbnail>
            </Col>
            <Col className="text-center" xs={6} md={4}>
              <Thumbnail href="/" src="http://fakeimg.pl/254x350/" alt="254x350">
                <h5>Product Name</h5>
                <h5>Price</h5>
                <h6>Category</h6>
              </Thumbnail>
            </Col>
            <Col className="text-center" xs={6} md={4}>
              <Thumbnail href="/" src="http://fakeimg.pl/254x350/" alt="254x350">
                <h5>Product Name</h5>
                <h5>Price</h5>
                <h6>Category</h6>
              </Thumbnail>
            </Col>
            <Col className="text-center" xs={6} md={4}>
              <Thumbnail href="/" src="http://fakeimg.pl/254x350/" alt="254x350">
                <h5>Product Name</h5>
                <h5>Price</h5>
                <h6>Category</h6>
              </Thumbnail>
            </Col>
          </Row>
          <Pagination
            className="pull-right"
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={100}
            maxButtons={3}
            activePage={1}
            onSelect={() => {}}
          />
        </Grid>

        <Grid>
          <a href="/">Back</a>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <Image className="center-block" src="http://fakeimg.pl/300x400/" alt="300x400" responsive />
              <hr/>
              <Row>
                <Col xs={4} md={3}>
                  <Image className="center-block" src="http://fakeimg.pl/100x150/" alt="100x150" thumbnail />
                </Col>
                <Col xs={4} md={3}>
                  <Image className="center-block" src="http://fakeimg.pl/100x150/" alt="100x150" thumbnail />
                </Col>
                <Col xs={4} md={3}>
                  <Image className="center-block" src="http://fakeimg.pl/100x150/" alt="100x150" thumbnail />
                </Col>
                <Col xs={4} md={3}>
                  <Image className="center-block" src="http://fakeimg.pl/100x150/" alt="100x150" thumbnail />
                </Col>
              </Row>
            </Col>
            <Col xs={6} md={4}>
              <h4>Product Name</h4>
              <h4>Price</h4>
              <h5>Brand : BrandA</h5>
              <h5>Category : CategoryB</h5>
              <h5>Size : S</h5>
              <h5>Color : Black</h5>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
