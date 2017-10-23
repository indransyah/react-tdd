import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import ProductImage from '../components/product/productImage'
import ProductInfo from '../components/product/productInfo'

class ProductDetailContainer extends React.Component {

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
          <ProductImage/>
          <ProductInfo/>
        </Row>
      </Grid>
    )
  }
}

export default ProductDetailContainer