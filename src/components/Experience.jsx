import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineer Intern | AI / Backend',
    company: 'InterAgency Inc.',
    location: 'Washington, DC',
    duration: 'Aug 2025 - Dec 2025',
    logo: 'IA',
    bullets: [
      'Engineered an LLM evaluation pipeline benchmarking 15 models (API and locally-hosted) across 140 domain-specific questions over 2 test runs, with answers scored by industry experts to drive production model selection',
      'Architected a production RAG-based building permits chatbot using Claude Sonnet API with ChromaDB vector storage and Flask backend, serving 500+ regulatory documents across DC and Montgomery County permit databases',
      'Deployed the full system on AWS using ECS Fargate, EFS for persistent ChromaDB storage, and Application Load Balancer with automated health checks',
      'Built a real-time admin analytics dashboard surfacing query failure patterns, token usage, and model behavior, driving prompt engineering improvements in production',
    ],
    tech: ['Python', 'Flask', 'Claude API', 'ChromaDB', 'AWS (ECS Fargate, EFS, ALB, Amplify)', 'Auth0', 'Stripe'],
  },
  {
    role: 'Full-Stack Software Engineer Intern',
    company: 'InterAgency Inc.',
    location: 'Washington, DC',
    duration: 'Jun 2025 - Aug 2025',
    logo: 'IA',
    bullets: [
      'Developed a commercial proposal management platform end-to-end from Figma wireframes to AWS production deployment using React, Node.js/Express.js, and MySQL on RDS',
      'Integrated Auth0 for role-based access control, Stripe for payment processing, AWS S3 for document storage, and Microsoft Graph API through Azure AD for direct Outlook email delivery of proposal PDFs',
      'Deployed frontend on AWS Amplify, backend on Elastic Beanstalk, with CloudFront as a unified HTTPS endpoint to resolve mixed-content and CORS issues',
      'Achieved 85% user adoption in the first month with automated proposal generation, approval workflows, and status tracking across 6 agile sprints',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'AWS (RDS, S3, Amplify, Elastic Beanstalk, CloudFront)', 'Auth0', 'Stripe', 'Microsoft Graph API'],
  },
  {
    role: 'Associate Network Engineer',
    company: 'NTT Ltd.',
    location: 'Bangalore, India',
    duration: 'Aug 2022 - Aug 2024',
    logo: 'NT',
    bullets: [
      'Provided Level 1 remote technical support for Cisco security products (ASA Firewalls, NGFW FTD, ISE) across 500+ enterprise clients in banking and aviation sectors, maintaining zero missed SLA conditions',
      'Automated network configuration reporting using Python and Bash scripts on Linux servers, reducing manual audit time by 35% and improving compliance tracking across 10+ enterprise accounts',
      'Created and maintained knowledge base articles and ITSM workflows to streamline incident resolution for recurring issues across the team',
    ],
    tech: ['Python', 'Bash', 'Linux', 'Cisco ASA', 'Cisco NGFW FTD', 'Cisco ISE', 'ITSM'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Exposys Data Labs',
    location: 'India',
    duration: 'Sept 2021 - Oct 2021',
    logo: 'ED',
    bullets: [
      'Developed a language translation app using Flutter (Dart) on Android Studio, supporting translations from English to multiple languages with integrated read-aloud and voice recognition features',
      'Authored a comprehensive report documenting the app development process, contributing to the team\'s knowledge base and improving project documentation',
    ],
    tech: ['Flutter', 'Dart', 'Android Studio'],
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

          <div className="space-y-0">
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
                  style={{ marginTop: index === 0 ? 0 : '-5rem' }}
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
