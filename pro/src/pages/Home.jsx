import React from 'react';
import { ArrowRight, Code2, Smartphone, ServerIcon, Globe2, MessagesSquare, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-600" />,
      title: "Web Development",
      description: "Crafting sophisticated web applications using ReactJS and AngularJS, delivering seamless user experiences with cutting-edge technology."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Mobile Solutions",
      description: "Innovative cross-platform mobile applications powered by Flutter, ensuring native performance and stunning design across Android and iOS."
    },
    {
      icon: <ServerIcon className="h-8 w-8 text-purple-600" />,
      title: "Backend Engineering",
      description: "Robust, scalable backend architectures using Node.js and Express.js, providing secure and high-performance server-side solutions."
    },
    {
      icon: <Globe2 className="h-8 w-8 text-indigo-600" />,
      title: "Enterprise Web Solutions",
      description: "Powerful .NET framework applications designed for complex business ecosystems, combining reliability with advanced functionality."
    },
    {
      icon: <Code2 className="h-8 w-8 text-orange-600" />,
      title: "Custom Web Development",
      description: "Precision-engineered websites using pure HTML, CSS, and JavaScript, optimized for maximum performance and search engine visibility."
    },
    {
      icon: <MessagesSquare className="h-8 w-8 text-teal-600" />,
      title: "Comprehensive Support",
      description: "Continuous maintenance and strategic support ensuring your digital solutions remain cutting-edge, efficient, and future-ready."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-24 bg-gradient-to-b from-blue-50 to-blue-100"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-8 text-center">
            <Sparkles className="h-16 w-16 text-blue-600 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Transforming <span className="text-blue-600">Digital Visions</span> into Reality
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-gray-700 leading-relaxed">
              We are a dynamic technology partner dedicated to delivering innovative software solutions that drive business growth, leverage cutting-edge technologies, and create meaningful digital experiences.
            </p>
            <div className="flex gap-6 mt-10">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 text-lg transition-colors duration-300">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="w-full py-20 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Technology Spectrum</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive, end-to-end software solutions tailored to transform your digital strategy and accelerate business innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className="bg-gray-50 p-4 rounded-full w-fit mb-5">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full py-24 bg-gradient-to-b from-blue-50 to-purple-50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Let's Build Your Digital Future
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            Unlock your potential with our expert development team. From concept to deployment, we transform your innovative ideas into powerful, scalable digital solutions.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 flex items-center text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Initiate Collaboration
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;