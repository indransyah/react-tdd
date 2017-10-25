import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import axios from 'axios'
import ProductImage from '../components/product/productImage'
import ProductInfo from '../components/product/productInfo'
import { formatProductDetail } from '../helper'

class ProductDetailContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        name: '',
        price: '',
        brand: '',
        category: '',
        size: '',
        color: '',
        images: []
      }
    }
  }

  handleBackLink = (e) => {
    const { history } = this.props
    e.preventDefault()
    history.goBack()
  }

  componentDidMount() {
    const { match } = this.props
    axios.get(`https://www.refash.sg/api/v1/product/${match.params.slug}`)
    .then(res => {
      this.setState({
        product: formatProductDetail(res.data.data.product)
      })
    })
    .catch(() => {
      alert('Cannot load data')
    })
  }

  render() {
    const { product } = this.state
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