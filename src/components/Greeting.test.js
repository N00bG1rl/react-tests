import { render, screen } from '@testing-library/react'
import userEvents from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // ...

    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false })
    expect(helloWorldElement).toBeInTheDocument()
  })

  test('renders "good to see you" when button is NOT clicked', () => {
    render(<Greeting />)

    const outputElement = screen.getByText('good to see you', { exact: false })
    expect(outputElement).toBeInTheDocument()
  })

  test('renders "Bye!" when button is clicked', () => {
    render(<Greeting />)

    // Act - click the button
    const btnElem = screen.getByRole('button')
    userEvents.click(btnElem)

    const outputElement = screen.getByText('Bye!', { exact: false })
    expect(outputElement).toBeInTheDocument()
  })

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />)

    // Act - click the button
    const btnElem = screen.getByRole('button')
    userEvents.click(btnElem)

    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    })
    expect(outputElement).toBeNull()
  })
})
