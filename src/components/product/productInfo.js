import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'

class ProductInfo extends React.Component {
  render() {
    const { name, price, brand, category, size, color } = this.props
    return (
      <Col xs={6} md={4}>
        <h4>{name}</h4>
        <h4>{price}</h4>
        <h5>Brand : {brand}</h5>
        <h5>Category : {category}</h5>
        <h5>Size : {size}</h5>
        <h5>Color : {color}</h5>
      </Col>
    )
  }
}

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
}

export default ProductInfo