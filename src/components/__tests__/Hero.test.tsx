import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByText(/Automate without/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the call to action button', () => {
    render(<Hero />);
    const ctaButton = screen.getByText(/Get started for free/i);
    expect(ctaButton).toBeInTheDocument();
  });

  it('renders trusted brands section', () => {
    render(<Hero />);
    expect(screen.getByText(/Powering workflows at/i)).toBeInTheDocument();
    expect(screen.getByText(/Discord/i)).toBeInTheDocument();
  });
});
