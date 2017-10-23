import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Thumbnail, Row } from 'react-bootstrap'
import ProductList from './ProductList'
import ProductItem from './ProductItem'

Enzyme.configure({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
  wrapper = shallow(<ProductList/>)
})

it('renders without crashing', () => {
  expect(wrapper).toBeDefined()
})

it('should have product item', () => {
  expect(wrapper.find(Row).children().length).toEqual(1)
})
