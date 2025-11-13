import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText(/Law/i)).toBeInTheDocument()
    expect(screen.getByText(/Firm/i)).toBeInTheDocument()
  })

  it('renders navigation menu items', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Practice Areas')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Header />)
    const phoneLinks = screen.getAllByText('(315) 255-3368')
    expect(phoneLinks.length).toBeGreaterThan(0)
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Toggle menu')

    fireEvent.click(menuButton)

    // Menu items should be visible after click
    const mobileMenuItems = screen.getAllByText('Home')
    expect(mobileMenuItems.length).toBeGreaterThan(1)
  })

  it('renders consultation button', () => {
    render(<Header />)
    const buttons = screen.getAllByText('Free Consultation')
    expect(buttons.length).toBeGreaterThan(0)
  })
})
