import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'AI/ML Software Engineer Intern',
    company: 'InterAgency Inc.',
    location: 'Washington, DC',
    duration: 'Aug 2025 - Dec 2025',
    logo: 'IA',
    bullets: [
      'Architected and deployed AI-powered chatbot using RAG architecture with Claude API, ChromaDB, and AWS ECS Fargate processing 500+ daily queries with 77-80% accuracy',
      'Built full-stack application with React frontend and Python FastAPI backend; implemented infrastructure-as-code using CloudFormation for automated provisioning',
      'Designed object-oriented system with multi-threaded architecture; performed code reviews and debugging achieving 99.5% uptime in production environment',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Claude API', 'AWS (ECS, Fargate, RDS, S3)', 'Docker', 'ChromaDB', 'Auth0', 'Stripe'],
  },
  {
    role: 'Full-Stack Software Engineer Intern',
    company: 'InterAgency Inc.',
    location: 'Washington, DC',
    duration: 'Jun 2025 - Aug 2025',
    logo: 'IA',
    bullets: [
      'Developed internal automation platform using React, Node.js, and TypeScript; built REST APIs and CI/CD pipelines achieving 85% user adoption and 60% efficiency improvement',
      'Optimized PostgreSQL database queries improving performance by 30%; deployed on AWS with Docker containers ensuring 99.9% uptime',
      'Collaborated in Agile environment with sprint planning and code reviews; wrote technical documentation and participated in requirements analysis',
    ],
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS (EC2, S3)', 'Docker', 'GitHub Actions'],
  },
  {
    role: 'Network Engineer',
    company: 'NTT Ltd.',
    location: 'Bangalore, India',
    duration: 'Aug 2022 - Aug 2024',
    logo: 'NT',
    bullets: [
      'Supported production systems for 500+ enterprise clients; troubleshot complex networking issues achieving 95% first-call resolution through systematic debugging',
      'Automated monitoring workflows using Python scripting; reduced manual intervention by 60% and improved system reliability',
      'Collaborated with international teams across time zones; mentored junior engineers on best practices and conducted technical training sessions',
    ],
    tech: ['Python', 'TCP/IP', 'DNS', 'VPN', 'Network Monitoring Tools'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] inline-block">
            Experience
            <motion.span
              className="block h-1 bg-[#2C3E50] rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{ backgroundColor: '#2C3E50' }}
          />

          <div className="space-y-10 md:space-y-14">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={exp.role + exp.company + index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-0 gap-8 items-start"
                >
                  {/* Card - left column when isLeft, right column when !isLeft */}
                  <div
                    className={`${isLeft ? 'md:pr-8' : 'md:pl-8 md:col-start-3'}`}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="p-5 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-transparent hover:border-[#2C3E50]/20"
                    >
                      {/* Logo and header */}
                      <div className="flex gap-4 items-start mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2C3E50] flex items-center justify-center text-white font-bold text-sm">
                          {exp.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#2C3E50]">{exp.role}</h3>
                          <p className="font-semibold text-[#000000]">{exp.company}</p>
                          <p className="text-sm text-gray-600">{exp.location}</p>
                          <p className="text-sm text-gray-500">{exp.duration}</p>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((bullet) => (
                          <li key={bullet} className="text-sm text-[#000000] leading-relaxed flex gap-2">
                            <span className="text-[#2C3E50] flex-shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full bg-[#F8F9FA] text-[#2C3E50] text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot with pulse - center column */}
                  <div className="hidden md:flex items-center justify-center col-start-2 row-start-1 z-10 py-4">
                    <div className="relative flex items-center justify-center w-6 h-6">
                      <motion.div
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-6 h-6 rounded-full bg-[#2C3E50]/30"
                      />
                      <div
                        className="relative w-4 h-4 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: '#2C3E50' }}
                      />
                    </div>
                  </div>

                  {/* Empty spacer on opposite side */}
                  <div className="hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
