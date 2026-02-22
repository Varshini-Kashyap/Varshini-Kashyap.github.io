import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const NAME = 'Varshini Krishna Mohan'

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/10"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -5, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [displayName, setDisplayName] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= NAME.length) {
        setDisplayName(NAME.slice(0, i))
        i++
      } else {
        clearInterval(timer)
        setShowCursor(false)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2C3E50] via-[#1a252f] to-[#0f1419] px-8 pt-20"
    >
      <Particles />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 min-h-[1.2em]">
            {displayName}
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-[0.9em] bg-white ml-0.5 align-middle"
              />
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 font-medium mb-2"
          >
            Software Engineer | AI/ML & Full-Stack
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base md:text-lg text-white/80 mb-6"
          >
            Master&apos;s in Computer Science @ George Mason University | Graduating May 2026
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-sm md:text-base text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Passionate about building scalable AI-powered applications and solving complex
            problems through innovative software solutions. 2+ years of experience in
            full-stack development, cloud infrastructure, and machine learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-full bg-white text-[#2C3E50] font-semibold hover:bg-white/90 transition-colors"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#2C3E50] transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/varshini-krishna-mohan-2a7a32214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/Varshini-Kashyap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:varshinikmohan09@gmail.com"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Email"
            >
              <HiMail size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiArrowDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  )
}
