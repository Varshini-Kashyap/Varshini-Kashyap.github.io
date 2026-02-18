import { useState } from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', percent: 90 },
      { name: 'JavaScript/TypeScript', percent: 85 },
      { name: 'Java', percent: 75 },
      { name: 'C++', percent: 70 },
      { name: 'C#', percent: 65 },
      { name: 'Go', percent: 50 },
      { name: 'SQL', percent: 85 },
    ],
  },
  {
    title: 'AI/ML & GenAI',
    skills: [
      { name: 'LLMs (GPT-4, Claude)', percent: 90 },
      { name: 'Prompt Engineering', percent: 90 },
      { name: 'PyTorch', percent: 75 },
      { name: 'TensorFlow', percent: 75 },
      { name: 'RAG Architecture', percent: 85 },
      { name: 'LangChain', percent: 85 },
      { name: 'Transformers', percent: 70 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (ECS, Fargate, EC2, S3, Lambda, RDS)', percent: 85 },
      { name: 'Azure', percent: 65 },
      { name: 'Docker', percent: 80 },
      { name: 'Kubernetes', percent: 60 },
      { name: 'CI/CD', percent: 85 },
      { name: 'CloudFormation', percent: 80 },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js/Express.js', percent: 85 },
      { name: 'FastAPI', percent: 85 },
      { name: 'Flask', percent: 80 },
      { name: 'Django', percent: 70 },
      { name: 'REST APIs', percent: 90 },
      { name: 'Microservices', percent: 75 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', percent: 85 },
      { name: 'Redux', percent: 70 },
      { name: 'Tailwind CSS', percent: 80 },
      { name: 'HTML5/CSS3', percent: 90 },
      { name: 'Angular', percent: 55 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', percent: 85 },
      { name: 'MySQL', percent: 80 },
      { name: 'MongoDB', percent: 75 },
      { name: 'ChromaDB', percent: 70 },
      { name: 'Vector Databases', percent: 75 },
    ],
  },
  {
    title: 'Development Practices',
    skills: [
      { name: 'Agile/Scrum', percent: 85 },
      { name: 'Git', percent: 90 },
      { name: 'Code Reviews', percent: 85 },
      { name: 'Object-Oriented Design', percent: 85 },
      { name: 'Data Structures & Algorithms', percent: 80 },
    ],
  },
]

function SkillBar({ name, percent }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-[#000000]">{name}</span>
      </div>
      <div
        className="relative group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#2C3E50] text-white text-xs font-medium whitespace-nowrap z-10">
            {percent}%
          </div>
        )}
        <div
          className="h-2 rounded-[4px] overflow-hidden"
          style={{ backgroundColor: '#F8F9FA' }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full rounded-[4px]"
            style={{ backgroundColor: '#2C3E50' }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
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

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 md:p-6 rounded-xl border-2 border-transparent hover:border-[#2C3E50] bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-[#2C3E50] mb-6">
                {category.title}
              </h3>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
