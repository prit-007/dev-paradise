import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '@/pages/Contact';

describe('Contact Page', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders contact form with all fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty form', () => {
    render(<Contact />);
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    expect(screen.getByText('Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
    expect(screen.getByText('Message is required.')).toBeInTheDocument();
  });

  it('shows error for invalid email', () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'not-an-email' } });
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    expect(screen.getByText(/valid email address/)).toBeInTheDocument();
  });

  it('displays contact info', () => {
    render(<Contact />);
    expect(screen.getAllByText(/tech.developersteam.service@gmail.com/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/\+91 94262 84943/i).length).toBeGreaterThan(0);
  });
});
