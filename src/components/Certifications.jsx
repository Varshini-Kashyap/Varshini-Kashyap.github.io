import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { FaTrophy, FaUsers } from 'react-icons/fa'

const certifications = [
  {
    name: 'NVIDIA Certified Generative AI and LLMs',
    issuer: 'NVIDIA',
    date: '2025',
  },
  {
    name: 'AWS Security Best Practices',
    issuer: 'Amazon Web Services',
    date: '2025',
  },
  {
    name: 'Cisco Certified DevNet Associate',
    issuer: 'Cisco',
    date: '2023',
  },
  {
    name: 'Cisco Certified Specialist - Security Core',
    issuer: 'Cisco',
    date: '2023',
  },
]

function sortByDate(items) {
  return [...items].sort((a, b) => parseInt(b.date) - parseInt(a.date))
}

const hackathons = [
  {
    name: 'HCLTech Java Developer Hackathon 2026',
    description: 'Built an event-driven microservices platform using Java, Spring Boot, Kafka, MongoDB, Kubernetes, and Docker',
    date: '2026',
  },
  {
    name: 'HackFax x PatriotHacks 2026',
    description: 'Shipped ConnectEd, an AI mentor-matching platform, in 24 hours using React, FastAPI, and Groq LLM',
    date: '2026',
  },
  {
    name: 'NVIDIA Hackathon',
    description: 'Architected Aura, a CUDA-powered mental health chatbot using the NVIDIA NIM toolkit',
    date: '2025',
  },
]

const leadership = [
  {
    name: 'Mentor, reNOVAte Create-a-thon',
    description: 'Mentored student builders at Northern Virginia Community College Manassas Create-a-thon (April 2026)',
    date: '2026',
  },
  {
    name: 'Mason Autism Support Initiative (MASI), GMU',
    description: "Deliver technical workshops and peer mentoring in assistive technology through GMU's Office of Disability Services",
    date: '2025 - Present',
  },
]

function SubsectionCards({ items, icon: Icon }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {sortByDate(items).map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          whileHover={{ scale: 1.02 }}
          className="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-[#2C3E50] shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2C3E50] flex items-center justify-center">
            <Icon className="text-white text-xl" />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-[#2C3E50]">{item.name}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-xs text-gray-500 mt-0.5">{item.date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] inline-block">
            Certifications
            <motion.span
              className="block h-1 bg-[#2C3E50] rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            {sortByDate(certifications).map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-[#2C3E50] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2C3E50] flex items-center justify-center">
                  <HiAcademicCap className="text-white text-xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-[#2C3E50]">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-[#2C3E50] mb-6">Hackathons</h3>
          <SubsectionCards items={hackathons} icon={FaTrophy} />
        </motion.div>

        {/* Leadership & Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-[#2C3E50] mb-6">Leadership &amp; Community</h3>
          <SubsectionCards items={leadership} icon={FaUsers} />
        </motion.div>
      </div>
    </section>
  )
}
