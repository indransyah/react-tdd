import React from 'react'
import { Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ProductItem from './productItem'

class ProductList extends React.Component {
  render() {
    const { products } = this.props
    return (
      <Row>
        {products.map(value => {
        return <ProductItem key={value.id} {...value}/>
        })}
      </Row>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

ProductList.defaultProps = {
  products: []
}

export default ProductList