import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Thumbnail } from 'react-bootstrap'
import ProductItem from './ProductItem'
import { formatProductList } from '../../helper'
import { productListResponse } from '../../samples/product'

Enzyme.configure({ adapter: new Adapter() })

let wrapper, product

beforeEach(() => {
  product = formatProductList(productListResponse.data.items)[0]
  wrapper = shallow(<ProductItem {...product}/>)
})

it('renders without crashing', () => {
  expect(wrapper).toBeDefined()
})

it('should have product thumbnail', () => {
  expect(wrapper.find(Thumbnail).length).toEqual(1)
  expect(wrapper.find(Thumbnail).prop('href')).toEqual(product.slug)
  expect(wrapper.find(Thumbnail).prop('src')).toEqual(product.image)
})

it('should have product name', () => {
  expect(wrapper.contains(product.name)).toBeTruthy()
})

it('should have product price', () => {
  expect(wrapper.contains(product.price)).toBeTruthy()
})

it('should have product category', () => {
  expect(wrapper.contains(product.category)).toBeTruthy()
})

