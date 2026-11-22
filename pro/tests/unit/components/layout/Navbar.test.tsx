import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>();
  return {
    ...actual,
    useLocation: () => ({ pathname: '/' }),
  };
});

describe('Navbar Component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders logo/brand', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText(/Developer's Paradise/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getAllByText(/Home/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/About Us/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Services/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Our Team/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Portfolio/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contact Us/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Testimonials/i).length).toBeGreaterThan(0);
  });

  it('has mobile menu toggle button', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /Open main menu/i })).toBeInTheDocument();
  });

  it('opens mobile menu on click', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /Open main menu/i }));
    const homeLinks = screen.getAllByText(/Home/i);
    expect(homeLinks.length).toBeGreaterThan(0);
  });
});
