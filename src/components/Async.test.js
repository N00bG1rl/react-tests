import { render, screen } from '@testing-library/react'
import Async from './Async'

describe('Async comonent', () => {
  test('renders posts if request succeeds', async () => {
    // Override fetch func with dummy fetch
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    })
    render(<Async />)

    const listItemElem = await screen.findAllByRole('listitem')
    expect(listItemElem).not.toHaveLength(0)
  })
})
