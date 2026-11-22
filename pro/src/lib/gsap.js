import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { CustomEase } from 'gsap/CustomEase';

// Ensure window.matchMedia exists in test / virtual DOM environments
if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// Register all core and plugin extensions
gsap.registerPlugin(useGSAP, ScrollTrigger, Flip, ScrollToPlugin, TextPlugin, CustomEase);

// Apple-style custom deceleration and tactile physics curves with verified registration
let hasCustomEase = false;
try {
  CustomEase.create('appleEase', '0.16, 1, 0.3, 1'); // Signature Apple silky deceleration
  CustomEase.create('appleSmooth', '0.25, 0.1, 0.25, 1'); // Keynote slide transition
  CustomEase.create('appleBounce', '0.34, 1.4, 0.64, 1'); // Subtle tactile pill spring
  hasCustomEase = true;
} catch (e) {
  hasCustomEase = false;
}

/**
 * Returns a validated ease name or falls back to a standard GSAP easing.
 * Prevents silent failures or errors if CustomEase was not registered.
 */
export const getEase = (name, fallback = 'power3.out') => {
  if (hasCustomEase && CustomEase && typeof CustomEase.get === 'function') {
    try {
      if (CustomEase.get(name)) return name;
    } catch {
      // Fall through to fallback
    }
  }
  return fallback;
};

// Set smooth default easing and duration
gsap.defaults({
  duration: 0.7,
  ease: 'power3.out',
});

export { gsap, useGSAP, ScrollTrigger, Flip, ScrollToPlugin, TextPlugin, CustomEase };
export default gsap;
