import { Routes, Route, Navigate } from 'react-router'
import { useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext.jsx'
import SearchAppBar from './Header.jsx'
import UpcomingMovies from './pages/UpcomingMovies.jsx'
import NowPlayingMovies from './pages/NowPlayingMovies.jsx'

function App() {
  const [searchText, setSearchText] = useState('')
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    console.log('Me llamo siempre') 
  })

  useEffect(() => {
    console.log('Me llamo cuando searchText cambia de valor:', searchText)
  }, [searchText])

  const handleInputChange = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <>
      <SearchAppBar
        value={searchText}
        onChange={handleInputChange}
        language={language}
        onLanguageChange={(event) => setLanguage(event.target.value)}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/upcoming" replace />} />
        <Route path="/upcoming" element={<UpcomingMovies searchText={searchText} />} />
        <Route path="/now_playing" element={<NowPlayingMovies searchText={searchText} />} />
      </Routes>
    </>
  )
}

export default App
