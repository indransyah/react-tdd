import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Thumbnail } from 'react-bootstrap'
import { formatProductDetail } from '../../helper'
import { productDetailResponse } from '../../samples/product'
import ProductInfo from './ProductInfo'

Enzyme.configure({ adapter: new Adapter() })

let wrapper, product

beforeEach(() => {
  product = formatProductDetail(productDetailResponse.data.product)
  wrapper = shallow(
    <ProductInfo
      name={product.name}
      price={product.price}
      brand={product.brand}
      category={product.category}
      size={product.size}
      color={product.color}
    />
  )
})

it('renders without crashing', () => {
  expect(wrapper).toBeDefined()
})

it('should have product name', () => {
  expect(wrapper.contains(product.name)).toBeTruthy()
})

it('should have product price', () => {
  expect(wrapper.contains(product.price)).toBeTruthy()
})

it('should have product brand', () => {
  expect(wrapper.contains(product.brand)).toBeTruthy()
})

it('should have product category', () => {
  expect(wrapper.contains(product.category)).toBeTruthy()
})

it('should have product size', () => {
  expect(wrapper.contains(product.size)).toBeTruthy()
})

it('should have product category', () => {
  expect(wrapper.contains(product.color)).toBeTruthy()
})

