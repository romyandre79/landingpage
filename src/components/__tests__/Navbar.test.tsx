import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText(/Skyline/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText(/Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Pricing/i)).toBeInTheDocument();
    expect(screen.getByText(/Docs/i)).toBeInTheDocument();
  });

  it('renders the Get Started button', () => {
    render(<Navbar />);
    const getStartedButton = screen.getByText(/Sign up free/i);
    expect(getStartedButton).toBeInTheDocument();
  });
});
