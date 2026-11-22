// components/SEO.jsx
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';

const DEFAULT_TITLE = "Developer's Paradise | Full-Stack, Mobile & AI Engineering Studio";
const DEFAULT_DESC = "Developer's Paradise — an elite collective of software engineers crafting high-performance digital architectures, mobile experiences, and scalable cloud solutions from Darshan University, Rajkot.";
const DEFAULT_KEYWORDS = "Developer's Paradise, software engineering, React, Angular, Flutter, .NET Core, cloud architecture, AI solutions, web development Rajkot, mobile apps";
const DEFAULT_OG_IMAGE = "https://images.unsplash.com/photo-1550745165-9bc0b25e7256?w=1200&q=80";

// Safe hook that returns a default location when used outside a Router context (e.g., in tests)
const useSafeLocation = () => {
  try {
    return useLocation();
  } catch {
    return { pathname: '/', search: '', hash: '', state: null, key: 'default' };
  }
};

// Safe hook that returns default search params when used outside a Router context
const useSafeSearchParams = () => {
  try {
    return useSearchParams();
  } catch {
    return [new URLSearchParams(), () => {}];
  }
};

// Safe hook that returns a no-op navigate when used outside a Router context
const useSafeNavigate = () => {
  try {
    return useNavigate();
  } catch {
    return () => {};
  }
};

const setMetaTag = (attrName, attrValue, content) => {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setLinkTag = (rel, href) => {
  if (!href) return;
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const SEO = ({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  canonical,
  noIndex = false
}) => {
  const location = useSafeLocation();
  const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : '';
  const resolvedCanonical = canonical || currentUrl;
  const fullTitle = title ? `${title} · Developer's Paradise` : DEFAULT_TITLE;

  useEffect(() => {
    // 1. Page Title
    document.title = fullTitle;

    // 2. Standard Meta
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    if (noIndex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      setMetaTag('name', 'robots', 'index, follow');
    }

    // 3. Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', resolvedCanonical);
    setMetaTag('property', 'og:site_name', "Developer's Paradise");

    // 4. Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    setLinkTag('canonical', resolvedCanonical);
  }, [fullTitle, description, keywords, ogImage, ogType, resolvedCanonical, noIndex]);

  return null;
};

export default SEO;
export { useSafeLocation, useSafeSearchParams, useSafeNavigate };

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  canonical: PropTypes.string,
  noIndex: PropTypes.bool,
};
