import ExamplesOfUsage from '../'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react'
import * as Gatsby from 'gatsby'

const mockStore = configureStore([])

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

useStaticQuery.mockImplementation(() => ({
  example: {
    nameWithOwner: 'gatsbyjs/gatsby',
    url: 'https://github.com/gatsbyjs/gatsby',
    anyOtherData: {
      hi: 'hola',
      owner: {
        id: 12551863,
      },
    },
  },
}))

describe('ExamplesOfUsage', () => {
  let component
  let mockedStore

  beforeEach(() => {
    mockedStore = mockStore({
      items: ['store item'],
    })

    component = render(
      <Provider store={mockedStore}>
        <ExamplesOfUsage />
      </Provider>
    )
  })

  it('renders correctly', () => {
    expect(component.baseElement).toMatchSnapshot()
  })

  it('renders example 1 with add item feature', () => {
    mockedStore.dispatch = jest.fn()
    const { getByText, getByLabelText } = component
    const button = getByText('Add Item')
    const input = getByLabelText('Add Item:')

    fireEvent.change(input, { target: { value: 'new item' } })
    fireEvent.click(button, new MouseEvent('click'))

    expect(mockedStore.dispatch).toHaveBeenCalledTimes(1)
  })

  it('renders example 3 with gatsby data', () => {
    const { getByText } = component

    getByText('Url: https://github.com/gatsbyjs/gatsby')
    getByText('NameWithOwner: gatsbyjs/gatsby')
    getByText('AnyOtherData.Hi: hola')
    getByText('AnyOtherData.Owner.id: 12551863')
  })
})
