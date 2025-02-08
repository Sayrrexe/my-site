import React from 'react'

function NotFound() {
  return (
    <div style={{
      background: '#121212',
      color: '#ECECEC',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1>Упс! Такой страницы не найдено</h1>
      <a
        href="https://sayrx.lol/"
        style={{
          marginTop: '1rem',
          color: '#00FFD1',
          textDecoration: 'underline'
        }}
      >
        На главную
      </a>
    </div>
  )
}

export default NotFound
