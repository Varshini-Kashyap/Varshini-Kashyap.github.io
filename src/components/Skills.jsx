import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = {
  'Languages':              ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Bash', 'Dart', 'C++'],
  'AI & ML':                ['RAG Pipelines', 'Agentic AI', 'LangChain', 'LangGraph', 'LlamaIndex', 'Hugging Face', 'SentenceTransformers', 'PyTorch', 'TensorFlow', 'OpenCV', 'Prompt Engineering', 'LLMOps', 'NLP', 'Anthropic Claude API', 'OpenAI API', 'Groq API', 'NVIDIA NIM'],
  'Frontend':               ['React.js', 'Next.js', 'Flutter', 'Tailwind CSS', 'Vite'],
  'Backend':                ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'ASP.NET Core', 'REST APIs', 'Microservices', 'Auth0', 'JWT', 'OAuth 2.0', 'RBAC', 'Stripe API'],
  'Databases & Messaging':  ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'ChromaDB', 'Apache Kafka', 'WebSockets'],
  'Cloud & DevOps':         ['AWS (ECS Fargate, EKS, EC2, S3, RDS, EFS, Lambda, SQS, ALB, CloudFront, API Gateway, Bedrock, SageMaker, IAM)', 'Azure (App Service, Azure SQL)', 'Docker', 'Kubernetes', 'GitHub Actions CI/CD', 'Linux'],
}

const tabs = ['All', ...Object.keys(categories)]

export default function Skills() {
  const [active, setActive] = useState('All')

  const chips = active === 'All'
    ? Object.values(categories).flat()
    : categories[active]

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] inline-block">
            Technical Skills
            <motion.span
              className="block h-1 bg-[#2C3E50] rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                active === tab
                  ? 'bg-[#2C3E50] text-white'
                  : 'bg-[#F8F9FA] text-[#2C3E50] hover:bg-[#2C3E50]/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Chips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap gap-2.5"
          >
            {chips.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
                className="px-3.5 py-1.5 rounded-full bg-[#2C3E50] text-white text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
