import React from 'react'
import { Col, Thumbnail } from 'react-bootstrap'

class ProductItem extends React.Component {
  render() {
    return (
      <Col className="text-center" xs={6} md={4}>
        <Thumbnail href="/product" src="http://fakeimg.pl/254x350/" alt="254x350">
          <h5>Product Name</h5>
          <h5>Price</h5>
          <h6>Category</h6>
        </Thumbnail>
      </Col>
    )
  }
}

export default ProductItem