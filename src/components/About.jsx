import { motion } from 'framer-motion'

const highlights = [
  'Graduating May 2026',
  '3+ Years Experience',
  'AWS & Azure Certified',
  'Full-Stack Developer',
  'AI/ML Engineer',
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] inline-block">
            About Me
            <motion.span
              className="block h-1 bg-[#2C3E50] rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[minmax(200px,280px)_1fr] gap-8 items-center">
          {/* Image - slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center min-h-0"
          >
            <div className="aspect-[3/4] w-56 max-w-[240px] md:w-52 md:max-w-[220px] mx-auto rounded-2xl overflow-hidden bg-[#2C3E50] relative shadow-xl -ml-4 -mt-4 md:-ml-5 md:-mt-5">
              <img
                src="/profile.jpg"
                alt="Varshini Krishna Mohan"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.style.display = 'none'
                  const fallback = e.target.parentElement?.querySelector('.profile-fallback')
                  if (fallback) fallback.classList.remove('hidden')
                }}
              />
              <div className="profile-fallback hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2C3E50] to-[#1a252f] text-white text-4xl font-bold">
                VK
              </div>
            </div>
          </motion.div>

          {/* Content - slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="max-w-3xl">
              <p className="text-[#000000] text-base md:text-lg leading-relaxed mb-4">
                I am a Computer Science graduate student at George Mason University passionate about building AI-powered applications that solve real-world problems. With hands-on experience across the full software development lifecycle, I specialize in architecting scalable systems that bridge cutting-edge AI with production-ready engineering.
              </p>
              <p className="text-[#000000] text-base md:text-lg leading-relaxed mb-4">
                At InterAgency Inc., I led the development of an AI chatbot from concept to deployment architecting RAG-based systems, designing cloud infrastructure on AWS ECS Fargate, and mentoring team members through technical challenges. My work spans building full-stack applications with React and Python, deploying containerized microservices, and evaluating LLMs to understand their real-world reliability.
              </p>
              <p className="text-[#000000] text-base md:text-lg leading-relaxed mb-5">
                What drives me is the intersection of innovation and impact: leveraging technologies like prompt engineering, multi-agent systems, and cloud-native architectures to create software that's not just functional, but transformative. Whether it's reducing manual workflows by 60% or building developer tools that detect 90% of bugs automatically, I'm motivated by measurable outcomes that matter.
              </p>
              <p className="text-[#000000] text-base md:text-lg leading-relaxed mb-5">
                Currently seeking full-time Software Engineer or AI/ML Engineer opportunities starting May 2026 where I can continue building, learning, and leading.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                {highlights.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-[#2C3E50] text-white text-sm font-medium"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
