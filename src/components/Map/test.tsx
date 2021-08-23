import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Camapuã',
      slug: 'camapua',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: 125,
        longitude: -48
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/camapuã/i))
    expect(screen.getByTitle(/são paulo/i))
  })
})
