import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/Home';

describe('Home Page', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders hero section with heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders typewriter effect text', () => {
    render(<Home />);
    expect(
      screen.getAllByText(/Web Development|Mobile Solutions|Enterprise Software|Cloud Engineering/).length
    ).toBeGreaterThan(0);
  });

  it('renders services grid', () => {
    render(<Home />);
    expect(screen.getAllByText(/Web Development/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Mobile App Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend Development/i)).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<Home />);
    expect(screen.getByRole('button', { name: /Start Your Project/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Explore Services/i })).toBeInTheDocument();
  });

  it('renders testimonials section', () => {
    render(<Home />);
    expect(screen.getByText(/Trusted by Our Clients/i)).toBeInTheDocument();
  });
});
