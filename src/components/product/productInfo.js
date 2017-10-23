import React from 'react'
import { Col } from 'react-bootstrap'

class ProductInfo extends React.Component {
  render() {
    return (
      <Col xs={6} md={4}>
        <h4>Product Name</h4>
        <h4>Price</h4>
        <h5>Brand : BrandA</h5>
        <h5>Category : CategoryB</h5>
        <h5>Size : S</h5>
        <h5>Color : Black</h5>
      </Col>
    )
  }
}

export default ProductInfo