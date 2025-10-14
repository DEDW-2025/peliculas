import './App.css'
import Movie from './movies.jsx'
import movies from './data/movies.json'
import { useState } from 'react'

function Header() {
  return (
    <div>
      <h1>Cartelera Comunidad Castillo</h1>
      <h2 style={{ color: 'yellow' }}>Octubre 2025</h2>
    </div>
  )
}

function App() {
  const [searchText, setSearchText] = useState('')

  const handleInputChange = (event) => {
    setSearchText(event.target.value)
  }

  const filterMovie = (movie) => {
    if (searchText.length == 0) {
      return true
    }

    if (movie.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
      return true
    }

    return false
  }

  return (
    <>
      <Header />
      <input
        value={searchText}
        style={{ marginBottom: '10px' }}
        onChange={handleInputChange}
      />
      <div className="movie-list">
        {movies.filter(filterMovie).map(movie => (
          <Movie
            name={movie.title}
            description={movie.overview}
            image={movie.poster_path}
          />
        ))}
      </div>
    </>
  )
}

export default App
