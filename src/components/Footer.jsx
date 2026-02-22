import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/varshini-krishna-mohan-2a7a32214', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/Varshini-Kashyap', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:varshinikmohan09@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer id="contact" className="py-14 bg-[#2C3E50]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* About column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-white mb-4"></h3>
            <p className="text-xl font-semibold text-white">Varshini Krishna Mohan</p>
            <p className="text-white/90 mb-3">Software Engineer | AI/ML & Full-Stack</p>
            <p className="text-white/80 italic">
              &ldquo;Building innovative solutions with cutting-edge technologies&rdquo;
            </p>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:varshinikmohan09@gmail.com"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors hover:underline"
              >
                <HiMail size={20} />
                <span>varshinikmohan09@gmail.com</span>
              </a>
              <a
                href="tel:+17039272562"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors hover:underline"
              >
                <HiPhone size={20} />
                <span>(703) 927-2562</span>
              </a>
              <p className="flex items-center gap-2 text-white/90">
                <HiLocationMarker size={20} />
                <span>Fairfax, VA</span>
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/90 transition-colors"
                  aria-label={link.label}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-white/20"
        >
          <p className="text-white/80 text-sm text-center mb-1">
            © 2026 Varshini Krishna Mohan. All rights reserved.
          </p>
          <p className="text-white/60 text-sm text-center">
            Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
