import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
        Привет, я fullStack Web разработчик
      </h1>
      <p style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '2rem' }}>
        Я — тот, кто сделает твой проект лучшим.<hr></hr>
        а ещё, я люблю печеньки с молоком
      </p>

      {/* Блок со стеком */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Пример иконки — можно взять в публичном доступе, либо svg в папке public */}
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            style={{ width: '50px', height: '50px' }}
          />
          <p>Python</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            style={{ width: '50px', height: '50px' }}
          />
          <p>JavaScript</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            style={{ width: '50px', height: '50px' }}
          />
          <p>React</p>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
