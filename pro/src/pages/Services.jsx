import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  FaAngular, FaReact, FaNodeJs, FaDatabase,
  FaHome, FaTshirt, FaLeaf, FaPlane,
  FaFilm, FaSearch, FaBuilding, FaMobile
} from 'react-icons/fa';
import {
  SiDotnet, SiFirebase, SiMongodb,
  SiMaterialdesign, SiBootstrap, SiExpress,
  SiFlutter, SiTypescript
} from 'react-icons/si';

// Add this new component for project cards
const ProjectCard = ({ project, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`bg-gradient-to-br ${color} rounded-xl shadow-lg overflow-hidden`}
    >
      <div className="p-6">
        {/* Project Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 bg-white rounded-lg shadow-md`}>
            {project.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-3">Built With:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1 px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-gray-700">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const technologies = [
    {
      name: "AngularJS",
      logo: <FaAngular className="text-red-600 h-16 w-16" />,
      description:
        "A powerful frontend framework by Google, perfect for building dynamic web applications with robust features and two-way data binding.",
      color: "from-red-50 to-red-100",
      projects: [
        {
          name: "Real Estate Platform",
          icon: <FaHome className="h-6 w-6 text-blue-600" />,
          description:
            "A person-to-person property marketplace eliminating middlemen. Users can list properties for rent/sale and find homes without platform fees.",
          color: "from-blue-50 to-indigo-100",
          tech: [
            { name: "Angular", icon: <FaAngular className="text-red-500" /> },
            { name: "Material UI", icon: <SiMaterialdesign className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
          ],
          features: [
            "Direct property listing",
            "User authentication",
            "Property search filters",
            "No platform fees"
          ]
        },
        {
          name: "Meet's Fashion",
          icon: <FaTshirt className="h-6 w-6 text-pink-600" />,
          description:
            "A fashion appointment booking platform allowing customers to create custom designs or choose from pre-defined styles.",
          color: "from-pink-50 to-pink-100",
          tech: [
            { name: "Angular", icon: <FaAngular className="text-red-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Express.js", icon: <SiExpress className="text-black-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
          ],
          features: [
            "Custom design creation",
            "Appointment scheduling",
            "Zoom integration",
            "WhatsApp notifications"
          ]
        },
        {
          name: "Planty",
          icon: <FaLeaf className="h-6 w-6 text-green-600" />,
          description:
            "A comprehensive plant information and e-commerce platform with plant recognition features.",
          color: "from-green-50 to-green-100",
          tech: [
            { name: "Angular", icon: <FaAngular className="text-red-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Express.js", icon: <SiExpress className="text-black-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> }
          ],
          features: [
            "Plant recognition",
            "Care guides",
            "E-commerce integration",
            "Mobile app support"
          ]
        },
        {
          name: "Search Optimate",
          icon: <FaSearch className="h-6 w-6 text-indigo-600" />,
          description:
            "A specialized search engine for students integrating multiple AI services and search platforms.",
          color: "from-indigo-50 to-purple-100",
          tech: [
            { name: "Angular", icon: <FaAngular className="text-red-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
          ],
          features: [
            "AI integration",
            "Multi-platform search",
            "Academic focus",
            "Aggregated results"
          ]
        }
      ]
    },
    {
      name: "ReactJS",
      logo: <FaReact className="text-blue-600 h-16 w-16" />,
      description:
        "A popular JavaScript library for building user interfaces with a rich ecosystem and reusable components.",
      color: "from-blue-50 to-blue-100",
      projects: [
        {
          name: "Make My Travel",
          icon: <FaPlane className="h-6 w-6 text-purple-600" />,
          description:
            "A travel planning platform offering trip booking services and local travel guides across India.",
          color: "from-purple-50 to-indigo-100",
          tech: [
            { name: "React", icon: <FaReact className="text-blue-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Express.js", icon: <SiExpress className="text-black-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
          ],
          features: [
            "Trip booking",
            "Local guides",
            "Place recommendations",
            "Travel planning tools"
          ]
        },
        {
          name: "The Trailer Flix",
          icon: <FaFilm className="h-6 w-6 text-red-600" />,
          description:
            "A Netflix-style interface for discovering movie trailers with integrated ratings and reviews.",
          color: "from-red-50 to-red-100",
          tech: [
            { name: "React", icon: <FaReact className="text-blue-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
          ],
          features: [
            "YouTube integration",
            "IMDB ratings",
            "Rotten Tomatoes scores",
            "Personalized recommendations"
          ]
        },

      ]
    },
    {
      name: "Core",
      logo: <SiDotnet className="text-purple-600 h-16 w-16" />,
      description:
        ".NET Core is a cross-platform framework for building scalable and robust web and mobile applications.",
      color: "from-purple-50 to-indigo-100",
      projects: [
        {
          name: "Employee UMS",
          icon: <FaBuilding className="h-6 w-6 text-purple-600" />,
          description:
            "A project to manage employees with multi-company support.",
          color: "from-purple-50 to-indigo-100",
          tech: [
            { name: ".NET Core", icon: <SiDotnet className="text-purple-600" /> },
            { name: "SQL", icon: <FaDatabase className="text-blue-500" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> }
          ],
          features: [
            "Multi-company support",
            "Employee management",
            "Role-based access",
            "Performance tracking"
          ]
        }
      ]
    },
    {
      name: "Flutter",
      logo: <SiFlutter className="text-blue-400 h-16 w-16" />,
      description:
        "Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      color: "from-blue-50 to-purple-100",
      projects: [
        {
          name: "Employee PRO",
          icon: <FaMobile className="h-6 w-6 text-indigo-600" />,
          description:
            "Employee Management system app with multi-company support and best UI/UX experience.",
          color: "from-indigo-50 to-purple-100",
          tech: [
            { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
            { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> }
          ],
          features: [
            "Intuitive mobile interface",
            "Real-time updates",
            "Multi-company support",
            "Advanced reporting"
          ]
        }
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 "
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Projects & Expertise
            </h1>
            <p className="text-xl text-gray-600">
              Discover our portfolio of innovative solutions built with cutting-edge technologies
            </p>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {
            technologies.map((technology, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <div className="mb-20">
                  <div className="flex items-center justify-center mb-8">
                    {technology.logo}
                    <h2 className="text-3xl font-bold text-gray-800">{technology.name}</h2>
                  </div>
                  <p className="text-gray-600 text-center max-w-3xl mx-auto">
                    {technology.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {technology.projects.map((project, index) => (
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <ProjectCard
                      key={project.name}
                      project={project}
                      color={project.color}
                    />
                  </motion.div>
                  ))}
                </div>

              </motion.div>
            ))
          }
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's transform your ideas into reality with our expertise
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center mx-auto transition-all duration-300 hover:shadow-lg">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;