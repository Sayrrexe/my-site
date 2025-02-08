import React from 'react'
import { motion } from 'framer-motion'

function GitHubLink() {
  return (
    <motion.section
      id="github"
      style={{ padding: '2rem', textAlign: 'center' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2>GitHub</h2>
      <p>
        <a href="https://github.com/Sayrrexe/" style={{ color: '#00FFD1' }}>
          Посмотреть все проекты
        </a>
      </p>
    </motion.section>
  )
}

export default GitHubLink
