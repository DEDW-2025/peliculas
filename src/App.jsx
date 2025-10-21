import { Button } from '@mui/material'
import Movie from './movies.jsx'
import { useState, useEffect } from 'react'

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
  const [movies, setMovies] = useState([])
  const [movieType, setMovieType] = useState('upcoming')

  useEffect(() => {
    console.log('Me llamo siempre') 
  })

  useEffect(() => {
    console.log('Me llamo solo una vez')

    fetch(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=es-CL`)
      .then(response => response.json())
      .then((upcoming) => {
        console.log(upcoming)
        const newMovies = upcoming.results.map(movie => {
          return {
            ...movie,
            poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }
        })
        setMovies(newMovies)
      })
  }, [movieType])

  useEffect(() => {
    console.log('Me llamo cuando searchText cambia de valor:', searchText)
  }, [searchText])

  const handleInputChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleSelectChange = (event) => {
    console.log(event.target.value)
    setMovieType(event.target.value)
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
      <Button variant="contained">
        Hello World!
      </Button>
      <select
        value={movieType}
        onChange={handleSelectChange}
      >
        <option value="upcoming">
          Próximas películas
        </option>
        <option value="now_playing">
          En cartelera
        </option>
      </select>
      <input
        value={searchText}
        style={{ marginBottom: '10px' }}
        onChange={handleInputChange}
      />
      <div className="movie-list">
        {movies.filter(filterMovie).map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
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
