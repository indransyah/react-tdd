import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Thumbnail, Row, Image } from 'react-bootstrap'
import ProductImage from './productImage'
import { formatProductDetail } from '../../helper'
import { productDetailResponse } from '../../samples/product'

Enzyme.configure({ adapter: new Adapter() })

let wrapper, product

beforeEach(() => {
  product = formatProductDetail(productDetailResponse.data.product)
  wrapper = shallow(<ProductImage images={product.images}/>)
})

it('renders without crashing', () => {
  expect(wrapper).toBeDefined()
})

it('renders without images data', () => {
  expect(shallow(<ProductImage images={[]}/>)).toBeDefined()
})

it('should have main image', () => {
  expect(wrapper.find('#preview').length).toBe(1)
  expect(wrapper.find('#preview').prop('src')).toBe(product.images[0].path)
  expect(wrapper.find('#preview').prop('alt')).toBe(product.images[0].name)
})

it('should have thumbnail images', () => {
  expect(wrapper.find(Row).children().length).toBe(product.images.length)
  expect(wrapper.find(Row).find(Image).first().props().src).toBe(product.images[0].path)
  expect(wrapper.find(Row).find(Image).last().props().src).toBe(product.images[product.images.length - 1].path)
})
