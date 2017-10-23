import React from 'react'
import { Grid, Pagination } from 'react-bootstrap'
import ProductList from '../components/product/productList'
import { productListResponse } from '../samples/product'
import { formatProductList } from '../helper'

class ProductListContainer extends React.Component {

  render() {
    const products = formatProductList(productListResponse.data.items)
    return (
      <Grid>
        <h5>Products</h5>
        <ProductList products={products}/>
        <Pagination
          className="pull-right"
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={100}
          maxButtons={3}
          activePage={1}
          onSelect={() => {}}
        />
      </Grid>
    )
  }
}

export default ProductListContainer