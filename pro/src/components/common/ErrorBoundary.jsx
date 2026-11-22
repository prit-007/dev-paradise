// components/common/ErrorBoundary.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    this.handleReload = this.handleReload.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload() {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FDF2F8] flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-pink-200 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-pink-100 text-[#EC4899] flex items-center justify-center mb-5">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h2 className="font-heading font-black text-2xl text-slate-900 mb-2">
              Something went wrong
            </h2>
            <p className="font-sans text-sm text-slate-600 mb-6">
              An unexpected error occurred during rendering. We have preserved your session.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0891B2] hover:bg-[#0E7490] text-white font-heading font-semibold text-sm shadow-md transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
