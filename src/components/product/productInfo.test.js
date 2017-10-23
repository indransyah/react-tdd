import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Thumbnail } from 'react-bootstrap'
import ProductInfo from './ProductInfo'

Enzyme.configure({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
  wrapper = shallow(<ProductInfo/>)
})

it('renders without crashing', () => {
  expect(wrapper).toBeDefined()
})

it('should have product name', () => {
  expect(wrapper.contains('Product Name')).toBeTruthy()
})

it('should have product price', () => {
  expect(wrapper.contains('Price')).toBeTruthy()
})

it('should have product brand', () => {
  expect(wrapper.contains('Brand : BrandA')).toBeTruthy()
})

it('should have product category', () => {
  expect(wrapper.contains('Category : CategoryB')).toBeTruthy()
})

it('should have product size', () => {
  expect(wrapper.contains('Size : S')).toBeTruthy()
})

it('should have product category', () => {
  expect(wrapper.contains('Color : Black')).toBeTruthy()
})

