import React from 'react'
import { Row } from 'react-bootstrap'
import ProductItem from './productItem'

class ProductList extends React.Component {
  render() {
    return (
      <Row>
        <ProductItem/>
      </Row>
    )
  }
}

export default ProductList