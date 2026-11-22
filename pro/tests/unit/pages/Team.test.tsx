import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Team from '@/pages/Team';
import TeamHero from '@/components/heroes/TeamHero';

describe('Team Page', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders page heading', () => {
    render(<TeamHero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders team member cards', () => {
    render(<Team />);
    expect(screen.getByText(/Rajvi Adesara/i)).toBeInTheDocument();
    expect(screen.getByText(/Vivek Khunt/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet Parekh/i)).toBeInTheDocument();
    expect(screen.getByText(/Samarth Mehta/i)).toBeInTheDocument();
    expect(screen.getByText(/Nilay Dhandhukiya/i)).toBeInTheDocument();
    expect(screen.getByText(/Bhargav Bhagiya/i)).toBeInTheDocument();
    expect(screen.getByText(/Prit Vasani/i)).toBeInTheDocument();
  });

  it('opens member detail modal on click', () => {
    render(<Team />);
    fireEvent.click(screen.getByText(/Rajvi Adesara/i));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders team quote section', () => {
    render(<Team />);
    expect(screen.getByText(/Individually brilliant, collectively unstoppable./i)).toBeInTheDocument();
  });
});
