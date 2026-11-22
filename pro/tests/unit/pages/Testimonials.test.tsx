import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Testimonials from '@/pages/Testimonials';

describe('Testimonials Page', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders page heading', () => {
    render(<Testimonials />);
    expect(screen.getByRole('heading', { name: /What Our Clients Say/i })).toBeInTheDocument();
  });

  it('renders testimonial card with quote', () => {
    render(<Testimonials />);
    expect(screen.getAllByText(/transformed our legacy system/i).length).toBeGreaterThan(0);
  });

  it('renders client name and role', () => {
    render(<Testimonials />);
    expect(screen.getAllByText(/Sarah Chen/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CTO, NexaFlow/i).length).toBeGreaterThan(0);
  });

  it('renders star ratings', () => {
    render(<Testimonials />);
    expect(screen.getAllByLabelText(/Star rating/i).length).toBeGreaterThan(0);
  });

  it('has next and previous buttons', () => {
    render(<Testimonials />);
    expect(screen.getByLabelText(/Next testimonial/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Previous testimonial/i)).toBeInTheDocument();
  });

  it('has pause button', () => {
    render(<Testimonials />);
    expect(screen.getByLabelText(/Pause testimonial rotation/i)).toBeInTheDocument();
  });
});
