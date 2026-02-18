import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'

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
          className="max-w-2xl"
        >
          <div className="space-y-4">
            {certifications.map((cert, index) => (
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
      </div>
    </section>
  )
}
