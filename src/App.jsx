import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Можно добавлять другие роуты */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
