import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  ArrowRight,
  Code2,
  Smartphone,
  ServerIcon,
  Globe2,
  CloudCog,
  Brain
} from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = useMemo(
    () => ["Web Development", "Mobile Solutions", "Enterprise Software", "Cloud Engineering"],
    []
  );

  const typewriterEffect = useCallback(() => {
    const currentText = rotatingTexts[currentTextIndex];
    let currentChar = 0;

    const typingInterval = setInterval(() => {
      if (currentChar <= currentText.length) {
        setDisplayText(currentText.slice(0, currentChar));
        currentChar++;
      } else {
        clearInterval(typingInterval);

        // Move to the next text after a delay
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval); // Cleanup
  }, [currentTextIndex, rotatingTexts]);

  useEffect(() => {
    const cleanup = typewriterEffect();
    return cleanup;
  }, [typewriterEffect]);

  const services = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-600" />,
      title: "Web Development",
      description:
        "We create stunning, responsive web applications using frameworks like ReactJS and Angular. Our solutions prioritize user-friendly interfaces and high performance.",
      portfolio: "#web-projects"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Mobile App Development",
      description:
        "Innovative, cross-platform mobile apps built with Flutter for Android and iOS, delivering seamless functionality and visually appealing designs.",
      portfolio: "#mobile-projects"
    },
    {
      icon: <ServerIcon className="h-8 w-8 text-purple-600" />,
      title: "Backend Development",
      description:
        "Secure and scalable server-side solutions crafted with Node.js and Express.js. We build robust backends tailored to your business needs.",
      portfolio: "#backend-projects"
    },
    {
      icon: <Globe2 className="h-8 w-8 text-indigo-600" />,
      title: "Enterprise Web Solutions",
      description:
        "Custom .NET framework applications designed to handle complex business operations. We focus on reliability, scalability, and integration.",
      portfolio: "#enterprise-projects"
    },
    {
      icon: <CloudCog className="h-8 w-8 text-teal-600" />,
      title: "Cloud Migration Services",
      description:
        "Seamless cloud transformation strategies leveraging AWS, Azure, and Google Cloud to enhance scalability, security, and operational efficiency.",
      portfolio: "#cloud-projects"
    },
    {
      icon: <Brain className="h-8 w-8 text-orange-600" />,
      title: "AI & Machine Learning",
      description:
        "Cutting-edge AI solutions that transform data into actionable insights, driving intelligent decision-making and innovative problem-solving.",
      portfolio: "#ai-projects"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-24 bg-gradient-to-b from-blue-50 to-blue-100 relative"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Empowering <span className="text-blue-600">Innovation</span> through{" "}<br/>
              <span className="text-blue-600 min-h-[1.5em] inline-block">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-gray-700 leading-relaxed">
              Welcome to Developer's Paradise — a team of tech enthusiasts delivering cutting-edge software solutions to redefine digital experiences.
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Expertise
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We offer a comprehensive suite of services to bring your digital vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group"
              >
                <div className="bg-gray-50 p-4 rounded-full w-fit mb-5">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a 
                  href={service.portfolio} 
                  className="text-blue-600 hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View Portfolio →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Let's Bring Your Ideas to Life
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            Collaborate with us to build solutions that matter. Our team is dedicated to creating high-impact, scalable, and innovative software tailored to your needs.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 flex items-center text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Work With Us
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
