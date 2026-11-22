import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Portfolio from '@/pages/Portfolio';
import PortfolioHero from '@/components/heroes/PortfolioHero';

describe('Portfolio Page', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders page heading', () => {
    render(<PortfolioHero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders project cards', () => {
    render(<Portfolio />);
    expect(screen.getAllByText(/Real Estate Platform/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Planty/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Employee UMS/i).length).toBeGreaterThan(0);
  });

  it('renders category filter buttons', () => {
    render(<Portfolio />);
    expect(screen.getAllByRole('button', { name: /All/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: /Web/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: /Mobile/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: /Enterprise/i }).length).toBeGreaterThan(0);
  });

  it('filters projects by category', () => {
    render(<Portfolio />);
    fireEvent.click(screen.getAllByRole('button', { name: /Mobile/i })[0]);
    expect(screen.getAllByText(/Planty/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Employee PRO/i).length).toBeGreaterThan(0);
  });

  it('toggles between grid and list view', () => {
    render(<Portfolio />);
    expect(screen.getByLabelText(/Grid view/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/List view/i)).toBeInTheDocument();
  });
});
