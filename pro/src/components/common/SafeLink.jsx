// components/common/SafeLink.jsx
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Renders <Link> when inside a Router context, falls back to plain <a> otherwise.
// This allows components to be tested in isolation without a Router wrapper.
const SafeLink = ({ to, children, ...props }) => {
  try {
    // useLocation() throws when outside a Router context
    useLocation();
  } catch {
    return <a href={to} {...props}>{children}</a>;
  }
  return <Link to={to} {...props}>{children}</Link>;
};

export default SafeLink;

SafeLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
