import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'

const projects = [
  {
    title: 'CollabBoard - Real-Time Collaborative Kanban Board',
    description:
      'Real-time collaborative Kanban board with live multi-user updates. Built with ASP.NET Core 8 and SignalR for the backend, Flutter Web for the frontend, deployed on Azure App Service and Firebase Hosting.',
    tech: ['ASP.NET Core 8', 'SignalR', 'Flutter Web', 'Azure', 'Firebase'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Varshini-Kashyap/Collab_Board.git', icon: 'github' },
    ],
    status: 'Mar 2026',
  },
  {
    title: 'TwinMind Copilot - Real-Time AI Meeting Assistant',
    description:
      'Real-time AI meeting copilot transcribing live audio every 5 seconds and surfacing 3 contextual suggestions per batch. Engineered a chain-of-thought prompt pipeline forcing named entity extraction before generation, eliminating hallucination and grounding every suggestion in what was actually said. Deployed on Vercel with streaming chat and session export.',
    tech: ['React', 'Groq Whisper Large V3', 'GPT-OSS 120B', 'Vite', 'Vercel'],
    links: [
      { label: 'Live Demo', url: 'https://twinmind-copilot-ten.vercel.app/', icon: 'external' },
    ],
    status: 'Apr 2026',
  },
  {
    title: 'NLBot - Voice-Driven NL Task Planner',
    description:
      'Built a voice-driven task planning interface for a simulated robot agent that transcribes spoken commands via Web Speech API, decomposes goals into structured JSON action plans using Claude Sonnet over WebSocket, and executes them on a 2D GMU campus simulation with plan review, mid-task correction, and automated error recovery across 7 campus buildings.',
    tech: ['Python', 'NLP', 'ROS', 'HRI'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Varshini-Kashyap/NL_Bot.git', icon: 'github' },
    ],
    status: 'Apr 2026',
  },
  {
    title: 'ConnectEd - AI Alumni Mentorship Platform',
    description:
      'AI mentor-matching platform built in 24 hours at HackFax x PatriotHacks 2026. Integrated Groq LLM recommendations into a FastAPI backend with JWT auth and React 18 frontend, containerized with Docker.',
    tech: ['FastAPI', 'React 18', 'Groq API', 'JWT', 'SQLite', 'Docker'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Varshini-Kashyap/ConnectEd.git', icon: 'github' },
    ],
    status: 'Jan 2026',
  },
  {
    title: 'Axono- AI Building Permits Chatbot',
    description:
      'Production RAG-based chatbot helping users navigate DC and Montgomery County building permit processes. Built with Claude Sonnet API, ChromaDB vector storage, and Flask backend, deployed on AWS ECS Fargate with EFS persistent storage and ALB.',
    tech: ['Python', 'Flask', 'Claude API', 'ChromaDB', 'AWS ECS Fargate', 'Auth0', 'Stripe'],
    links: [
      { label: 'Live Demo', url: 'http://perry-alb-1208806327.us-east-1.elb.amazonaws.com/', icon: 'external' },
    ],
    status: 'Dec 2025',
  },
  {
    title: 'DualReview - AI Code Reviewer & Migration Platform',
    description:
      'Developer tool supporting automated code review and cross-language migration across 12 programming languages. Engineered a dual-LLM review workflow with LangChain delivering 20-35% code quality improvement and detecting 90%+ of bugs and security vulnerabilities.',
    tech: ['Python', 'LangChain', 'React', 'PostgreSQL'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Varshini-Kashyap/DualReview-AI-Code-Reviewer-Migration-Platform.git', icon: 'github' },
    ],
    status: 'Dec 2025',
  },
  {
    title: 'LLM Resume Evaluation System',
    description:
      'Research pipeline comparing Llama 3.2, Mistral 7B, and Phi-3 Mini across 900 evaluations for resume screening. Discovered weak inter-model ranking correlation (ρ ≈ 0.45), showing that hiring outcomes depend on model choice. Published findings.',
    tech: ['Python', 'Llama 3.2', 'Mistral 7B', 'Phi-3 Mini', 'Flask', 'React'],
    links: [
      { label: 'Paper', url: 'https://1drv.ms/b/c/68a4999b3b22ea6c/IQBiUCG8EuqMS4wCvo0s1Xy7Ac5Xhwt_weMj9hHad_aTMH4?e=kCDNEJ', icon: 'paper' },
    ],
    status: 'Dec 2025',
  },
  {
    title: 'Sign Language Recognition System',
    description:
      'Real-time ML system recognizing ASL gestures with 92% classification accuracy. Trained a CNN model with TensorFlow and OpenCV on custom gesture datasets; published peer-reviewed findings in PiCES Journal.',
    tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'CNN'],
    links: [
      { label: 'Publication', url: 'https://pices-journal.com/ojs/index.php/pices/article/view/380/', icon: 'paper' },
    ],
    status: 'Dec 2022',
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
                      ) : link.icon === 'external' ? (
                        <>
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
