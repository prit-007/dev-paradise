import '@testing-library/jest-dom';

global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
  root = null;
  rootMargin = '';
  thresholds = [];
};

// Mock matchMedia for jsdom test environment
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock requestAnimationFrame for jsdom
global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
global.cancelAnimationFrame = (id) => clearTimeout(id);

// Mock GSAP to prevent animation issues in test environment
const mockGsap = {
  from: vi.fn(),
  to: vi.fn(),
  fromTo: vi.fn(),
  killTweensOf: vi.fn(),
  registerPlugin: vi.fn(),
  defaults: vi.fn(),
  utils: {
    toArray: vi.fn((selector) => Array.from(document.querySelectorAll(selector))),
  },
  timeline: vi.fn(() => ({
    from: vi.fn(),
    to: vi.fn(),
    fromTo: vi.fn(),
  })),
};

const mockGetEase = vi.fn((name, fallback = 'power3.out') => fallback);

const mockUseGSAP = vi.fn((callback) => {
  // Run the animation setup synchronously in tests
  if (typeof callback === 'function') {
    try { callback(); } catch (e) {}
  }
});

vi.mock('@/lib/gsap', () => ({
  gsap: mockGsap,
  useGSAP: mockUseGSAP,
  getEase: mockGetEase,
  ScrollTrigger: {},
  Flip: { getState: vi.fn(() => ({})) },
  ScrollToPlugin: {},
  TextPlugin: {},
}));
