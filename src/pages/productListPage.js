import React from 'react'
import { Grid, Row, Col, Thumbnail, Pagination } from 'react-bootstrap'

class ProductListPage extends React.Component {

  render() {
    return (
      <Grid>
        <h5>Products</h5>
        <Row>
          <Col className="text-center" xs={6} md={4}>
            <Thumbnail href="/product" src="http://fakeimg.pl/254x350/" alt="254x350">
              <h5>Product Name</h5>
              <h5>Price</h5>
              <h6>Category</h6>
            </Thumbnail>
          </Col>
          <Col className="text-center" xs={6} md={4}>
            <Thumbnail href="/product" src="http://fakeimg.pl/254x350/" alt="254x350">
              <h5>Product Name</h5>
              <h5>Price</h5>
              <h6>Category</h6>
            </Thumbnail>
          </Col>
          <Col className="text-center" xs={6} md={4}>
            <Thumbnail href="/product" src="http://fakeimg.pl/254x350/" alt="254x350">
              <h5>Product Name</h5>
              <h5>Price</h5>
              <h6>Category</h6>
            </Thumbnail>
          </Col>
          <Col className="text-center" xs={6} md={4}>
            <Thumbnail href="/product" src="http://fakeimg.pl/254x350/" alt="254x350">
              <h5>Product Name</h5>
              <h5>Price</h5>
              <h6>Category</h6>
            </Thumbnail>
          </Col>
          <Col className="text-center" xs={6} md={4}>
            <Thumbnail href="/product" src="http://fakeimg.pl/254x350/" alt="254x350">
              <h5>Product Name</h5>
              <h5>Price</h5>
              <h6>Category</h6>
            </Thumbnail>
          </Col>
          <Col className="text-center" xs={6} md={4}>
            <Thumbnail href="/product" src="http://fakeimg.pl/254x350/" alt="254x350">
              <h5>Product Name</h5>
              <h5>Price</h5>
              <h6>Category</h6>
            </Thumbnail>
          </Col>
          <Col className="text-center" xs={6} md={4}>
            <Thumbnail href="/product" src="http://fakeimg.pl/254x350/" alt="254x350">
              <h5>Product Name</h5>
              <h5>Price</h5>
              <h6>Category</h6>
            </Thumbnail>
          </Col>
          <Col className="text-center" xs={6} md={4}>
            <Thumbnail href="/product" src="http://fakeimg.pl/254x350/" alt="254x350">
              <h5>Product Name</h5>
              <h5>Price</h5>
              <h6>Category</h6>
            </Thumbnail>
          </Col>
          <Col className="text-center" xs={6} md={4}>
            <Thumbnail href="/product" src="http://fakeimg.pl/254x350/" alt="254x350">
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
    )
  }
}

export default ProductListPage