import './App.css'
import Movie from './movies.jsx'
import movies from './data/movies.json'

function Header() {
  return (
    <div>
      <h1>Cartelera Comunidad Castillo</h1>
      <h2 style={{ color: 'yellow' }}>Octubre 2025</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <input style={{ marginBottom: '10px' }} />
      <div className="movie-list">
        {movies.map(movie => (
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
