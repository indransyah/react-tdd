import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import axios from 'axios'
import moxios from 'moxios'
import { Pagination, PageHeader, Row } from 'react-bootstrap'
import ProductDetailContainer from './ProductDetailContainer'
import ProductImage from '../components/product/productImage'
import ProductInfo from '../components/product/productInfo'
import { formatProductDetail } from '../helper'
import { productDetailResponse } from '../samples/product'

Enzyme.configure({ adapter: new Adapter() })

describe('#productDetailContainer | 200', () => {
  let wrapper, spy
  const goBack = jest.fn()
  
  beforeAll((done) => {
    moxios.install()
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: productDetailResponse
      })
      .then(() => {
        wrapper.update()
        done()
      })
    })
    spy = jest.spyOn(ProductDetailContainer.prototype, 'componentDidMount')
    wrapper = mount(
      <ProductDetailContainer
        history={{goBack}}
        match={{params: { slug: 'test-slug' }}}
      />)
  })
  
  afterAll(() => {
    moxios.uninstall()
    spy.mockReset()
    spy.mockRestore()
  })
  
  it('renders without crashing', () => {
    expect(spy).toHaveBeenCalled()
    expect(wrapper.props().match.params.slug).toEqual('test-slug')
    expect(wrapper).toBeDefined()
    expect(wrapper.state().product).toEqual(formatProductDetail(productDetailResponse.data.product))
  })
  
  it('should have back link', () => {
    expect(wrapper.find('a').length).toBe(1)
    expect(wrapper.find('a').text()).toBe('Back')
  })
  
  it('should have product images', () => {
    expect(wrapper.find(ProductImage).length).toBe(1)
  })
  
  it('should have product info', () => {
    expect(wrapper.find(ProductInfo).length).toBe(1)
  })
  
  it('should handle back link', () => {
    const preventDefault = jest.fn()
    wrapper.find('a').simulate('click', {
      preventDefault
    })
    expect(preventDefault).toHaveBeenCalled()
    expect(goBack).toHaveBeenCalled()
  })
  
  it('should have correct product info', () => {
    const product = formatProductDetail(productDetailResponse.data.product)
    expect(wrapper.find(ProductInfo).props().name).toEqual(product.name)
    expect(wrapper.find(ProductInfo).props().price).toEqual(product.price)
    expect(wrapper.find(ProductInfo).props().brand).toEqual(product.brand)
    expect(wrapper.find(ProductInfo).props().category).toEqual(product.category)
    expect(wrapper.find(ProductInfo).props().size).toEqual(product.size)
    expect(wrapper.find(ProductInfo).props().color).toEqual(product.color)
  })
  
  it('should have correct product image', () => {
    const product = formatProductDetail(productDetailResponse.data.product)
    expect(wrapper.find(ProductImage).props().images).toEqual(product.images)
    expect(wrapper.find('img').find('#preview').props().src).toEqual(product.images[0].path)
    expect(wrapper.find(ProductImage).find(Row).find('img').length).toEqual(product.images.length)
    expect(wrapper.find(ProductImage).find(Row).find('img').last().props().src).toEqual(product.images[product.images.length - 1].path)
  })
})

describe('#productDetailContainer | 400', () => {
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
    wrapper = mount(
    <ProductDetailContainer
      match={{params: { slug: 'test-slug' }}}
      />
    )
  })
  afterAll(() => {
    moxios.uninstall()
  })
  it('should call alert', () => {
    expect(window.alert).toHaveBeenCalledWith('Cannot load data')
  })
})