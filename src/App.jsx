import { Button, Container, Box, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import Movie from './movies.jsx'
import { useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext.jsx'
import { useMovies } from './hooks.js'
import SearchAppBar from './Header.jsx'

function App() {
  const [searchText, setSearchText] = useState('')
  const [movieType, setMovieType] = useState('upcoming')
  const movies = useMovies(movieType)
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
      <SearchAppBar
        value={searchText}
        onChange={handleInputChange}
        language={language}
        onLanguageChange={(event) => setLanguage(event.target.value)}
      />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 3 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="movie-type-label">Tipo de película</InputLabel>
            <Select
              labelId="movie-type-label"
              value={movieType}
              onChange={handleSelectChange}
              label="Tipo de película"
            >
              <MenuItem value="upcoming">Próximas películas</MenuItem>
              <MenuItem value="now_playing">En cartelera</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={3}>
          {movies.filter(filterMovie).map(movie => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.id}>
              <Movie
                id={movie.id}
                name={movie.title}
                description={movie.overview}
                image={movie.poster_path}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default App
