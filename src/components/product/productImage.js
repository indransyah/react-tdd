import React from 'react'
import PropTypes from 'prop-types'
import { Col, Image, Row } from 'react-bootstrap'

class ProductImage extends React.Component {
  render() {
    const { images } = this.props
    if(images.length === 0) {
      return null
    }
    return (
      <Col xs={12} md={8}>
        <Image id="preview" className="center-block" src={images[0].path} alt={images[0].name} responsive />
        <hr/>
        <Row>
          {images.map((value, index) => {
            return (
              <Col key={value.id} xs={4} md={3}>
                <Image className="center-block" src={value.path} alt={value.name} thumbnail />
              </Col>
            )
          })}
        </Row>
      </Col>
    )
  }
}

ProductImage.propTypes = {
  images: PropTypes.array.isRequired
}

export default ProductImage