import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    window.history.pushState({}, '', '/');
  });

  it('renders the Layout wrapper', () => {
    render(<App />);
    expect(screen.getAllByText(/Developer's Paradise/i).length).toBeGreaterThan(0);
  });

  it('renders Home page at root path', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders About page at /about', () => {
    window.history.pushState({}, '', '/about');
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders Services page at /services', () => {
    window.history.pushState({}, '', '/services');
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders Team page at /team', () => {
    window.history.pushState({}, '', '/team');
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders Portfolio page at /portfolio', () => {
    window.history.pushState({}, '', '/portfolio');
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders Contact page at /contact', () => {
    window.history.pushState({}, '', '/contact');
    render(<App />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  });

  it('renders Testimonials page at /testimonials', () => {
    window.history.pushState({}, '', '/testimonials');
    render(<App />);
    expect(screen.getByRole('heading', { name: /What Our Clients Say/i })).toBeInTheDocument();
  });
});
