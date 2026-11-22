// App.jsx
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import TeamProfile from './pages/TeamProfile';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Home from './pages/Home';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';

function PathHandler({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const path = params.get('path');
    if (path) {
      const cleanPath = path + window.location.hash;
      navigate(cleanPath, { replace: true });
      window.history.replaceState({}, '', cleanPath);
    }
  }, [navigate, location]);

  return children;
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <PathHandler>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="team" element={<Team />} />
              <Route path="team/:slug" element={<TeamProfile />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="portfolio/:id" element={<ProjectDetail />} />
              <Route path="contact" element={<Contact />} />
              <Route path="testimonials" element={<Testimonials />} />
              {/* 404 page */}
              <Route
                path="*"
                element={
                  <div className="text-center py-24 bg-[#FDF2F8] dark:bg-slate-950 min-h-[60vh] flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-heading font-black text-slate-900 dark:text-white mb-3">Page Not Found</h2>
                    <p className="font-sans text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                      The requested page could not be located in our production directory.
                    </p>
                    <a
                      href="/"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0891B2] hover:bg-[#0E7490] text-white font-heading font-semibold text-sm shadow-md transition-all cursor-pointer"
                    >
                      Back to Home
                    </a>
                  </div>
                }
              />
            </Route>
          </Routes>
        </PathHandler>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
