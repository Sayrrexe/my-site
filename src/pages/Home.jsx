import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import GitHubLink from '../components/GitHubLink'
import Contacts from '../components/Contacts'

function Home() {
  // Управляем модальным окном
  const [contactsOpen, setContactsOpen] = useState(false)

  const handleContactsClick = () => {
    setContactsOpen(true)
  }

  const handleCloseContacts = () => {
    setContactsOpen(false)
  }

  // Нажатие на GitHub (можно и напрямую ссылку)
  const handleGitHubClick = () => {
    window.open('https://github.com/Sayrrexe/', '_blank')
  }

  return (
    <div style={{ background: '#2e2e2e', color: '#ECECEC' }}>
      <Header 
        onContactsClick={handleContactsClick}
        onGitHubClick={handleGitHubClick}
      />
      <Hero />
      {/* GitHubLink в принципе уже не обязателен, 
          раз клик "GitHub" есть в хедере,
          но если хочешь блок на странице, оставь */}
      <GitHubLink />
      
      {/* Модальное окно контактов будет в конце DOM, но не скроллится */}
      <Contacts isOpen={contactsOpen} onClose={handleCloseContacts} />

    </div>
  )
}

export default Home
