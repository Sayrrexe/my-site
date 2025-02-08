import React from 'react'

function Header({ onContactsClick, onGitHubClick }) {
  return (
    <header
      style={{
        height: '80px', 
        display: 'flex',
        alignItems: 'center',    
        justifyContent: 'center',
        padding: '0 2rem',
        fontSize: '1.25rem'
      }}
    >
      <nav style={{ display: 'flex', gap: '2rem' }}>
        <a className="nav-link" href="#hero">Home</a>
        <span className="nav-link" onClick={onGitHubClick} style={{ cursor: 'pointer' }}>
          GitHub
        </span>
        <span className="nav-link" onClick={onContactsClick} style={{ cursor: 'pointer' }}>
          Contacts
        </span>
      </nav>
    </header>
  )
}

export default Header
