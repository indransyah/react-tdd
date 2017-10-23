import React from 'react'
import PropTypes from 'prop-types'
import { Col, Thumbnail } from 'react-bootstrap'

class ProductItem extends React.Component {
  render() {
    const { id, name, price, category, slug, image } = this.props
    return (
      <Col key={id} className="text-center" xs={6} md={4}>
        <Thumbnail href={slug} src={image} alt="254x350">
          <h5>{name}</h5>
          <h5>{price}</h5>
          <h6>{category}</h6>
        </Thumbnail>
      </Col>
    )
  }
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default ProductItem