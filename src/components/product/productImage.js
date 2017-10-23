import React from 'react'
import PropTypes from 'prop-types'
import { Col, Image, Row } from 'react-bootstrap'

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImageIndex: 0
    };
  }

  handleClick = (index) => {
    const { mainImageIndex } = this.state
    if(mainImageIndex !== index) {
      this.setState({
        mainImageIndex: index
      })
    }
  }

  render() {
    const { images } = this.props
    if(images.length === 0) {
      return null
    }
    return (
      <Col xs={12} md={8}>
        <Image id="preview" className="center-block" src={images[this.state.mainImageIndex].path} alt={images[this.state.mainImageIndex].name} responsive />
        <hr/>
        <Row>
          {images.map((value, index) => {
            return (
              <Col key={value.id} xs={4} md={3} onClick={(e) => this.handleClick(index)} style={{cursor: "pointer"}}>
                <Image href="" className="center-block" src={value.path} alt={value.name} thumbnail />
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