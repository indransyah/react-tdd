import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Pagination, PaginationButton, SafeAnchor } from 'react-bootstrap'
import axios from 'axios'
import moxios from 'moxios'
import ProductListContainer from './ProductListContainer'
import ProductList from '../components/product/productList'
import ProductItem from '../components/product/productItem'
import { formatProductList } from '../helper'
import { productListResponse } from '../samples/product'

Enzyme.configure({ adapter: new Adapter() })

describe('#productListContainer | 200', () => {
  let wrapper, spy
  const lastPage = Math.ceil(productListResponse.data.pagination.total / (9 + 1))
  const testPage = 10
  
  beforeAll((done) => {
    moxios.install()
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: productListResponse
      })
      .then(() => {
        wrapper.update()
        done()
      })
    })
    spy = jest.spyOn(ProductListContainer.prototype, 'componentDidMount')
    window.location.assign = jest.fn()
    wrapper = mount(<ProductListContainer location={{ search: `?page=${testPage}` }}/>)
  })
  
  afterAll(() => {
    moxios.uninstall()
    spy.mockReset()
    spy.mockRestore()
  })
  
  it('renders without crashing', () => {
    expect(spy).toHaveBeenCalled()
    expect(wrapper.props().location.search).toEqual('?page=10')
    expect(wrapper).toBeDefined()
    expect(wrapper.state().data).toEqual(formatProductList(productListResponse.data.items))
    expect(wrapper.state().total).toEqual(lastPage)
  })
  
  it('should have page name', () => {
    expect(wrapper.contains('Products')).toBeTruthy()
  })
  
  it('should have product list', () => {
    expect(wrapper.find(ProductList).length).toBe(1)
  })
  
  it('should have pagination', () => {
    expect(wrapper.find(Pagination).length).toBe(1)
    expect(wrapper.find(Pagination).props().activePage).toEqual(10)
  })
  
  it('should paginate to last page', () => {
    wrapper.find(Pagination).find(SafeAnchor).last().simulate('click') // Last Page
    expect(window.location.assign).toHaveBeenCalledWith(`?page=${lastPage}`)
  })
  
  it('should paginate to first page', () => {
    wrapper.find(Pagination).find(SafeAnchor).first().simulate('click') // First Page
    expect(window.location.assign).toHaveBeenCalledWith(`?page=1`)
  })
  
  it('should paginate to prev page', () => {
    wrapper.find(Pagination).find(SafeAnchor).at(1).simulate('click') // Previous Page
    expect(window.location.assign).toHaveBeenCalledWith(`?page=${testPage - 1}`)
  })
  
  it('should paginate to next page', () => {
    wrapper.find(Pagination).find(SafeAnchor).at(wrapper.find(Pagination).find(SafeAnchor).length - 2).simulate('click') // Next Page
    expect(window.location.assign).toHaveBeenCalledWith(`?page=${testPage + 1}`)
  })
  
  it('should have correct product data', () => {
    const productItemWrapper = wrapper.find(ProductItem).first()
    const product = formatProductList(productListResponse.data.items)[0]
    expect(productItemWrapper.props().id).toEqual(product.id)
    expect(productItemWrapper.props().name).toEqual(product.name)
    expect(productItemWrapper.props().price).toEqual(product.price)
    expect(productItemWrapper.props().image).toEqual(product.image)
    expect(productItemWrapper.props().slug).toEqual(product.slug)
  })
})

describe('#productListContainer | 400', () => {
  let wrapper
  beforeAll((done) => {
    moxios.install()
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: ''
      })
      .then(() => {
        wrapper.update()
        done()
      })
    })
    window.alert = jest.fn()
    wrapper = mount(<ProductListContainer location={{ search: `` }}/>)
  })
  afterAll(() => {
    moxios.uninstall()
  })
  it('should call alert', () => {
    expect(window.alert).toHaveBeenCalledWith('Cannot load data')
    expect(wrapper.find(ProductList).find(ProductItem).length).toBe(0)
    expect(wrapper.find(Pagination).length).toBe(0)
  })
})
