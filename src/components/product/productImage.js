import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

class ProductImage extends React.Component {
  render() {
    return (
      <Col xs={12} md={8}>
        <Image id="preview" className="center-block" src="http://fakeimg.pl/300x400/" alt="300x400" responsive />
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
    )
  }
}

export default ProductImage