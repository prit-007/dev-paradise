import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '@/pages/About';

describe('About Page', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders hero section', () => {
    render(<About />);
    expect(screen.getByRole('heading', { level: 1, name: /Developer's Paradise/i })).toBeInTheDocument();
  });

  it('renders Who We Are section', () => {
    render(<About />);
    expect(screen.getByText(/Who We Are/i)).toBeInTheDocument();
  });

  it('renders team members', () => {
    render(<About />);
    expect(screen.getByText(/Rajvi Adesara/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Prit Vasani/i).length).toBeGreaterThan(0);
  });

  it('renders contact form', () => {
    render(<About />);
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });
});
