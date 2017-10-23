import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import ProductImage from '../components/product/productImage'
import ProductInfo from '../components/product/productInfo'
import { formatProductDetail } from '../helper'
import { productDetailResponse } from '../samples/product'

class ProductDetailContainer extends React.Component {

  handleBackLink = (e) => {
    const { history } = this.props
    e.preventDefault()
    history.goBack()
  }

  render() {
    const product = formatProductDetail(productDetailResponse.data.product)
    return (
      <Grid>
        <a href="" onClick={this.handleBackLink}>Back</a>
        <Row className="show-grid">
          <ProductImage images={product.images}/>
          <ProductInfo
            name={product.name}
            price={product.price}
            brand={product.brand}
            category={product.category}
            size={product.size}
            color={product.color}
          />
        </Row>
      </Grid>
    )
  }
}

export default ProductDetailContainer