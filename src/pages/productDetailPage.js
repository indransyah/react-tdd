import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

class ProductDetailPage extends React.Component {

  handleBackLink = (e) => {
    const { history } = this.props
    e.preventDefault()
    history.goBack()
  }

  render() {
    return (
      <Grid>
        <a href="" onClick={this.handleBackLink}>Back</a>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <Image className="center-block" src="http://fakeimg.pl/300x400/" alt="300x400" responsive />
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
          <Col xs={6} md={4}>
            <h4>Product Name</h4>
            <h4>Price</h4>
            <h5>Brand : BrandA</h5>
            <h5>Category : CategoryB</h5>
            <h5>Size : S</h5>
            <h5>Color : Black</h5>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ProductDetailPage