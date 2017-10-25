import React from 'react'
import { Grid, Pagination } from 'react-bootstrap'
import axios from 'axios'
import { parse } from 'qs'
import ProductList from '../components/product/productList'
import { formatProductList } from '../helper'

class ProductListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      page: 1,
      total: 0
    }
  }

  handleSelect = (newPage) => {
    window.location.assign(`?page=${newPage}`)
  }

  fetchData(page) {
    axios.get(`https://www.refash.sg/api/v1/catalog?limit=9&offset=${(page - 1) * (9 + 1)}`)
    .then(res => {
      this.setState({
        data: formatProductList(res.data.data.items),
        total: Math.ceil(res.data.data.pagination.total / (9 + 1)),
        page
      })
    })
    .catch((err) => {
      alert('Cannot load data')
    })
  }

  componentDidMount() {
    const { location } = this.props
    let page = parseInt(parse(location.search.substr(1)).page, 10)
    page = (page > 0) ? page : 1
    this.fetchData(page)
  }

  render() {
    const { data, page, total } = this.state
    return (
      <Grid>
        <h5>Products</h5>
        <ProductList products={data}/>
        {(data.length > 0) && <Pagination
          className="pull-right"
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={total}
          maxButtons={3}
          activePage={page}
          onSelect={this.handleSelect}
        />}
      </Grid>
    )
  }
}

export default ProductListContainer