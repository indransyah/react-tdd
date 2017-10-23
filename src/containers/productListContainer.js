import React from 'react'
import { Grid, Pagination } from 'react-bootstrap'
import ProductList from '../components/product/productList'

class ProductListContainer extends React.Component {

  render() {
    return (
      <Grid>
        <h5>Products</h5>
        <ProductList/>
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