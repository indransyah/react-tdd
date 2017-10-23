import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Pagination, PageHeader } from 'react-bootstrap'
import ProductDetailContainer from './ProductDetailContainer'
import ProductImage from '../components/product/productImage'
import ProductInfo from '../components/product/productInfo'

Enzyme.configure({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
  wrapper = mount(<ProductDetailContainer/>)
})

it('renders without crashing', () => {
  expect(wrapper).toBeDefined()
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
