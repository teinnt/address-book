import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '../pages/LandingPage'

test('renders learn react link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Landing Page/i)
  expect(linkElement).toBeInTheDocument()
})
