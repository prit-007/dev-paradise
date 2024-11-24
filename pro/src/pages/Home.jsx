import React from 'react';
import { ArrowRight, Code2, Smartphone, ServerIcon, Globe2, MessagesSquare, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion'; // Assuming you have framer-motion installed

const Home = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-600" />,
      title: "Web Development",
      description: "Expert ReactJS and AngularJS development creating modern, responsive web applications with cutting-edge features and smooth user experiences."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications using Flutter technology, delivering native performance and beautiful interfaces for both Android and iOS."
    },
    {
      icon: <ServerIcon className="h-8 w-8 text-purple-600" />,
      title: "Backend Solutions",
      description: "Robust and scalable backend development using Node.js and Express.js, ensuring secure and efficient server-side operations."
    },
    {
      icon: <Globe2 className="h-8 w-8 text-indigo-600" />,
      title: ".NET Web Solutions",
      description: "Enterprise-grade web solutions using .NET framework, perfect for large-scale business applications requiring robust performance."
    },
    {
      icon: <Code2 className="h-8 w-8 text-orange-600" />,
      title: "Vanilla Web Development",
      description: "Clean and efficient websites using HTML, CSS, and JavaScript, optimized for performance and search engines."
    },
    {
      icon: <MessagesSquare className="h-8 w-8 text-teal-600" />,
      title: "Software Support",
      description: "Comprehensive support and maintenance services ensuring your applications run smoothly and stay up-to-date."
    }
  ];

  const teamMembers = [
    {
      name: "Parekh Meet",
      role: "CSS Master & Hard Worker",
      description: "Expert in creating beautiful, responsive designs and providing valuable suggestions"
    },
    {
      name: "Bhargav Bhagiya",
      role: "Master of DataBase",
      description: "Expert in the DataBase facility and providing valuable suggestions"
    },
    {
      name: "Vivek Khunt",
      role: "Swift Express Creator",
      description: "Versatile developer skilled in tackling any development challenge"
    },
    {
      name: "Rajvi Adesara",
      role: "Team Lead & Critical Thinker",
      description: "Natural leader with exceptional organizational and problem-solving skills"
    },
    {
      name: "Nilay Dhandhukiya",
      role: "Deep Expert Researcher",
      description: "Quick learner with expertise in multiple technologies"
    },
    {
      name: "Prit Vasani",
      role: "Co-founder & Human Debugger",
      description: "Problem-solving expert with mastery across various technologies"
    },
    {
      name: "Samarth Mehta",
      role: "Content Specialist",
      description: "Skilled content writer and strategic executor"
    }
  ];

  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-20 bg-gradient-to-b from-blue-50 to-blue-100"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6 text-center">
            <Sparkles className="h-12 w-12 text-blue-600 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Welcome to <span className="text-blue-600">Developer's Paradise</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-600">
              We are a team of passionate developers creating tomorrow's digital solutions with today's cutting-edge technologies.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
                View Our Work
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gray-50 p-3 rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-gradient-to-b from-purple-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A group of passionate developers dedicated to creating exceptional software solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
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
        className="w-full py-20 bg-gradient-to-b from-blue-50 to-purple-50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's turn your ideas into reality with our expertise in modern technologies
          </p>
          <div className="justify-items-end">

            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center ">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
