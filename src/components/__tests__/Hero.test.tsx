import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByText(/Scale your business with/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the call to action button', () => {
    render(<Hero />);
    const ctaButton = screen.getByText(/Start Your Free Trial/i);
    expect(ctaButton).toBeInTheDocument();
  });

  it('renders trusted brands section', () => {
    render(<Hero />);
    expect(screen.getByText(/Trusted by industry leaders/i)).toBeInTheDocument();
    expect(screen.getByText(/TechCorp/i)).toBeInTheDocument();
  });
});
