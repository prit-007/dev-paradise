// components/layout/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  const teamMembers = [
    { name: 'Parekh Meet', role: 'CSS Master & Hard Worker' },
    { name: 'Vivek Khunt', role: 'Swift Express Creator' },
    { name: 'Rajvi Adesara', role: 'Critical Thinker & Leader' },
    { name: 'Nilay Dhandhukiya', role: 'Deep Expert Researcher' },
    { name: 'Prit Vasani', role: 'Co-founder & Human Debugger' },
    { name: 'Samarth Mehta', role: 'Expert Content Writer' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Developer's Paradise</h3>
            <p className="text-gray-300 mb-4">
              Building tomorrow's digital solutions with cutting-edge technologies.
            </p>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" strokeLinecap="round" 
                   strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:tech.developersteam.service@gmail.com" 
                 className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                tech.developersteam.service@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} 
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Team</h3>
            <div className="grid grid-cols-1 gap-2">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-sm">
                  <p className="text-blue-400 font-medium">{member.name}</p>
                  <p className="text-gray-400 text-xs">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Developer's Paradise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;