import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a data-testid="footer-link" href={to}>
      {children}
    </a>
  ),
}));

describe('Footer Component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders company name', () => {
    render(<Footer />);
    expect(screen.getAllByText(/Developer's Paradise/i).length).toBeGreaterThan(0);
  });

  it('renders contact email', () => {
    render(<Footer />);
    expect(screen.getByText(/tech.developersteam.service@gmail.com/i)).toBeInTheDocument();
  });

  it('renders quick links', () => {
    render(<Footer />);
    expect(screen.getAllByText(/Home/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/About Us/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Services/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contact Us/i).length).toBeGreaterThan(0);
  });

  it('renders team members', () => {
    render(<Footer />);
    expect(screen.getByText(/Parekh Meet/i)).toBeInTheDocument();
    expect(screen.getByText(/Vivek Khunt/i)).toBeInTheDocument();
    expect(screen.getByText(/Rajvi Adesara/i)).toBeInTheDocument();
    expect(screen.getByText(/Nilay Dhandhukiya/i)).toBeInTheDocument();
    expect(screen.getByText(/Prit Vasani/i)).toBeInTheDocument();
    expect(screen.getByText(/Samarth Mehta/i)).toBeInTheDocument();
  });

  it('renders copyright with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });
});
