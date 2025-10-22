import { useState, useEffect } from "react"
import { useLanguage } from "./LanguageContext"

// custom hook
export function useMovies(movieType) {
  const [movies, setMovies] = useState([])
  const { language } = useLanguage()

  useEffect(() => {
    console.log('Me llamo solo una vez')

    fetch(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=${language}`)
      .then(response => response.json())
      .then((upcoming) => {
        const newMovies = upcoming.results.map(movie => {
          return {
            ...movie,
            poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }
        })
        setMovies(newMovies)
      })
  }, [movieType, language])

  return movies
}
