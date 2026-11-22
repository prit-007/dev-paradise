import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate, useLocation } from 'react-router-dom';
import './input.css';
import './components/heroes/hero.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

function PathHandler({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const path = params.get('path');
    if (path) {
      navigate(path, { replace: true });
    }
  }, [navigate, location]);

  return children;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <PathHandler>
        <App />
      </PathHandler>
    </ThemeProvider>
  </React.StrictMode>
);
