import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'

const projects = [
  {
    title: 'ConnectEd - AI Alumni Mentorship Platform',
    description:
      'Developed AI-powered platform matching college students with alumni mentors using intelligent algorithms; implementing cloud-native architecture with scalable backend services for seamless networking experience.',
    tech: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'AI Matching Algorithms'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Varshini-Kashyap/ConnectEd.git', icon: 'github' },
    ],
    status: 'Jan 2026',
  },
  {
    title: 'DualReview - AI Code Reviewer & Migration Platform',
    description:
      'Full-stack developer tool supporting automated code review and cross-language migration across 12 programming languages. Implemented dual-review workflow achieving 20-35% quality improvement and detecting 90%+ of bugs and security vulnerabilities.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'Claude API', 'React', 'PostgreSQL'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Varshini-Kashyap/DualReview-AI-Code-Reviewer-Migration-Platform.git', icon: 'github' },
    ],
    status: 'Dec2025',
  },
  {
    title: 'AI-Powered Homework Grader',
    description:
      'Full-stack grading platform with automated evaluation workflows and analytics, reducing grading time by 60% while ensuring consistency and responsible AI use.',
    tech: ['Python', 'Flask', 'React', 'LLM APIs', 'PostgreSQL'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Varshini-Kashyap/Homework-Grader.git', icon: 'github' },
    ],
    status: 'Sep2025',
  },
  {
    title: 'LLM Resume Evaluation System',
    description:
      'Built comprehensive AI evaluation pipeline comparing Llama 3.2, Mistral 7B, and Phi-3 Mini across 900+ test cases; discovered 30-40% score variance between models highlighting reliability challenges in AI-driven recruitment.',
    tech: ['Python', 'PyTorch', 'Llama 3.2', 'Mistral 7B', 'Phi-3 Mini', 'Flask'],
    links: [
      { label: 'Paper', url: 'https://1drv.ms/b/c/68a4999b3b22ea6c/IQBiUCG8EuqMS4wCvo0s1Xy7Ac5Xhwt_weMj9hHad_aTMH4?e=kCDNEJ', icon: 'paper' },
    ],
    status: 'Dec 2025',
  },
  {
    title: 'Sign Language Recognition System',
    description:
      'Real-time ML system recognizing sign language gestures achieving 92% accuracy; applied CNN architecture for accessibility applications enabling communication for hearing-impaired users.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Computer Vision', 'CNN'],
    links: [
      { label: 'Paper', url: 'https://pices-journal.com/ojs/index.php/pices/article/view/380/', icon: 'paper' },
    ],
    status: 'Nov 2022',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] inline-block">
            Projects
            <motion.span
              className="block h-1 bg-[#2C3E50] rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-xl overflow-hidden border-2 border-transparent hover:border-[#2C3E50] shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-[#2C3E50]">{project.title}</h3>
                  <span className="flex-shrink-0 text-xs text-gray-500 font-medium">
                    {project.status}
                  </span>
                </div>

                <p className="text-sm text-[#000000] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-[#2C3E50] text-white text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                        link.icon === 'github'
                          ? 'bg-[#2C3E50] text-white hover:opacity-90'
                          : 'border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white'
                      }`}
                    >
                      {link.icon === 'github' ? (
                        <>
                          <FaGithub size={18} />
                          {link.label}
                        </>
                      ) : (
                        <>
                          <HiDocumentText size={18} />
                          View Paper
                        </>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
