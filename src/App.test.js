import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders without c', () => {
  render(<App />)
  const linkElement = screen.getByText(/Learning by course!/i)
  expect(linkElement).toBeInTheDocument()
})
