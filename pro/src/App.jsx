// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';

import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<Team />} />

          <Route path="contact" element={<Contact />} />
          <Route path="testimonials" element={<Testimonials />} />
          {/* Add a 404 page */}
          <Route path="*" element={
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-900">Page not found</h2>
              <p className="mt-2 text-gray-600">The page you're looking for doesn't exist.</p>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;