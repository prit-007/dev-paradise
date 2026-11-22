// components/common/JsonLd.jsx
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function JsonLd({ data }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const existing = document.querySelector('script[type="application/ld+json"]');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => script.remove();
  }, [data]);
  return null;
}

JsonLd.propTypes = {
  data: PropTypes.any.isRequired,
};
