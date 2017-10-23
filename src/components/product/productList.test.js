import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Thumbnail, Row } from 'react-bootstrap'
import ProductList from './ProductList'
import ProductItem from './ProductItem'
import { productListResponse } from '../../samples/product'
import { formatProductList } from '../../helper'

Enzyme.configure({ adapter: new Adapter() })

let wrapper, products

beforeEach(() => {
  products = formatProductList(productListResponse.data.items)
  wrapper = shallow(<ProductList products={products}/>)
})

it('renders without crashing', () => {
  expect(wrapper).toBeDefined()
})

it('should have product item', () => {
  expect(wrapper.find(Row).children().length).toEqual(products.length)
})
