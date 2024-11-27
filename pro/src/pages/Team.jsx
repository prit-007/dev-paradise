import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaDownload,
  FaProjectDiagram,
  FaCertificate,
  FaTimes
} from 'react-icons/fa';
// Team Quotes
const TEAM_QUOTES = [
  {
    quote: "Individually brilliant, collectively unstoppable.",
    author: "Anonymous"
  },
  {
    quote: "Great things are never done by one person. They're done by a team of passionate individuals.",
    author: "Steve Jobs"
  },
  {
    quote: "Teamwork makes the dream work.",
    author: "Unknown"
  }
];
const teamMembers = [
  {
    name: "Rajvi Adesara",
    title: "Team Lead & Strategic Director",
    description: "The elegance and grace of our group, Rajvi leads us with great wisdom and strength.",
    specialty: "Leadership & Project Management",
    color: "from-pink-100 to-purple-100",
    bio: "Rajvi has over 5 years of experience in leading cross-functional teams to success. With her strategic mindset, she has directed numerous high-stakes projects.",
    joiningDate: "January 1, 2019",
    experience: "5 years",
    contact: "rajvi.adesara@company.com",
    projects: ["Project Alpha", "Project Beta", "Project Gamma"],
    certificates: ["Certified Project Manager", "Scrum Master"],
    resume: "/path/to/rajvi-resume.pdf",
    birthDate: "April 15, 1993",
    avatar: "images/Rajvi_Adesara_Avatar.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/rajvi-adesara",
      github: "https://github.com/rajviadesara",
      instagram: "https://instagram.com/rajvi_leads",
      email: "rajvi.adesara@company.com"
    }
  },
  {
    name: "Vivek Khunt",
    title: "Senior Developer & Lifetime Achiever",
    description: "The sharpest mind among us, Vivek has been recognized as the employee of a lifetime, earning accolades for his remarkable contributions.",
    specialty: "Technical Excellence",
    color: "from-blue-100 to-cyan-100",
    bio: "Vivek has more than 8 years of experience in full-stack development, with expertise in building scalable, high-performance applications.",
    joiningDate: "March 15, 2015",
    experience: "8 years",
    contact: "vivek.khunt@company.com",
    projects: ["Project Zeta", "Project Delta", "Project Sigma"],
    certificates: ["Certified Software Engineer", "AWS Certified Developer"],
    resume: "/path/to/vivek-resume.pdf",
    birthDate: "December 5, 1990",
    avatar: "images/Vivek_Khunt_Avatar.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/vivek-khunt",
      github: "https://github.com/vivek-khunt",
      instagram: "https://instagram.com/vivek_tech",
      email: "vivek.khunt@company.com"
    }
  },
  {
    name: "Meet Parekh",
    title: "Creative Developer & Team Spirit",
    description: "The heart and soul of our group, Meet brings humor and wit, making every moment with him lively and memorable.",
    specialty: "UI/UX & Team Dynamics",
    color: "from-green-100 to-teal-100",
    bio: "Meet brings 6 years of experience in UI/UX design, crafting delightful experiences with a strong focus on user-centric solutions.",
    joiningDate: "July 1, 2017",
    experience: "6 years",
    contact: "meet.parekh@company.com",
    projects: ["Project Omega", "Project Kappa", "Project Epsilon"],
    certificates: ["UI/UX Designer Certified", "Figma Expert"],
    resume: "/path/to/meet-resume.pdf",
    birthDate: "October 12, 1994",
    avatar: "images/Meet_Parekh_Avatar.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/meet-parekh",
      github: "https://github.com/meetparekh",
      instagram: "https://instagram.com/meet_the_designs",
      email: "meet.parekh@company.com"
    }
  },
  {
    name: "Samarth Mehta",
    title: "Communications & Strategy Lead",
    description: "The face and voice of our group, Samarth is our pen and our suggestionist, offering insights that guide us forward.",
    specialty: "Content & Strategy",
    color: "from-yellow-100 to-orange-100",
    bio: "With a background in marketing and communications, Samarth has been leading content strategy and creating engaging narratives for 7 years.",
    joiningDate: "May 10, 2016",
    experience: "7 years",
    contact: "samarth.mehta@company.com",
    projects: ["Project Theta", "Project Zeta", "Project Mu"],
    certificates: ["Content Marketing Specialist", "Certified SEO Expert"],
    resume: "/path/to/samarth-resume.pdf",
    birthDate: "February 20, 1992",
    avatar: "images/Samarth_Mehta_Avatar.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/samarth-mehta",
      github: "https://github.com/samarthmehta",
      instagram: "https://instagram.com/samarth_speaks",
      email: "samarth.mehta@company.com"
    }
  },
  {
    name: "Nilay Dhandhukiya",
    title: "Research & Innovation Lead",
    description: "Our lightning-fast researcher, Nilay uncovers the details that keep us ahead of the curve.",
    specialty: "Research & Development",
    color: "from-purple-100 to-indigo-100",
    bio: "Nilay has 4 years of experience in leading research and innovation projects, developing cutting-edge solutions in technology and business.",
    joiningDate: "June 25, 2018",
    experience: "4 years",
    contact: "nilay.dhandhukiya@company.com",
    projects: ["Project Iota", "Project Lambda", "Project Gamma"],
    certificates: ["Certified Data Scientist", "Innovation Expert"],
    resume: "/path/to/nilay-resume.pdf",
    birthDate: "August 8, 1996",
    avatar: "images/Nilay_Dhandhukiya_Avatar.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/nilay-dhandhukiya",
      github: "https://github.com/nilaydh",
      instagram: "https://instagram.com/nilay_researcher",
      email: "nilay.dhandhukiya@company.com"
    }
  },
  {
    name: "Bhargav Bhagiya",
    title: "Technical Architect & Vishaarat",
    description: "The master of all trades, Bhargav's depth of knowledge and skill in every area is truly unparalleled, The 'Vishaarat' holder.",
    specialty: "Full-Stack Development",
    color: "from-red-100 to-pink-100",
    bio: "Bhargav, with over 9 years of experience, is a full-stack development guru and technical architect who crafts robust, scalable systems.",
    joiningDate: "August 30, 2014",
    experience: "9 years",
    contact: "bhargav.bhagiya@company.com",
    projects: ["Project Alpha", "Project Zeta", "Project Theta"],
    certificates: ["Certified Full-Stack Developer", "AWS Certified Solutions Architect"],
    resume: "/path/to/bhargav-resume.pdf",
    birthDate: "November 10, 1990",
    avatar: "images/Bhargav_Bhagiya_Avatar.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/bhargav-bhagiya",
      github: "https://github.com/bhargavbhagiya",
      instagram: "https://instagram.com/bhargav_tech",
      email: "bhargav.bhagiya@company.com"
    }
  },
  {
    name: "Prit Vasani",
    title: "Co-Founder & Visionary",
    description: "The co-founder, the overconfident dreamer, and the one fortunate enough to introduce this extraordinary team.",
    specialty: "Leadership & Innovation",
    color: "from-cyan-100 to-blue-100",
    bio: "With a vision for innovative tech, Prit co-founded the company and has been driving growth through strategic leadership for 6 years.",
    joiningDate: "January 10, 2017",
    experience: "6 years",
    contact: "prit.vasani@company.com",
    projects: ["Project Alpha", "Project Epsilon", "Project Kappa"],
    certificates: ["Certified Innovator", "Leadership Excellence Program"],
    resume: "/path/to/prit-resume.pdf",
    birthDate: "March 17, 1995",
    avatar: "images/Prit_Vasani_Avatar.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/prit-vasani",
      github: "https://github.com/pritvasani",
      instagram: "https://instagram.com/prit_visionary",
      email: "prit.vasani@company.com"
    }
  }
];

const TeamMemberCard = ({ member, onOpen }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative w-80 h-[450px] m-4 p-6 
        bg-gradient-to-br ${member.color} 
        rounded-3xl shadow-lg cursor-pointer 
        flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        hover:rotate-1
      `}
      onClick={() => onOpen(member)}
    >
      <motion.div 
        className="absolute top-4 right-4 opacity-50"
        whileHover={{ scale: 1.2 }}
      >
        <FaProjectDiagram className="text-2xl" />
      </motion.div>
      
      <motion.img 
        src={member.avatar}
        alt={member.name}
        className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg border-4 border-white"
        whileHover={{ rotate: 5 }}
      />
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
        {member.name}
      </h2>
      <p className="text-gray-600 text-center text-lg">
        {member.title}
      </p>
    </motion.div>
  );
};

const MemberDetailModal = ({ member, onClose }) => {
  const modalRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 "
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className={`
          relative 
          w-full 
          max-w-5xl 
          max-h-[90vh] 
          rounded-3xl 
          overflow-hidden
          overflow-y-auto
          shadow-2xl
          grid 
          lg:grid-cols-3
          bg-gradient-to-br ${member.color}
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`
            absolute 
            top-4 
            right-4 
            z-10 
            w-10 
            h-10 
            bg-red-50 
            text-red-500 
            rounded-full 
            flex 
            items-center 
            justify-center
            hover:bg-red-100
            transition-all
          `}
          aria-label="Close Modal"
        >
          <FaTimes />
        </button>

        {/* Left Side - Profile Image */}
        <div className="lg:col-span-1 bg-black bg-opacity-10">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="overflow-y-auto lg:col-span-2 p-8 styled-scrollbar bg-white bg-opacity-90">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {member.name}
              </h1>
              <p className="text-2xl text-gray-600">{member.title}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center">
                <FaProjectDiagram className="mr-3 text-blue-500" />
                About
              </h3>
              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
            </div>

            {/* Professional Details */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaCertificate className="mr-3 text-green-500" /> Professional Details
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                  <strong>Joining Date:</strong> {member.joiningDate}
                </div>
                <div>
                  <strong>Experience:</strong> {member.experience}
                </div>
                <div>
                  <strong>Contact:</strong> {member.contact}
                </div>
                <div>
                  <strong>Birth Date:</strong> {member.birthDate}
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Projects</h3>
              <ul className="space-y-2">
                {member.projects.map((project, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg"
                  >
                    {project}
                  </li>
                ))}
              </ul>
            </section>

            {/* Certificates */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Certificates</h3>
              <ul className="space-y-2">
                {member.certificates.map((certificate, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg"
                  >
                    {certificate}
                  </li>
                ))}
              </ul>
            </section>

            {/* Resume Download */}
            <section>
              <a
                href={member.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                flex items-center 
                bg-blue-50 text-blue-600 
                px-4 py-2 rounded-lg 
                hover:bg-blue-100 
                transition-all
              `}
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </section>

            {/* Social Links */}
            <section>
              <div className="flex space-x-6 justify-center">
                {Object.entries(member.socialLinks || {}).map(([platform, link]) => {
                  const IconMap = {
                    linkedin: FaLinkedin,
                    github: FaGithub,
                    instagram: FaInstagram,
                    email: FaEnvelope
                  };

                  const Icon = IconMap[platform];

                  return (
                    <motion.a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-4xl text-gray-600 hover:text-blue-600"
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const cycleQuote = () => {
    setCurrentQuoteIndex((prev) => 
      (prev + 1) % TEAM_QUOTES.length
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-16 px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Our Extraordinary Team
        </h1>

        {/* Team Quote Section */}
        <motion.div 
          key={currentQuoteIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center max-w-2xl mx-auto mb-16"
          onClick={cycleQuote}
        >
          <blockquote className="text-2xl italic text-gray-600 mb-4">
            "{TEAM_QUOTES[currentQuoteIndex].quote}"
          </blockquote>
          <p className="text-lg text-gray-500">
            - {TEAM_QUOTES[currentQuoteIndex].author}
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
          {teamMembers.map(member => (
            <div key={member.name} className="flex justify-center">
              <TeamMemberCard 
                member={member} 
                onOpen={setSelectedMember} 
              />
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMember && (
            <MemberDetailModal 
              member={selectedMember}
              onClose={() => setSelectedMember(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};


export default TeamPage;
