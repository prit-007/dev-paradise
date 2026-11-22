// components/NoResults.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { SearchX, RefreshCw } from 'lucide-react';

const NoResults = ({
  title = "No matching items found",
  message = "Try adjusting your search terms or clearing your category filters.",
  onReset
}) => {
  return (
    <div className="w-full py-16 px-6 text-center rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-pink-200/80 dark:border-slate-800 backdrop-blur-xl shadow-xs my-6">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-pink-50 dark:bg-slate-800 text-[#EC4899] flex items-center justify-center mb-4">
        <SearchX className="w-7 h-7" />
      </div>
      <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="font-sans text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
        {message}
      </p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0891B2] hover:bg-[#0E7490] text-white font-heading font-semibold text-xs shadow-xs transition-all cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      )}
    </div>
  );
};

NoResults.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onReset: PropTypes.func,
};

export default NoResults;
