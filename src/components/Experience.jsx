import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineer (AI focus)',
    company: 'InterAgency Inc.',
    location: 'Washington DC, USA',
    duration: 'Aug 2025 – Dec 2025',
    logo: 'IA',
    bullets: [
      'Led a 3-engineer team through sprint-based delivery to architect a production RAG permitting assistant, Flask backend, ChromaDB vector store with 800-character semantic chunking, 150-character overlap, and 768-dimensional embeddings across 88+ DC permit documents, deployed on AWS ECS Fargate with RDS PostgreSQL, EFS persistent volume, S3, SQS async queuing, and ALB load balancing, eliminating 30-60 second cold-start delays and achieving sub-3-second query latency at launch.',
      'Designed an AI agent workflow orchestrating multi-jurisdiction query routing and intent classification across 4 DC agency databases (DOB, DDOT, DC Water, DOEE) with structured 4-part response generation, output validation logic rejecting low-confidence retrievals, and citation-backed answer enforcement, cutting average permit research time by over 90% and eliminating hallucinated permit guidance in production.',
      'Validated the system pre-launch by engineering a Python LLMOps evaluation pipeline stress-testing 15+ models (Claude Sonnet, GPT-4, Mistral, LLaMA, Gemma, Qwen, 3B to 120B parameters) across 120 domain-specific permit questions scored on 20 expert-defined metrics, achieving 78% benchmark accuracy and slashing manual evaluation effort by 60% before a single line reached production.',
      'Productized the validated assistant by layering Stripe token-based pay-per-query billing with automated invoice reconciliation, Auth0 multi-tenant authentication with API key rotation and per-tier rate limiting, and four SQLite databases powering real-time admin dashboards for API usage analytics and system health monitoring, transforming the internal tool into a billable commercial platform.',
    ],
    tech: ['Python', 'Flask', 'Claude API', 'ChromaDB', 'AWS ECS Fargate', 'RDS PostgreSQL', 'EFS', 'S3', 'SQS', 'ALB', 'Auth0', 'Stripe'],
  },
  {
    role: 'Software Engineer',
    company: 'InterAgency Inc.',
    location: 'Washington DC, USA',
    duration: 'Jun 2025 – Aug 2025',
    logo: 'IA',
    bullets: [
      'Owned full-stack development of a commercial SaaS proposal platform, personally implementing 75% of features across a React frontend, 50+ Node.js/Express REST endpoints, and a 15-table MySQL schema with connection pooling and transaction management, slashing proposal creation time by 67% (30 to 10 minutes) across 25+ employees managing 150+ annual proposals.',
      'Integrated Claude API into the platform to automate SF-330 government form completion, building a document ingestion pipeline that summarized large contract documents, autofilled 20+ form fields from extracted content, and answered consultant queries directly from source documents, reducing SF-330 preparation time from 4 hours to 1 hour per submission across 25+ employees.',
      'Architected the data foundation and deployed the full AWS infrastructure, replacing fragmented OneDrive storage with a centralized searchable system tracking 7 proposal lifecycle states, while provisioning Amplify (frontend), Elastic Beanstalk with horizontal auto-scaling (backend), Aurora RDS (database), S3, CloudFront CDN, and IAM least-privilege access controls sustaining sub-500ms API latency and 99.9% uptime under concurrent production load.',
      'Fortified the platform with Auth0 JWT authentication across a 4-tier permission model (Admin/Editor/User/Viewer) with middleware validation on every endpoint, and wired Stripe subscription billing with secure financial transaction handling, making the platform enterprise-ready for external clients.',
      'Automated the entire document delivery pipeline with programmatic PDF generation, digital signatures, Microsoft Graph API OAuth integration for Outlook draft creation, and S3-based version control, eliminating the team\'s manual OneDrive file-sharing process entirely.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'Claude API', 'AWS Amplify', 'Elastic Beanstalk', 'Aurora RDS', 'S3', 'CloudFront', 'IAM', 'Auth0', 'Stripe', 'Microsoft Graph API'],
  },
  {
    role: 'Software Automation Engineer',
    company: 'NTT Data Ltd.',
    location: 'Bengaluru, India',
    duration: 'Aug 2022 – Aug 2024',
    logo: 'NT',
    bullets: [
      'Engineered rule-based anomaly detection scripts in Python on Linux monitoring CPU utilization and device uptime across 500+ enterprise client environments, automatically restarting degraded devices when thresholds were breached on recurring weekly fault patterns, eliminating 35% of manual audit overhead and maintaining zero missed SLAs across 2 years of continuous production operations.',
      'Built a log parsing pipeline ingesting device error logs and network alerts across 500+ Cisco ASA, FTD, and ISE environments, extracting structured fault signals programmatically before manual escalation and cutting mean time to resolution by 25%.',
      'Strengthened production reliability by implementing root-cause analysis protocols and proactive failover strategies into monitoring and alerting systems, reducing system downtime by 20% and slashing production escalations from 18 to 5 per quarter while supporting 24/7 on-call incident resolution within SLA windows; authored escalation runbooks adopted across the team, accelerating new-hire onboarding by 30%.',
    ],
    tech: ['Python', 'Bash', 'Linux', 'Cisco ASA', 'Cisco FTD', 'Cisco ISE', 'ITSM'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Exposys Data Labs',
    location: 'India',
    duration: 'Sept 2021 – Oct 2021',
    logo: 'ED',
    bullets: [
      'Developed a language translation app using Flutter (Dart) on Android Studio, supporting translations from English to multiple languages with integrated read-aloud and voice recognition features.',
      'Authored a comprehensive report documenting the app development process, contributing to the team\'s knowledge base and improving project documentation.',
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
