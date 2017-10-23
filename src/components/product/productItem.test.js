import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Thumbnail } from 'react-bootstrap'
import ProductItem from './ProductItem'

Enzyme.configure({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
  wrapper = shallow(<ProductItem/>)
})

it('renders without crashing', () => {
  expect(wrapper).toBeDefined()
})

it('should have product thumbnail', () => {
  expect(wrapper.find(Thumbnail).length).toEqual(1)
  expect(wrapper.find(Thumbnail).prop('href')).toEqual('/product')
  expect(wrapper.find(Thumbnail).prop('src')).toEqual('http://fakeimg.pl/254x350/')
})

it('should have product name', () => {
  expect(wrapper.contains('Product Name')).toBeTruthy()
})

it('should have product price', () => {
  expect(wrapper.contains('Price')).toBeTruthy()
})

it('should have product category', () => {
  expect(wrapper.contains('Category')).toBeTruthy()
})

