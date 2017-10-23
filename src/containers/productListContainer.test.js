import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Pagination, PageHeader } from 'react-bootstrap'
import ProductListContainer from './ProductListContainer'
import ProductList from '../components/product/productList'
import ProductItem from '../components/product/productItem'

Enzyme.configure({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
  wrapper = shallow(<ProductListContainer/>)
})

it('renders without crashing', () => {
  expect(wrapper).toBeDefined()
})

it('should have page name', () => {
    expect(wrapper.contains('Products')).toBeTruthy()
})

it('should have product list', () => {
    expect(wrapper.find(ProductList).length).toBe(1)
})

it('should have pagination', () => {
    expect(wrapper.find(Pagination).length).toBe(1)
})
