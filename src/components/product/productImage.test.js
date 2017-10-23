import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Thumbnail, Row, Image } from 'react-bootstrap'
import ProductImage from './productImage'

Enzyme.configure({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
  wrapper = shallow(<ProductImage/>)
})

it('renders without crashing', () => {
  expect(wrapper).toBeDefined()
})

it('should have main image', () => {
  expect(wrapper.find('#preview').length).toBe(1)
  expect(wrapper.find('#preview').prop('src')).toBe('http://fakeimg.pl/300x400/')
})

it('should have thumbnail images', () => {
  expect(wrapper.find(Row).children().length).toBe(4)
  expect(wrapper.find(Row).find(Image).first().props().src).toBe('http://fakeimg.pl/100x150/')
  expect(wrapper.find(Row).find(Image).last().props().src).toBe('http://fakeimg.pl/100x150/')
})
