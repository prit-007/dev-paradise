import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from '@/pages/Services';
import ServicesHero from '@/components/heroes/ServicesHero';

describe('Services Page', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders hero heading', () => {
    render(<ServicesHero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders technology sections', () => {
    render(<Services />);
    expect(screen.getAllByText(/Angular/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ReactJS/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: /^Core$/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Flutter/i).length).toBeGreaterThan(0);
  });

  it('renders project cards', () => {
    render(<Services />);
    expect(screen.getAllByText(/Real Estate Platform/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Make My Travel/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Employee UMS/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Employee PRO/i).length).toBeGreaterThan(0);
  });

  it('renders tech stack badges', () => {
    render(<Services />);
    expect(screen.getAllByText(/Angular/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/React/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/.NET Core/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Flutter/i).length).toBeGreaterThan(0);
  });
});
