import { motion } from 'framer-motion'

const highlights = [
  'Graduating May 2026',
  '2+ Years Experience',
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
                I am a CS grad student at George Mason University with 2+ years of experience building and leading production systems. I care about writing software that actually ships, not just demos, but real products that people use. My work spans AI backends, full-stack web platforms, and cloud infrastructure on AWS.
              </p>
              <p className="text-[#000000] text-base md:text-lg leading-relaxed mb-4">
                At InterAgency Inc., I led the end-to-end development of two production systems: Perry, a RAG-based AI assistant where I designed the evaluation pipeline, benchmarked 15 LLMs against 140 real-world questions, and drove the architecture from concept to AWS deployment, and a proposal management platform I took from Figma wireframes to a live product with React, Node.js, MySQL, Auth0, and Stripe, achieving 85% team adoption.
              </p>
              <p className="text-[#000000] text-base md:text-lg leading-relaxed mb-4">
                Beyond engineering, I mentor student builders at hackathons and create-a-thons, support GMU's Mason Autism Support Initiative through technical workshops, and have shipped projects across five hackathons including a real-time AI meeting assistant, an event-driven microservices platform, and an AI mentor-matching app built in 24 hours.
              </p>
              <p className="text-[#000000] text-base md:text-lg leading-relaxed mb-5">
                I lead best when the problem is hard, the stakes are real, and the team needs someone who can both architect a solution and bring others along for it. Seeking full-time Software Engineer or AI/ML Engineer roles starting May 2026.
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
