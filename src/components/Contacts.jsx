import React from 'react'
import { motion } from 'framer-motion'

function Contacts({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ y: '-100vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              background: '#1e1e1e',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'left',
              width: '300px',
              maxWidth: '90%',
            }}
          >
            <h3 style={{ marginBottom: '1rem' }}>Мои контакты</h3>
            <p>Email: sayrrexe@gmail.com</p>
            <p>Telegram: @wiseprog</p>

            <button
              onClick={onClose}
              style={{
                marginTop: '1rem',
                background: 'var(--accent)',
                color: '#121212',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
              }}
            >
              Закрыть
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Contacts
