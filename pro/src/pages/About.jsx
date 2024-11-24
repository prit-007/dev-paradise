// pages/About.jsx
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, GraduationCap, Code, Sparkles } from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: "Rajvi Adesara",
      title: "Team Lead & Strategic Director",
      description: "The elegance and grace of our group, Rajvi leads us with great wisdom and strength.",
      specialty: "Leadership & Project Management",
      color: "from-pink-100 to-purple-100"
    },
    {
      name: "Vivek Khunt",
      title: "Senior Developer & Lifetime Achiever",
      description: "The sharpest mind among us, Vivek has been recognized as the employee of a lifetime, earning accolades for his remarkable contributions.",
      specialty: "Technical Excellence",
      color: "from-blue-100 to-cyan-100"
    },
    {
      name: "Meet Parekh",
      title: "Creative Developer & Team Spirit",
      description: "The heart and soul of our group, Meet brings humor and wit, making every moment with him lively and memorable.",
      specialty: "UI/UX & Team Dynamics",
      color: "from-green-100 to-teal-100"
    },
    {
      name: "Samarth Mehta",
      title: "Communications & Strategy Lead",
      description: "The face and voice of our group, Samarth is our pen and our suggestionist, offering insights that guide us forward.",
      specialty: "Content & Strategy",
      color: "from-yellow-100 to-orange-100"
    },
    {
      name: "Nilay Dhandhukiya",
      title: "Research & Innovation Lead",
      description: "Our lightning-fast researcher, Nilay uncovers the details that keep us ahead of the curve.",
      specialty: "Research & Development",
      color: "from-purple-100 to-indigo-100"
    },
    {
      name: "Bhargav Bhagiya",
      title: "Technical Architect & Vishaarat",
      description: "The master of all trades, Bhargav's depth of knowledge and skill in every area is truly unparalleled, The 'Vishaarat' holder.",
      specialty: "Full-Stack Development",
      color: "from-red-100 to-pink-100"
    },
    {
      name: "Prit Vasani",
      title: "Co-Founder & Visionary",
      description: "The co-founder, the overconfident dreamer, and the one fortunate enough to introduce this extraordinary team.",
      specialty: "Leadership & Innovation",
      color: "from-cyan-100 to-blue-100"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 bg-gradient-to-b from-blue-50 to-purple-50"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Developer's Paradise
            </h1>
            <p className="text-xl text-blue-600 italic mb-8">
              Crafting Excellence, Delivering Perfection
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg"
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
                <p className="text-gray-700">
                  We are a dynamic group of skilled engineers studying at Darshan University, Rajkot, Gujarat, India. 
                  Our passion for technology and innovation drives us to create exceptional software solutions that make a difference.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  <p className="text-gray-700">
                    Bachelor of Technology in Computer Science and Engineering
                    <br />
                    Expected Graduation: June 2026
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-purple-600 mr-2" />
                    <h3 className="text-xl font-semibold">Expertise</h3>
                  </div>
                  <p className="text-gray-700">
                    Full-stack development from frontend to deployment, with expertise in modern technologies
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">The brilliant minds behind Developer's Paradise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-r ${member.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="bg-white bg-opacity-50 rounded-lg p-2 text-sm text-center">
                  <span className="font-medium text-gray-700">Specialty:</span> {member.specialty}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">Gift City, Gandhinagar, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">+91 94262 84943</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">tech.developersteam.service@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Growth */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl mx-auto"
          >
            <Sparkles className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Growing Stronger</h2>
            <p className="text-gray-600">
              We're excited to announce that new talented members will soon be joining our team, 
              bringing fresh perspectives and additional expertise to Developer's Paradise.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About